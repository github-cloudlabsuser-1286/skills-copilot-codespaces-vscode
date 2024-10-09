# Define variables
$storageAccountName = "mystorageaccount"
$resourceGroupName = "myResourceGroup"
$location = "East US"
$sku = "Standard_LRS"

# Login to Azure (if not already logged in)
az login

# Create a resource group
az group create --name $resourceGroupName --location $location

# Create a storage account
az storage account create `
  --name $storageAccountName `
  --resource-group $resourceGroupName `
  --location $location `
  --sku $sku `
  --kind StorageV2

Write-Output "Storage account $storageAccountName created successfully in resource group $resourceGroupName."