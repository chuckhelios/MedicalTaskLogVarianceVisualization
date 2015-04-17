#author: Yang Li
#subject: process data from athena
import pandas as pd
import numpy as np
import datetime

def createDateList(startDate, endDate, format):
	start = datetime.datetime.strptime(startDate, format)
	end = datetime.datetime.strptime(endDate, format)
	date_generated = [start + datetime.timedelta(days=x) for x in range(0, (end-start).days+1)]
	return date_generated	

data = pd.read_csv('SI649athena.csv')
cols = ['departmentid', 'encountertask']
# cols = ['encounterdate', 'encountertask']
data = data[cols]
data = data.dropna(how='any')
# print data.shape
# groupby col
newdata = data.groupby(cols).apply(lambda x: x['encountertask'].count())
newdata.to_csv('athena_over.csv',header=True)


data = pd.read_csv('athena_over.csv')
newcols = ['dep_id', 'key','value']
data.columns = ['dep_id', 'key', 'value']
print data.shape
							
data = data.sort(['dep_id','key'], ascending=[1, 1])
data = data[newcols]

data.to_csv('athena_over.csv', index=False)
