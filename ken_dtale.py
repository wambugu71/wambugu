import pandas as  pd
import  dtale
import  streamlit as  st
filename = "auto-mpg.csv"
df = pd.read_csv(filename).head()
d = dtale.show(df, port = 5000)
st.write("dtale  demo")
st.write(" <a href='http://wambugu:5000/dtale/main/1' target='_blank'>Wambugu Kinyua</a>", unsafe_allow_html =True)
