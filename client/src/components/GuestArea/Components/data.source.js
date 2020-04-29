import React from "react";
import { AUTHOR } from "../../../helpers/config";
export const Nav00DataSource = {
  wrapper: { className: "header0 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header0-logo",
    children: "https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg"
  },
  Menu: {
    className: "header0-menu",
    children: [
      {
        name: "item0",
        className: "header0-item",
        children: {
          href: "#",
          children: [{ children: "Products", name: "text" }]
        },
        subItem: [
          {
            name: "sub0",
            className: "item-sub",
            children: {
              className: "item-sub-item",
              children: [
                {
                  name: "image0",
                  href: "/product",
                  className: "item-image",
                  children:
                    "https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg"
                },
                {
                  name: "title",
                  className: "item-title",
                  children: "Product 1"
                },
                {
                  name: "content",
                  className: "item-content",
                  children: "quick description"
                }
              ]
            }
          },
          {
            name: "sub1",
            className: "item-sub",
            children: {
              className: "item-sub-item",
              children: [
                {
                  name: "image0",
                  className: "item-image",
                  children:
                    "https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg"
                },
                {
                  name: "title",
                  className: "item-title",
                  children: "Product 2"
                },
                {
                  name: "content",
                  className: "item-content",
                  children: "quick description"
                }
              ]
            }
          }
        ]
      },
      {
        name: "item1",
        className: "header0-item",
        children: {
          href: "/about",
          children: [{ children: "About", name: "text" }]
        }
      },
      {
        name: "item2",
        className: "header0-item",
        children: {
          href: "/login",
          children: [{ children: "Login", name: "text" }]
        }
      },
      {
        name: "item3",
        className: "header0-item",
        children: {
          href: "/register",
          children: [{ children: "Register", name: "text" }]
        }
      }
    ]
  },
  mobileMenu: { className: "header0-mobile-menu" }
};
export const Banner00DataSource = {
  wrapper: { className: "banner0" },
  textWrapper: { className: "banner0-text-wrapper" },
  title: {
    className: "banner0-title",
    children: "https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png"
  },
  content: {
    className: "banner0-content",
    children: "MERN x ANTD Web App Template"
  },
  button: {
    className: "banner0-button",
    href: "/product",
    children: "Learn More"
  }
};
export const Content00DataSource = {
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>Features</p>
          </span>
        )
      }
    ]
  },
  childWrapper: {
    className: "content0-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png"
            },
            {
              name: "title",
              className: "content0-block-title",
              children: "Feature #1"
            },
            { name: "content", children: "Feature 1 description" }
          ]
        }
      },
      {
        name: "block1",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png"
            },
            {
              name: "title",
              className: "content0-block-title",
              children: "Feature #2"
            },
            {
              name: "content",
              children: "Feature 2 description"
            }
          ]
        }
      },
      {
        name: "block2",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png"
            },
            {
              name: "title",
              className: "content0-block-title",
              children: "Feature #3"
            },
            {
              name: "content",
              children: "Feature 3 description"
            }
          ]
        }
      }
    ]
  }
};
export const Content10DataSource = {
  wrapper: { className: "home-page-wrapper content1-wrapper" },
  OverPack: { className: "home-page content1", playScale: 0.3 },
  imgWrapper: { className: "content1-img", md: 10, xs: 24 },
  img: {
    children: "https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png"
  },
  textWrapper: { className: "content1-text", md: 14, xs: 24 },
  title: { className: "content1-title", children: "Lorem Ipsum" },
  content: {
    className: "content1-content",
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  }
};
export const Content30DataSource = {
  wrapper: { className: "home-page-wrapper content3-wrapper" },
  page: { className: "home-page content3" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: "More stuff",
        className: "title-h1"
      },
      {
        name: "content",
        className: "title-content",
        children: "Another description"
      }
    ]
  },
  block: {
    className: "content3-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png"
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "Something" },
          content: {
            className: "content3-content",
            children: "Description of Something"
          }
        }
      },
      {
        name: "block1",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png"
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "Something 2" },
          content: {
            className: "content3-content",
            children: "Description of Something"
          }
        }
      },
      {
        name: "block2",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png"
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "Something 3" },
          content: {
            className: "content3-content",
            children: "Description of Something"
          }
        }
      },
      {
        name: "block3",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png"
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "Something 4" },
          content: {
            className: "content3-content",
            children: "Description of Something"
          }
        }
      },
      {
        name: "block4",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png"
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "Something 5" },
          content: {
            className: "content3-content",
            children: "Description of Something"
          }
        }
      },
      {
        name: "block5",
        className: "content3-block",
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children:
              "https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png"
          },
          textWrapper: { className: "content3-text" },
          title: { className: "content3-title", children: "Something 6" },
          content: {
            className: "content3-content",
            children: "Description of Something"
          }
        }
      }
    ]
  }
};
export const Footer00DataSource = {
  wrapper: { className: "home-page-wrapper footer0-wrapper" },
  OverPack: { className: "home-page footer0", playScale: 0.05 },
  copyright: {
    className: "copyright",
    children: (
      <span>
        ©2020 - <a href="/about">{AUTHOR}</a>
      </span>
    )
  }
};
