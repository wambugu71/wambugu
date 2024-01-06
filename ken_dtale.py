import pandas as  pd
import  dtale
import  streamlit as  st
filename = "C:/Users/kenli/auto_eda/auto-mpg.csv"
df = pd.read_csv(filename).head()
d = dtale.show(df)
st.write("dtale  demo")
st.write(" <a href='http://wambugu:40000/dtale/main/1' target='_blank'>Wambugu Kinyua</a>", unsafe_allow_html =True)
