# test-deploy

## PREPARA VPS
Instalar Docker
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER

### Instalar docker compose 
// amazon linux 
sudo dnf install -y docker-compose
// rhel
sudo dnf -y install dnf-plugins-core
sudo dnf config-manager --add-repo https://download.docker.com/linux/rhel/docker-ce.add-repo
sudo dnf install docker-compose-plugin
// debian ubuntu etc
sudo apt install -y docker-compose

### Crear carpeta del proyecto
sudo mkdir -p /opt/test-deploy
sudo chown $USER:$USER /opt/test-deploy

### Clonar proyecto
git clone https://github.com/mmppppss/test-deploy/

