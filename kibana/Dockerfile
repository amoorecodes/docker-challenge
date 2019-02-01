FROM docker.elastic.co/kibana/kibana:5.4.1
# remove all favicons from the folder
# RUN 'rm -rf /usr/share/kibana/src/ui/public/assets/favicons/*'
# insert your favicons
# COPY favicons/* /usr/share/kibana/src/ui/public/assets/favicons/

# temporary working version
COPY favicons/* /usr/share/kibana/temp/favicons/

# insert your logo into public images folder
# 6.6.0 pwd /usr/share/kibana/src/ui/images/
# original folder 
COPY logo/* /usr/share/kibana/src/ui/public/images/

# remove base CSS
# RUN 'rm -rf /usr/share/kibana/src/ui/public/chrome/directives/global_nav.global_nav.less'
# inject custom CSS
COPY styles/k541/global_nav/* /usr/share/kibana/src/ui/public/chrome/directives/global_nav/
# RUN 'rm -rf /usr/share/kibana/src/ui/public/chrome/directives/global_nav/global_nav_link/global_nav_link.less'
COPY styles/k541/global_nav_link/* /usr/share/kibana/src/ui/public/chrome/directives/global_nav/global_nav_link/

# remove compiled bundles
# RUN 'rm -rf /usr/share/kibana/optimize/bundles'
# make kibana rebundle itself
# RUN '/bin/kibana --optimize'
