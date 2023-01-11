#### STEPS

1. npm install

2. Adding a folder inside generateZipFile folder with the following content:

- Imaging steps folders, ej: 2,3,4
- Wells folders, ej 1,2,3,4........96
- Images with jpg or png extension which would be compressed

3. Initialising the compressor program:

# 3.1 start

npm run generateZip

4. Initialising the send images program:

##### Requirements to execute the sendImages

a) `Tested with node 10`
b) `Send the correct zip file according to the PLATE TYPE: `

- 8.5K 24-well : Admites both zip file structure 6Images and 24Images
- 26K 24-well: Only admites 24Images file structure
- 8.5K 96-well: Only admites 24Images file structure

# 4.1 start

npm run sendImages
