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

newdata = pd.read_csv('dept_norm.csv')
cols = ['dep_id','key']
newdata = newdata.groupby(cols).apply(lambda x: x['value'].sum())
newdata.to_csv('anthena_boxplot3.csv',header=True)

newdata = pd.read_csv('anthena_boxplot3.csv')
newdata.columns = ['dep_id', 'key', 'value']

newdata = newdata.sort(['dep_id','key'], ascending=[1, 1])
newdata = newdata[['dep_id','key','value']]
newdata.to_csv('anthena_boxplot3.csv',index=False)
