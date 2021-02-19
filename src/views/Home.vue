<template>
  <div class="dashboard-view">
    <!-- The Navbar -->
    <the-navbar>
      <template>
        <b-nav-item @click="toggleSidebar">
          <font-awesome-icon icon="bars" size="lg" class="theme-logo" />
        </b-nav-item>
      </template>
      <template v-slot:breadcrumb>
        <the-breadcrumbs></the-breadcrumbs>
      </template>
    </the-navbar>

    <!-- Main Container -->
    <div
      class="main-container"
      :class="{
        sidebarOpen: !sidebardata.collapsed,
        mobile: sidebardata.hideOnMobile,
      }"
    >
      <router-view
        v-if="!isLoading"
        :key="$route.fullPath"
        :mobile="sidebardata.hideOnMobile"
        :dashboards="dataFromHome"
      ></router-view>

      <!-- Overlay -->
      <div class="overlay" @click="toggleSidebar"></div>
    </div>

    <!-- The Sidebar -->
    <the-sidebar :sidebardata="sidebardata"></the-sidebar>
  </div>
</template>

<script>
import TheBreadcrumbs from "../components/TheBreadcrumbs.vue";
import TheNavbar from "../components/TheNavbar.vue";
import TheSidebar from "../components/TheSidebar.vue";

export default {
  components: {
    TheNavbar,
    TheSidebar,
    TheBreadcrumbs,
  },
  data() {
    return {
      isLoading: true,
      dataFromHome: [],

      sidebardata: {
        collapsed: window.innerWidth <= 1090 ? true : false,
        showChild: false,
        hideToggle: true,
        disableHover: true,
        widthCollapsed: "50px",
        width: "212px",
        hideOnMobile: window.innerWidth <= 600 ? true : false,
        menu: [
          {
            href: "/",
            title: "Home",
            icon: {
              element: "font-awesome-icon",
              attributes: {
                icon: "home",
              },
            },
          },
          {
            // href: "/",
            title: "Dashboards",
            icon: {
              element: "font-awesome-icon",
              attributes: {
                icon: "tachometer-alt",
              },
            },
            child: [
              {
                href: "/dashboard1",
                title: "Inflation",
                icon: {
                  element: "font-awesome-icon",
                  attributes: {
                    icon: "tachometer-alt",
                  },
                },
              },
              {
                href: "/dashboard2",
                title: "Inflation-Single",
                icon: {
                  element: "font-awesome-icon",
                  attributes: {
                    icon: "tachometer-alt",
                  },
                },
              },
            ],
          },
          {
            // href: "/edit",
            title: "Edit",
            icon: {
              element: "font-awesome-icon",
              attributes: {
                icon: "edit",
              },
            },
          },
        ],
      },
    };
  },
  // watch: {
  //   $route(to) {
  //     if (to.name === "dashboard1") {
  //       this.dataFromHome = dashboards.listOfDashboards[0];
  //     }
  //     if (to.name === "dashboard2") {
  //       this.dataFromHome = dashboards.listOfDashboards[1];
  //     }
  //   },
  // },
  methods: {
    toggleSidebar() {
      this.sidebardata.collapsed = !this.sidebardata.collapsed;
    },
    fetchData() {
      this.isLoading = true;
      fetch(
        "https://admin-dashboard-980b3-default-rtdb.firebaseio.com/inflation.json"
      )
        .then((res) => res.json())
        .then((data) => {
          this.dataFromHome = data;
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.fetchData();
  },
  created() {
    // Listening to window width change

    window.addEventListener("resize", () => {
      if (window.innerWidth < 1090) {
        this.sidebardata.collapsed = true;
      } else if (window.innerWidth >= 1090) {
        this.sidebardata.collapsed = false;
      }

      if (window.innerWidth < 600) {
        this.sidebardata.hideOnMobile = true;
      } else if (window.innerWidth >= 600) {
        this.sidebardata.hideOnMobile = false;
      }
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap");

.dashboard-view {
  background-color: var(--main-background);
  font-family: "Nunito Sans", sans-serif;
}

.main-container {
  margin-top: 20px;
  padding-left: 0px;
  transition: 0.3s ease;
  max-width: 100%;
}

.main-container .overlay {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: var(--overlay-background);
  z-index: 1035 !important;
  transition: all 0.5s ease-in-out;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.main-container.sidebarOpen .overlay {
  display: block;
}

/* Sidebar on top */

@media (min-width: 600px) {
  .main-container {
    padding-left: 50px;
  }
  .main-container.sidebarOpen {
    padding-left: 50px;
  }
}

@media (min-width: 1090px) {
  .main-container.sidebarOpen {
    padding-left: 212px;
    transition: 0.3s ease;
  }

  .main-container.sidebarOpen .overlay {
    display: none;
  }
}
</style>