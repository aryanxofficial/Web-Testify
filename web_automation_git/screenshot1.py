import json
import time

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service

serv_obj = Service("C:\ChromeDriver\chromedriver_win32\chromedriver.exe")
driver = webdriver.Chrome()

chrome_options = Options()
chrome_options.add_experimental_option("detach", True)
# chrome_options.add_argument("--headless")

driver.get(
    "https://www.dell.com/dci/idp/dwa/register?response_type=id_token&client_id=228467e4-d9b6-4b04-8a11-45e1cc9f786d&redirect_uri=https://www.dell.com/identity/global/in/228467e4-d9b6-4b04-8a11-45e1cc9f786d&scope=openid&code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM&code_challenge_method=S256&tag=cid%3dcd2b5dd5-6d9b-4663-92f3-cfad4aff3c94%2caid%3ddc1da59a-70e1-4a73-ae77-a35f9bc4a97d&nonce=eoivq3ncqbwzbbarego1yacb&state=aHR0cHM6Ly93d3cuZGVsbC5jb20vSWRlbnRpdHkvZ2xvYmFsL0luL2NkMmI1ZGQ1LTZkOWItNDY2My05MmYzLWNmYWQ0YWZmM2M5ND9jPWluJmw9ZW4mcj1hcCZzPWNvcnAmYWN0aW9uPXJlZ2lzdGVyJnJlZGlyZWN0VXJsPQ%3d%3d")

# screenshots of all input elements

cont = driver.find_elements(By.TAG_NAME, "input")
print(len(cont))
dictionary = {}
l1 = []
for i in cont:
    elem_size1 = i.size
    str1 = len(i.get_attribute("id"))
    if (elem_size1['width'] != 0) and (str1 > 0):
        print(i.get_attribute("id"))
        l1.append(i)
a = 0
for j in l1:
    j.screenshot("Images\\input" + str(a) + ".png")
    str1 = "input" + str(a)
    str2 = "#" + j.get_attribute("id")
    dictionary[str1] = str2
    a += 1

    json_object = json.dumps(dictionary, indent=2)

    with open("sample.json", "w") as file:
        file.write(json_object)

# screenshots of all 'button' elements

cont1 = driver.find_elements(By.TAG_NAME, "button")
print(len(cont1))

dictionary1 = {}

l2 = []
for i in cont1:
    elem_size2 = i.size
    str1 = len(i.get_attribute("id"))
    if (elem_size2['width'] != 0) and (str1 > 0):
        print(i.get_attribute("id"))
        l2.append(i)

a = 0

for j in l2:
    j.screenshot("Images\\button" + str(a) + ".png")
    str1 = "button" + str(a)
    str2 = "#" + j.get_attribute("id")

    dictionary[str1] = str2
    a += 1

    json_object = json.dumps(dictionary, indent=2)

    # Writing to sample.json

    # with open("sample1.json", "r+") as file:
    #     dictionary1 = json.load(file)
    #
    # dictionary1.update(json_object)

    with open("sample.json", "w") as file:
        file.write(json_object)

# screenshots of all 'a' tag elements

cont2 = driver.find_elements(By.TAG_NAME, "a")
print(len(cont2))

time.sleep(1)

l3 = []
for i in cont2:
    elem_size3 = i.size
    str1 = len(i.get_attribute("id"))

    if (elem_size3['width'] != 0) and (str1 > 0):
        print(i.get_attribute("id"))
        l3.append(i)

a = 0
dictionary2 = {}
for j in l3:
    j.screenshot("Images\\a_tag" + str(a) + ".png")
    str1 = "a_tag" + str(a)
    str2 = "#" + j.get_attribute("id")

    dictionary[str1] = str2
    a += 1
    json_object = json.dumps(dictionary, indent=2)

    # Writing to sample.json
    with open("sample.json", "w") as file:
        file.write(json_object)
