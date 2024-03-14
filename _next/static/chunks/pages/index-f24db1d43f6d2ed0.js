(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        48312: function (e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return a(1105)
            }])
        },
        74800: function (e, t, a) {
            "use strict";
            a.d(t, {
                l: function () {
                    return u
                }
            });
            var s = a(85893),
                r = a(618),
                l = a(87357),
                c = a(78462),
                n = a(97212),
                h = a(48885),
                i = a(59334),
                _ = a(15861),
                o = a(11057),
                d = a(67294),
                m = a(4800),
                v = a(3984),
                g = a(15386),
                p = a(14789),
                f = a(59748);
            let u = e => {
                let {
                    isOpen: t,
                    onAccept: a,
                    onClose: u,
                    token: E
                } = e, [x, M] = (0, d.useState)(!1);
                return (0, s.jsxs)(v.Z, {
                    onClose: u,
                    open: t,
                    title: "Token (extended)",
                    children: [(0, s.jsxs)(l.Z, {
                        maxWidth: 400,
                        children: [(0, s.jsx)(c.Z, {
                            children: (0, s.jsxs)(n.ZP, {
                                children: [(0, s.jsx)(h.Z, {
                                    children: (0, s.jsx)(f.Z, {
                                        color: "warning"
                                    })
                                }), (0, s.jsx)(i.Z, {
                                    primary: (0, s.jsxs)(_.Z, {
                                        my: 2,
                                        width: "100%",
                                        children: ["This token has not been voted into the default list by the SaucerSwap DAO. Always conduct your own research before trading. ", (0, s.jsx)(p.C, {
                                            href: "https://docs.saucerswap.finance/contact/partnership-inquiries#classes",
                                            children: "Learn More"
                                        })]
                                    })
                                })]
                            })
                        }), (0, s.jsx)(l.Z, {
                            display: "flex",
                            justifyContent: "center",
                            my: 4,
                            children: (0, s.jsxs)(p.C, {
                                href: "".concat(r.lT, "/token/").concat(E.address),
                                children: [E.symbol, " - ", E.address, " (View Details)"]
                            })
                        })]
                    }), (0, s.jsxs)(g.Z, {
                        children: [(0, s.jsx)(m.Z, {
                            checked: x,
                            label: "I accept the risk",
                            onChange: () => M(e => !e)
                        }), (0, s.jsx)(o.Z, {
                            disabled: !x,
                            onClick: () => a(E),
                            variant: "contained",
                            children: "OK"
                        })]
                    })]
                })
            }
        },
        86124: function (e, t, a) {
            "use strict";
            var s = a(85893),
                r = a(11057),
                l = a(14789);
            t.Z = e => {
                let {
                    children: t,
                    href: a,
                    ...c
                } = e;
                return (0, s.jsx)(r.Z, {
                    LinkComponent: a ? l.C : void 0,
                    href: a,
                    ...c,
                    children: t
                })
            }
        },
        22673: function (e, t, a) {
            "use strict";
            a.d(t, {
                qk: function () {
                    return y
                },
                fn: function () {
                    return N
                },
                f_: function () {
                    return V
                },
                lh: function () {
                    return b
                },
                lO: function () {
                    return j
                }
            });
            var s = a(85893),
                r = a(2734),
                l = a(87918),
                c = a(87357),
                n = a(51233),
                h = a(78462),
                i = a(15861),
                _ = a(45111),
                o = a(29217),
                d = a(65074),
                m = a(2834),
                v = a(22839),
                g = a(17210),
                p = a(14789),
                f = a(36640),
                u = e => {
                    let {
                        percentChange: t,
                        sx: a,
                        ...r
                    } = e;
                    return (0, s.jsxs)(i.Z, {
                        sx: {
                            color: 0 === t ? "unset" : t > 0 ? "custom.green" : "error.main",
                            ...a
                        },
                        ...r,
                        children: [0 === t ? "" : t > 0 ? "+" : "-", Math.abs(t).toFixed(2), "%"]
                    })
                },
                E = a(9998),
                x = a(86124),
                M = a(46695),
                z = a(43385),
                w = a(57978);
            let b = e => {
                    let {
                        sortedTokens: t,
                        isLoading: a
                    } = e, {
                        isSmallList: r
                    } = (0, M.l)();
                    return a ? (0, s.jsx)(w.Z, {
                        shapeVariant: "narrow",
                        skeletonCount: 5,
                        listItemProps: {
                            sx: {
                                backgroundColor: "custom.grey"
                            }
                        }
                    }) : 0 === t.length ? (0, s.jsx)(N, {
                        message: "No tokens to display"
                    }) : (0, s.jsx)(V, {
                        children: t.map(e => (0, s.jsx)(Z, {
                            token: e,
                            variant: r ? "mobile" : "desktop"
                        }, e.address))
                    })
                },
                Z = e => {
                    let {
                        token: t,
                        variant: a
                    } = e, h = (0, r.Z)(), i = (0, m.TQ)(t.address), x = (0, d.j7)(t.address), M = i > 0 ? o.Z : _.Z, w = 0 === i ? "plain" : i > 0 ? void 0 : "error", b = "mobile" === a ? [{
                        xs: 5,
                        title: (0, s.jsx)(l.Z, {
                            className: "active",
                            variant: "filled",
                            color: w,
                            label: (0, s.jsxs)(c.Z, {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                children: [0 !== i && (0, s.jsx)(M, {
                                    color: "inherit",
                                    sx: {
                                        ml: -2,
                                        mr: -1,
                                        my: -1
                                    }
                                }), (0, s.jsx)(u, {
                                    fontSize: "inherit",
                                    fontFamily: "inherit",
                                    fontStyle: "inherit",
                                    percentChange: i,
                                    component: "span"
                                })]
                            })
                        }),
                        value: (0, v.T4)(x, z.Kt.USD, 4, 1e-4)
                    }] : [{
                        xs: 3.5,
                        title: "Price",
                        value: (0, v.T4)(x, z.Kt.USD, 4, 1e-4)
                    }, {
                        xs: 3,
                        title: "Change (24h)",
                        value: (0, s.jsx)(u, {
                            fontSize: "inherit",
                            fontFamily: "inherit",
                            fontStyle: "inherti",
                            percentChange: i,
                            component: "span"
                        })
                    }], Z = (0, g.F$)(t.address) ? "/swap/0.0.456858/HBAR" : "/swap/HBAR/".concat(t.address);
                    return (0, s.jsx)(f.Z, {
                        variant: "desktop",
                        actionAreaProps: {
                            LinkComponent: p.C,
                            href: Z
                        },
                        gridItems: [{
                            children: (0, s.jsx)(E.ZP, {
                                token: t,
                                isList: !0,
                                hideChips: "mobile" === a
                            }),
                            gridProps: {
                                xs: "mobile" === a ? 4 : 3.5,
                                display: "flex",
                                alignItems: "center"
                            }
                        }, ...b.map(e => ({
                            children: (0, s.jsx)(n.Z, {
                                direction: "column",
                                spacing: {
                                    xs: 1,
                                    sm: 2
                                },
                                children: (0, s.jsx)(f.o, {
                                    variant: "desktop",
                                    label: e.title,
                                    value: e.value,
                                    textAlign: "right"
                                })
                            }),
                            gridProps: {
                                xs: e.xs,
                                sx: {
                                    display: "flex",
                                    alignItems: "flex-end",
                                    flexDirection: "column"
                                }
                            }
                        })), {
                            children: (0, s.jsx)(c.Z, {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                height: 1,
                                children: (0, s.jsx)(y, {
                                    component: "div",
                                    title: "Trade",
                                    href: Z,
                                    sx: {
                                        maxWidth: 64
                                    }
                                })
                            }),
                            gridProps: {
                                xs: "mobile" === a ? 3 : 2
                            }
                        }],
                        sx: {
                            "& .MuiLink-root": {
                                px: {
                                    xs: 4,
                                    sm: 7
                                }
                            },
                            ...j(h)
                        }
                    })
                },
                y = e => {
                    let {
                        title: t,
                        href: a,
                        sx: l,
                        ...c
                    } = e, n = (0, r.Z)();
                    return (0, s.jsx)(x.Z, {
                        href: a,
                        variant: "contained",
                        sx: {
                            background: "light" === n.palette.mode ? n.palette.custom.green : "linear-gradient(88.04deg, #6AFF52 49.01%, #ADFF55 99.9%)",
                            color: "light" === n.palette.mode ? "white" : "#0E0E0E",
                            borderRadius: "4px",
                            fontSize: "16px",
                            fontWeight: 500,
                            py: 2,
                            lineHeight: 1,
                            maxWidth: 64,
                            ...l
                        },
                        ...c,
                        children: t
                    })
                },
                V = e => {
                    let {
                        children: t
                    } = e;
                    return (0, s.jsx)(h.Z, {
                        sx: H,
                        children: t
                    })
                },
                N = e => {
                    let {
                        message: t
                    } = e;
                    return (0, s.jsx)(c.Z, {
                        display: "flex",
                        justifyContent: "center",
                        pt: 14.5,
                        children: (0, s.jsx)(i.Z, {
                            color: "custom.grey",
                            children: t
                        })
                    })
                },
                j = e => "light" === e.palette.mode ? {
                    borderRadius: "8px",
                    background: "linear-gradient(185deg, rgba(255, 255, 255, 0.6) 45.35%, rgba(255, 255, 255, 0.24) 129.54%)",
                    boxShadow: "none"
                } : {
                    borderRadius: "8px",
                    background: "linear-gradient(182deg, rgba(25, 44, 59, 1), rgba(0, 9, 15, 1) 45%) padding-box,\n  linear-gradient(181deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0)) border-box",
                    border: "0.5px solid transparent"
                },
                H = {
                    mt: 0,
                    pt: 0,
                    pb: 4,
                    "& > :not(:first-of-type)": {
                        mt: 4
                    }
                }
        },
        9998: function (e, t, a) {
            "use strict";
            a.d(t, {
                Pi: function () {
                    return p
                },
                ZP: function () {
                    return u
                }
            });
            var s = a(85893),
                r = a(87357),
                l = a(51233),
                c = a(87918),
                n = a(34386),
                h = a(46695),
                i = a(93803),
                _ = a(5683),
                o = a(18408),
                d = a(15861),
                m = a(23795);
            let v = e => {
                    let t, {
                            label: a
                        } = e,
                        r = "#";
                    switch (a) {
                        case "Default":
                            t = "This token has been voted to appear in default token menus by the SaucerSwap DAO and meets listing criteria.", r = "https://docs.saucerswap.finance/contact/partnership-inquiries#classes";
                            break;
                        case "Extended":
                            t = "This token has not been voted into the default list by the SaucerSwap DAO. Always conduct your own research before trading.", r = "https://docs.saucerswap.finance/contact/partnership-inquiries#classes";
                            break;
                        case "Hashport":
                            t = "This token has been ported to Hedera via hashport, an independent bridge protocol.", r = "https://docs.saucerswap.finance/get-started/hedera-guide/bridge-tokens";
                            break;
                        default:
                            t = "Unknown token type."
                    }
                    return (0, s.jsxs)(d.Z, {
                        children: [t, " ", (0, s.jsx)(m.Z, {
                            href: r,
                            target: "_blank",
                            onClick: e => e.stopPropagation(),
                            sx: {
                                fontSize: 14
                            },
                            children: "Learn More\xa0"
                        })]
                    })
                },
                g = {
                    lineHeight: 1.1
                },
                p = e => {
                    let {
                        token: t
                    } = e, {
                        data: a = []
                    } = (0, i.v)();
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(null == t ? void 0 : t.isDefault) && (0, s.jsx)(f, {
                            label: "Default",
                            color: "plain"
                        }), (null == t ? void 0 : t.isExtended) && (0, s.jsx)(f, {
                            label: "Extended",
                            color: "extended"
                        }), a.find(e => e.address === (null == t ? void 0 : t.address)) && (0, s.jsx)(f, {
                            label: "Hashport",
                            color: "hashport"
                        })]
                    })
                },
                f = e => {
                    let {
                        label: t,
                        color: a
                    } = e;
                    return (0, s.jsx)(n.Z, {
                        title: (0, s.jsx)(v, {
                            label: t
                        }),
                        children: (0, s.jsx)(c.Z, {
                            className: "active",
                            variant: "filled",
                            label: t,
                            color: a,
                            size: "small",
                            sx: g
                        })
                    })
                };
            var u = e => {
                let {
                    token: t,
                    isList: a = !0,
                    tokenDimension: n = 26,
                    sx: i,
                    otherChips: d,
                    hideChips: m
                } = e, {
                    isXSmall: v
                } = (0, h.l)();
                return (0, s.jsxs)(r.Z, {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    sx: i,
                    children: [(0, s.jsx)(r.Z, {
                        display: "flex",
                        alignItems: "center",
                        children: (0, s.jsx)(_.Z, {
                            token: t,
                            dimension: n
                        })
                    }), (0, s.jsxs)(r.Z, {
                        display: "flex",
                        flexDirection: "column",
                        gap: .5,
                        ml: 2.5,
                        children: [(0, s.jsx)(o.O, {
                            token: t,
                            fontWeight: 500
                        }), !m && (0, s.jsxs)(l.Z, {
                            direction: "row",
                            spacing: 1.5,
                            mt: v && a ? 0 : 1,
                            height: "19px",
                            children: [(0, s.jsx)(p, {
                                token: t
                            }), null == d ? void 0 : d.map((e, t) => (0, s.jsx)(c.Z, {
                                variant: "filled",
                                size: "small",
                                ...e,
                                sx: {
                                    ...g,
                                    py: 0
                                }
                            }, t))]
                        })]
                    })]
                })
            }
        },
        49906: function (e, t, a) {
            "use strict";
            var s = a(85893),
                r = a(2734),
                l = a(87357),
                c = a(46695);
            t.Z = e => {
                let {
                    children: t,
                    fullWidth: a,
                    background: n,
                    backgroundImage: h,
                    backgroundRepeat: i = "no-repeat",
                    backgroundSize: _ = "100% auto",
                    backgroundPositionX: o = "center",
                    backgroundPositionY: d = "top",
                    fixed: m = !1,
                    backgroundComponent: v,
                    ...g
                } = e, {
                    isXSmall: p
                } = (0, c.l)(), f = (0, r.Z)();
                return h || v || (h = "url( ".concat(p ? f.images.backgroundBlurGreenMobile : f.images.backgroundBlurGreenDesktop, " )")), (0, s.jsxs)(l.Z, {
                    className: "background",
                    px: a ? void 0 : "calc((100vw - 1200px) / 2)",
                    ...g,
                    sx: {
                        position: "relative",
                        minHeight: "calc(100vh - 64px)",
                        ...n ? {
                            background: n,
                            backgroundBlendMode: "exclusion"
                        } : {
                            backgroundImage: h,
                            backgroundRepeat: i,
                            backgroundPositionX: o,
                            backgroundPositionY: d,
                            backgroundSize: _,
                            backgroundAttachment: m ? "fixed" : void 0
                        },
                        overflow: "hidden",
                        ...g.sx
                    },
                    children: [v || null, t]
                })
            }
        },
        57361: function (e, t, a) {
            "use strict";
            a.d(t, {
                I: function () {
                    return d
                },
                q: function () {
                    return _
                }
            });
            var s = a(85893),
                r = a(87357),
                l = a(25675),
                c = a.n(l),
                n = a(46695);
            let h = "landingBgScale 10s ease-in-out infinite",
                i = "stakeBgScale 10s ease-in-out infinite",
                _ = () => {
                    let {
                        isSmall: e
                    } = (0, n.l)();
                    return e ? (0, s.jsxs)(o, {
                        children: [(0, s.jsx)(c(), {
                            src: "/images/landing_bg_mobile_gradient.svg",
                            alt: "background with gradient",
                            priority: !0,
                            width: 631,
                            height: 4090,
                            style: {
                                height: "auto",
                                position: "relative",
                                width: "100%",
                                zIndex: -12,
                                filter: "brightness(1.25)"
                            }
                        }), (0, s.jsx)(c(), {
                            src: "/images/landing_bg_mobile_top.svg",
                            alt: "top background",
                            priority: !0,
                            width: 631,
                            height: 1146,
                            style: {
                                height: "auto",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                animation: h,
                                filter: "brightness(1.1)",
                                zIndex: -10
                            }
                        }), (0, s.jsx)(c(), {
                            src: "/images/landing_bg_mobile_right.svg",
                            alt: "right background",
                            priority: !0,
                            width: 332,
                            height: 2045,
                            style: {
                                height: "auto",
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                right: 0,
                                width: "52.75%",
                                animation: h,
                                filter: "brightness(1.2)",
                                zIndex: -11
                            }
                        }), (0, s.jsx)(c(), {
                            src: "/images/landing_bg_mobile_middle.svg",
                            alt: "left bottom background",
                            priority: !0,
                            width: 631,
                            height: 1059,
                            style: {
                                height: "auto",
                                position: "absolute",
                                top: "36%",
                                left: 0,
                                width: "100%",
                                animation: h,
                                filter: "brightness(1)",
                                zIndex: -9
                            }
                        }), (0, s.jsx)(c(), {
                            src: "/images/landing_bg_mobile_left.svg",
                            alt: "left background",
                            priority: !0,
                            width: 1720,
                            height: 2209,
                            style: {
                                height: "auto",
                                position: "absolute",
                                top: "59%",
                                bottom: 0,
                                left: 0,
                                width: "52.75%",
                                animation: h,
                                filter: "brightness(1.2)",
                                zIndex: -11
                            }
                        }), (0, s.jsx)(c(), {
                            src: "/images/landing_bg_mobile_bottom.svg",
                            alt: "bottom right background",
                            width: 631,
                            height: 812,
                            priority: !0,
                            style: {
                                position: "absolute",
                                left: 0,
                                bottom: 0,
                                width: "100%",
                                height: "auto",
                                animation: h,
                                filter: "brightness(1.3)",
                                zIndex: -11
                            }
                        })]
                    }) : (0, s.jsxs)(o, {
                        children: [(0, s.jsx)(c(), {
                            src: "/images/landing_bg_desktop_gradient.svg",
                            alt: "background with gradient",
                            width: 1658,
                            height: 4105,
                            style: {
                                position: "relative",
                                height: "auto",
                                width: "99.5%",
                                zIndex: -12,
                                filter: "brightness(1.25)"
                            }
                        }), (0, s.jsx)(c(), {
                            src: "/images/landing_bg_desktop_top.svg",
                            alt: "top background",
                            width: 1658,
                            height: 2055,
                            priority: !0,
                            style: {
                                position: "absolute",
                                height: "auto",
                                top: 0,
                                left: 0,
                                width: "100%",
                                zIndex: -10,
                                animation: "bgScale 20s ease-in-out infinite",
                                filter: "brightness(1)"
                            }
                        }), (0, s.jsx)(c(), {
                            src: "/images/landing_bg_desktop_right.svg",
                            alt: "right background",
                            width: 875,
                            height: 4099,
                            priority: !0,
                            style: {
                                position: "absolute",
                                height: "auto",
                                top: 0,
                                bottom: 0,
                                right: 0,
                                width: "52.75%",
                                zIndex: -11,
                                animation: h,
                                filter: "brightness(1.2)"
                            }
                        }), (0, s.jsx)(c(), {
                            src: "/images/landing_bg_desktop_left_bottom.svg",
                            alt: "left background",
                            width: 767,
                            height: 1229,
                            priority: !0,
                            style: {
                                position: "absolute",
                                height: "auto",
                                left: 0,
                                bottom: 0,
                                animation: h,
                                zIndex: -11,
                                filter: "brightness(1)"
                            }
                        })]
                    })
                },
                o = e => {
                    let {
                        children: t
                    } = e;
                    return (0, s.jsx)(r.Z, {
                        position: "absolute",
                        left: "0",
                        top: "0",
                        width: 1,
                        overflow: "hidden",
                        sx: {
                            pointerEvents: "none",
                            userSelect: "none"
                        },
                        children: t
                    })
                },
                d = () => {
                    let {
                        isSmall: e
                    } = (0, n.l)();
                    return e ? (0, s.jsxs)(o, {
                        children: [(0, s.jsx)(c(), {
                            src: "/images/stake_bg_mobile_blur.svg",
                            alt: "background radial gradient",
                            width: 1720,
                            height: 2308,
                            style: {
                                height: "auto",
                                position: "relative",
                                width: "100%",
                                zIndex: -12
                            }
                        }), (0, s.jsx)(c(), {
                            src: "/images/stake_bg_mobile_left.svg",
                            alt: "background left",
                            width: 1720,
                            height: 2308,
                            style: {
                                height: "auto",
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                zIndex: -9,
                                animation: h
                            }
                        }), (0, s.jsx)(c(), {
                            src: "/images/stake_bg_mobile_middle.svg",
                            alt: "background middle",
                            width: 1720,
                            height: 1232,
                            style: {
                                height: "auto",
                                position: "absolute",
                                top: "34%",
                                left: 0,
                                width: "100%",
                                zIndex: -11,
                                animation: h
                            }
                        })]
                    }) : (0, s.jsxs)(o, {
                        children: [(0, s.jsx)(c(), {
                            src: "/images/stake_bg_desktop_blur.svg",
                            alt: "background radial gradient",
                            priority: !0,
                            width: 1720,
                            height: 2308,
                            style: {
                                height: "auto",
                                position: "relative",
                                width: "100%",
                                zIndex: -12
                            }
                        }), (0, s.jsx)(c(), {
                            src: "/images/stake_bg_desktop_left.svg",
                            priority: !0,
                            alt: "background left",
                            width: 1720,
                            height: 2308,
                            style: {
                                height: "auto",
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                zIndex: -9,
                                animation: i
                            }
                        }), (0, s.jsx)(c(), {
                            src: "/images/stake_bg_desktop_middle.svg",
                            priority: !0,
                            alt: "background middle",
                            width: 1720,
                            height: 1232,
                            style: {
                                height: "auto",
                                position: "absolute",
                                top: "22%",
                                left: 0,
                                width: "100%",
                                zIndex: -11,
                                animation: i
                            }
                        })]
                    })
                }
        },
        28355: function (e, t, a) {
            "use strict";
            var s = a(90948),
                r = a(15861);
            let l = (0, s.ZP)(r.Z)(() => ({
                textAlign: "center"
            }));
            t.Z = l
        },
        93803: function (e, t, a) {
            "use strict";
            a.d(t, {
                v: function () {
                    return _
                }
            });
            var s = a(17e3),
                r = a(96486),
                l = a.n(r),
                c = a(67294),
                n = a(618),
                h = a(20915);
            let i = e => (0, s.a)(["hashportAssets"], async () => {
                    let e = await fetch("".concat(n.dY, "/api/v1/assets")),
                        t = await e.json();
                    return (0, r.flatten)((null == t ? void 0 : t.map(e => Object.values(e.assets).map(e => e))) || []).filter(e => /^\d{1}\.\d{1}\.\d{2,16}$/.test(e.id) && !e.isNative)
                }, e),
                _ = e => {
                    let {
                        data: t = []
                    } = i(), {
                        data: a = [],
                        ...s
                    } = (0, h.ZP)(!0, !1, e);
                    return {
                        data: (0, c.useMemo)(() => l().intersectionBy(a, t.map(e => ({
                            address: e.id
                        })), "address"), [t, a]),
                        ...s
                    }
                }
        },
        41569: function (e, t, a) {
            "use strict";
            var s = a(17e3),
                r = a(91402),
                l = a(618),
                c = a(65074),
                n = a(67294);
            let h = e => new r.gG(Math.floor(1e5 * e || 0), 1e5),
                i = e => (0, s.a)(["sssStats"], async () => {
                    let e = await fetch("".concat(l.z7, "/stats/sss"));
                    return await e.json()
                }, e);
            t.Z = e => {
                var t;
                let {
                    data: a = c.Pg
                } = (0, c.ZP)(l.vj), {
                    data: s = c.qZ
                } = (0, c.ZP)(l.ky);
                return i({
                    ...e,
                    enabled: (null === (t = null == e ? void 0 : e.enabled) || void 0 === t || t) && !!a && !!s,
                    select: (0, n.useCallback)(e => ({
                        avg5day: h(null == e ? void 0 : e.avg5day),
                        ratio: h(null == e ? void 0 : e.ratio),
                        sauce: r.ih.fromRawAmount(a, (null == e ? void 0 : e.sauce) || 0),
                        timestamp: new Date((null == e ? void 0 : e.timestampSeconds) * 1e3),
                        xsauce: r.ih.fromRawAmount(s, (null == e ? void 0 : e.xsauce) || 0)
                    }), [a, s])
                })
            }
        },
        2834: function (e, t, a) {
            "use strict";
            a.d(t, {
                TQ: function () {
                    return c
                }
            });
            var s = a(17e3),
                r = a(618);
            let l = e => (0, s.a)(["tokenPriceChange"], async () => {
                    console.log("fetching token price changes");
                    let e = await fetch("".concat(r.z7, "/tokens/price-change"));
                    return await e.json()
                }, e),
                c = e => {
                    let {
                        data: t = {}
                    } = l();
                    return t[e] || 0
                };
            t.ZP = l
        },
        65783: function (e, t, a) {
            "use strict";
            var s = a(85893),
                r = a(65582),
                l = a(87357);
            t.Z = e => {
                let {
                    backgroundImage: t,
                    backgroundPosition: a,
                    children: c,
                    maxWidth: n,
                    ...h
                } = e;
                return (0, s.jsx)(r.Z, {
                    ...h,
                    sx: {
                        backgroundAttachment: "fixed",
                        backgroundImage: t ? 'url("'.concat(t, '")') : "",
                        backgroundPosition: a,
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        flex: "1",
                        flexDirection: "column",
                        maxWidth: n,
                        px: {
                            lg: 8,
                            md: 4,
                            sm: 2,
                            xs: 1
                        },
                        py: {
                            md: 8,
                            xs: 4
                        },
                        ...h.sx
                    },
                    children: (0, s.jsx)(l.Z, {
                        display: "flex",
                        flex: "1",
                        width: "100%",
                        children: (0, s.jsx)(l.Z, {
                            flex: "1",
                            children: c
                        })
                    })
                })
            }
        },
        1105: function (e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function () {
                    return he
                },
                mobileGutterWidth: function () {
                    return n9
                },
                pageMargin: function () {
                    return n8
                }
            });
            var s, r, l, c, n, h, i, _, o, d, m, v, g, p, f, u, E, x, M, z, w, b, Z, y, V, N, j, H, k, S, D, I, A, P, O, C, G, B, L, T, F, W, U, Q, q, R, Y, X, K, J, $, ee, et, ea, es, er, el, ec, en, eh, ei, e_, eo, ed, em, ev, eg, ep, ef, eu, eE, ex, eM, ez, ew, eb, eZ, ey, eV, eN, ej, eH, ek, eS, eD, eI, eA, eP, eO, eC, eG, eB, eL, eT, eF, eW, eU, eQ, eq, eR, eY, eX, eK, eJ, e$, e1, e2, e3, e5, e4, e0, e6, e7, e8, e9, te, tt, ta, ts, tr, tl, tc, tn, th, ti, t_, to, td, tm, tv, tg, tp, tf, tu, tE, tx, tM, tz, tw, tb, tZ, ty, tV, tN, tj, tH, tk, tS, tD, tI, tA, tP, tO, tC, tG, tB, tL, tT, tF, tW, tU, tQ, tq, tR, tY, tX, tK, tJ, t$, t1, t2, t3, t5, t4, t0, t6, t7, t8, t9, ae, at, aa, as, ar, al, ac, an, ah, ai, a_, ao, ad, am, av, ag, ap, af, au, aE, ax, aM, az, aw, ab, aZ, ay, aV, aN, aj, aH, ak, aS, aD, aI, aA, aP, aO, aC, aG, aB, aL, aT, aF, aW, aU, aQ, aq, aR, aY, aX, aK, aJ, a$, a1, a2, a3, a5, a4, a0, a6, a7, a8, a9, se, st, sa, ss, sr, sl, sc, sn, sh, si, s_, so, sd, sm, sv, sg, sp, sf, su, sE, sx, sM, sz, sw, sb, sZ, sy, sV, sN, sj, sH, sk, sS, sD, sI, sA, sP, sO, sC, sG, sB, sL, sT, sF, sW, sU, sQ, sq, sR, sY, sX, sK, sJ, s$, s1, s2, s3, s5, s4, s0, s6, s7, s8, s9, re, rt, ra, rs, rr, rl, rc, rn, rh, ri, r_, ro, rd, rm, rv, rg, rp, rf, ru, rE, rx, rM, rz, rw, rb, rZ, ry, rV, rN, rj, rH, rk, rS, rD, rI, rA, rP, rO, rC, rG, rB, rL, rT, rF, rW, rU, rQ, rq, rR, rY, rX, rK, rJ, r$, r1, r2, r3, r5, r4, r0, r6, r7, r8, r9, le, lt, la, ls, lr, ll, lc, ln, lh, li, l_, lo, ld, lm, lv, lg, lp, lf, lu, lE, lx, lM, lz, lw, lb, lZ, ly, lV, lN, lj, lH, lk, lS, lD, lI, lA, lP, lO, lC, lG, lB, lL, lT, lF, lW, lU, lQ, lq, lR, lY, lX, lK, lJ, l$, l1, l2, l3, l5, l4, l0 = a(85893),
                l6 = a(67294),
                l7 = a(2734),
                l8 = a(87357),
                l9 = a(51233),
                ce = a(40044),
                ct = a(41796),
                ca = a(28355),
                cs = a(20915),
                cr = a(22673);
            let cl = () => {
                let {
                    data: e = [],
                    isLoading: t
                } = (0, cs.ZP)(!0, !0), a = e.filter(e => !!e.icon).sort((e, t) => t.timestampSecondsLastListingChange - e.timestampSecondsLastListingChange).slice(0, 5);
                return (0, l0.jsx)(cr.lh, {
                    sortedTokens: a,
                    isLoading: t
                })
            };
            var cc = a(45578),
                cn = a.n(cc),
                ch = a(58971),
                ci = a(92441),
                c_ = a(74102);
            let co = () => {
                let {
                    data: e = [],
                    isLoading: t
                } = (0, cs.ZP)(!0), {
                    orders: a,
                    isLoading: s
                } = (0, c_.xA)(), {
                    data: r = {}
                } = (0, ch.T)("FIVEMIN"), l = e.map((e, t) => {
                    var a;
                    return {
                        liquidity: (null === (a = r[e.address]) || void 0 === a ? void 0 : a.liquidityUsd) || 0,
                        ...e,
                        isDefault: e.isDefault,
                        isExtended: e.isExtended
                    }
                }), c = cn()(l.filter(e => !!e.icon && e.liquidity >= 25e3).sort((e, t) => (0, ci.O)("address", "priceChangeOrder")(e, t, ci.S.DESC, a)), "symbol").slice(0, 5);
                return (0, l0.jsx)(cr.lh, {
                    sortedTokens: c,
                    isLoading: t || s
                })
            };
            var cd = a(15861),
                cm = a(66242),
                cv = a(9974),
                cg = a(86886),
                cp = a(39499),
                cf = a.n(cp),
                cu = a(40902),
                cE = a(22899),
                cx = a(53342),
                cM = a(47892),
                cz = a(46695),
                cw = a(20243),
                cb = a(13014),
                cZ = a(14789),
                cy = a(79786),
                cV = a(74285),
                cN = a(2857),
                cj = a(91166),
                cH = a(36640),
                ck = a(57978);
            let cS = () => {
                    let {
                        data: e = [],
                        isLoading: t
                    } = (0, cx.ZP)(!0), {
                        data: a = [],
                        isLoading: s
                    } = (0, cM.ZP)(), {
                        data: r,
                        isLoading: l
                    } = (0, cu.Z)("v1"), {
                        data: c,
                        isLoading: n
                    } = (0, cu.Z)("v2"), {
                        data: h
                    } = (0, cE.cd)({
                        notation: "compact"
                    }), {
                        orders: i,
                        isLoading: _
                    } = (0, cN.Rf)(), o = (0, l6.useMemo)(() => [...e, ...a].sort((e, t) => (0, ci.O)("contractId", "aprOrder")(e, t, ci.S.DESC, i)).filter(e => {
                        let t = cf().divide(e.totalReservesTinybar, cf().BigInt(1e8));
                        return cf().greaterThan(t, cf().BigInt(19e4))
                    }).slice(0, 5), [e, a, i]);
                    return t || s || _ || l || n ? (0, l0.jsx)(ck.Z, {
                        shapeVariant: "narrow",
                        skeletonCount: 5,
                        listItemProps: {
                            sx: {
                                backgroundColor: "custom.grey",
                                height: 76.5
                            }
                        }
                    }) : 0 === o.length ? (0, l0.jsx)(cr.fn, {
                        message: "No pools to display"
                    }) : (0, l0.jsx)(cr.f_, {
                        children: o.map(e => (0, l0.jsx)(cD, {
                            pool: e,
                            allPoolData: h.find(t => t.contractId === e.contractId),
                            aprData: e instanceof cw.sO ? null == r ? void 0 : r[e.id] : null == c ? void 0 : c[e.id]
                        }, e.contractId))
                    })
                },
                cD = e => {
                    let {
                        pool: t,
                        allPoolData: a,
                        aprData: s
                    } = e, r = (0, l7.Z)(), {
                        isSmall: l
                    } = (0, cz.l)(), c = t instanceof cw.sO, {
                        dailyVolume: n
                    } = a, {
                        totalAprPercent: h
                    } = s, i = parseFloat(h.toFixed(2)) >= 0 ? r.palette.custom.green : r.palette.error.main, _ = "light" === r.palette.mode ? (0, ct.Fq)(i, .2) : (0, ct._j)(i, .85), o = "/liquidity/".concat(t.contractId), d = {
                        href: o,
                        poolNameAndChips: l ? (0, l0.jsxs)(l9.Z, {
                            direction: "row",
                            alignItems: "center",
                            spacing: 2,
                            children: [(0, l0.jsx)(cb.Z, {
                                pool: t,
                                dimension: 27
                            }), (0, l0.jsxs)(l9.Z, {
                                spacing: 1.1,
                                children: [(0, l0.jsx)(cV.Z, {
                                    pool: t
                                }), (0, l0.jsxs)(l9.Z, {
                                    direction: "row",
                                    alignItems: "center",
                                    spacing: {
                                        xs: 2,
                                        sm: 4
                                    },
                                    children: [(0, l0.jsx)(cj.ty, {
                                        isV1: c,
                                        isMobile: l
                                    }), (0, l0.jsx)(l8.Z, {
                                        sx: {
                                            backgroundColor: _,
                                            px: 1.5,
                                            borderRadius: "4px",
                                            py: .5
                                        },
                                        children: (0, l0.jsx)(cd.Z, {
                                            fontSize: 14,
                                            color: i,
                                            children: (0, cy.T)({
                                                value: h
                                            }) + " APR"
                                        })
                                    })]
                                })]
                            })]
                        }) : (0, l0.jsx)(cj.ZP, {
                            pool: t,
                            variant: "list"
                        }),
                        volumePast24h: (0, l0.jsx)(cH.o, {
                            variant: "desktop",
                            label: "24h Volume",
                            value: n.fiat,
                            textAlign: "right"
                        }),
                        lpRewardsApr: (0, l0.jsx)(cH.o, {
                            variant: "desktop",
                            label: "APR",
                            value: (0, cy.T)({
                                value: h
                            }),
                            textAlign: "right"
                        }),
                        earnButton: (0, l0.jsx)(cr.qk, {
                            title: "Earn",
                            href: o
                        })
                    };
                    return (0, l0.jsx)(cm.Z, {
                        sx: e => ({
                            p: 0,
                            "& .MuiLink-root": {
                                px: {
                                    xs: 4,
                                    sm: 7
                                }
                            },
                            ...(0, cr.lO)(e)
                        }),
                        children: (0, l0.jsx)(cv.Z, {
                            LinkComponent: cZ.C,
                            href: d.href,
                            sx: {
                                py: 3.5,
                                px: l ? 4 : 7,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "stretch"
                            },
                            children: l ? (0, l0.jsxs)(l9.Z, {
                                direction: "row",
                                spacing: 4,
                                justifyContent: "space-between",
                                alignItems: "center",
                                children: [(0, l0.jsx)(l8.Z, {
                                    children: d.poolNameAndChips
                                }), (0, l0.jsx)(l8.Z, {
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    children: d.earnButton
                                })]
                            }) : (0, l0.jsxs)(cg.ZP, {
                                container: !0,
                                columnSpacing: 5,
                                direction: "row",
                                alignItems: "center",
                                children: [(0, l0.jsx)(cg.ZP, {
                                    item: !0,
                                    xs: 5,
                                    children: d.poolNameAndChips
                                }), (0, l0.jsx)(cg.ZP, {
                                    item: !0,
                                    xs: 2,
                                    children: d.volumePast24h
                                }), (0, l0.jsx)(cg.ZP, {
                                    item: !0,
                                    xs: 2,
                                    children: d.lpRewardsApr
                                }), (0, l0.jsx)(cg.ZP, {
                                    item: !0,
                                    xs: 3,
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    children: d.earnButton
                                })]
                            })
                        })
                    })
                };
            var cI = a(45670),
                cA = a(66568);
            let cP = () => {
                    let [e, t] = (0, l6.useState)("HOT"), a = [{
                        name: "HOT",
                        component: (0, l0.jsx)(co, {})
                    }, {
                        name: "NEW",
                        component: (0, l0.jsx)(cl, {})
                    }, {
                        name: "TOP POOLS",
                        component: (0, l0.jsx)(cS, {})
                    }];
                    return (0, l0.jsxs)(l9.Z, {
                        alignItems: "center",
                        children: [(0, l0.jsx)(ca.Z, {
                            className: "scrollable",
                            mt: 48.5,
                            mb: 25,
                            fontSize: 32,
                            fontWeight: 800,
                            color: "custom.contrastText",
                            children: "Trending"
                        }), (0, l0.jsx)(l8.Z, {
                            px: 7.5,
                            sx: e => ({
                                paddingLeft: {
                                    xs: 0,
                                    sm: 7.5
                                },
                                paddingRight: {
                                    xs: 0,
                                    sm: 7.5
                                },
                                width: "100%",
                                maxWidth: 895,
                                backgroundColor: "light" === e.palette.mode ? "custom.chartContainerBackground" : void 0,
                                borderRadius: "12px"
                            }),
                            children: (0, l0.jsxs)(l9.Z, {
                                alignItems: "center",
                                children: [(0, l0.jsx)(cI.ZP, {
                                    value: e,
                                    children: (0, l0.jsx)(cA.Z, {
                                        classes: {
                                            indicator: "indicator"
                                        },
                                        TabIndicatorProps: {
                                            children: (0, l0.jsx)("span", {})
                                        },
                                        sx: {
                                            minHeight: "32px",
                                            "& .indicator": {
                                                display: "none"
                                            },
                                            marginBottom: "60px",
                                            flexWrap: "wrap"
                                        },
                                        children: a.map(a => {
                                            let s = e === a.name,
                                                r = "HOT" === a.name && s;
                                            return (0, l0.jsx)(ce.Z, {
                                                sx: e => cO(e, s),
                                                onClick: () => {
                                                    t(a.name)
                                                },
                                                label: r ? (0, l0.jsx)(cC, {
                                                    name: a.name
                                                }) : (0, l0.jsx)(cG, {
                                                    name: a.name,
                                                    isActive: s
                                                }),
                                                value: a.name
                                            }, a.name)
                                        })
                                    })
                                }), (0, l0.jsx)(l8.Z, {
                                    width: 1,
                                    children: a.find(t => t.name === e).component
                                })]
                            })
                        })]
                    })
                },
                cO = (e, t) => ({
                    "--tab-spacing": "11px",
                    minHeight: 32,
                    py: 0,
                    px: 1.5,
                    borderRadius: "4px",
                    fontSize: "16px",
                    fontWeight: 500,
                    ...t ? {
                        "&:hover": {
                            backgroundColor: "custom.darkestGrey"
                        },
                        backgroundColor: "custom.fadedBlack",
                        color: "".concat(e.palette.custom.white, " !important")
                    } : {
                        "&:hover": {
                            backgroundColor: "transparent",
                            color: "custom.contrastText"
                        },
                        backgroundColor: "transparent",
                        opacity: .9,
                        color: (0, ct.Fq)(e.palette.custom.contrastText, .8)
                    }
                }),
                cC = e => {
                    let {
                        name: t
                    } = e;
                    return (0, l0.jsx)(l8.Z, {
                        sx: e => ({
                            px: .5,
                            fontStyle: "italic",
                            fontWeight: "light" === e.palette.mode ? 700 : void 0,
                            background: "light" === e.palette.mode ? "linear-gradient(203.53deg, #FFC701 31.74%, #FF7715 62.9%, #FF0101 101.87%)" : "linear-gradient(to top, #FF8A35 0%, #FFF501 100%)",
                            backgroundClip: "text",
                            textFillColor: "transparent"
                        }),
                        children: t
                    })
                },
                cG = e => {
                    let {
                        name: t,
                        isActive: a
                    } = e;
                    return (0, l0.jsx)(l8.Z, {
                        sx: e => ({
                            px: .5,
                            color: "light" === e.palette.mode ? a ? "black" : "custom.green" : void 0
                        }),
                        children: t
                    })
                };
            var cB = a(49906),
                cL = a(65783),
                cT = a(57361),
                cF = a(98396),
                cW = a(90629),
                cU = a(67720),
                cQ = a(27484),
                cq = a.n(cQ),
                cR = a(25675),
                cY = a.n(cR),
                cX = a(17857),
                cK = a(89755),
                cJ = a.n(cK);
            let c$ = () => {
                    let e = (0, l7.Z)();
                    return (0, l0.jsxs)(l8.Z, {
                        position: "relative",
                        left: {
                            xs: -10,
                            md: -55
                        },
                        top: {
                            xs: 25,
                            md: -20
                        },
                        display: "flex",
                        justifyContent: "center",
                        sx: {
                            overflow: "hidden",
                            pointerEvents: "none",
                            userSelect: "none"
                        },
                        children: [(0, l0.jsx)(l8.Z, {
                            sx: {
                                zIndex: -1,
                                transform: {
                                    xs: "translateX(5%) translateY(6%) scale(1.2)",
                                    md: "translateX(0) translateY(6%) scale(0.9)"
                                }
                            },
                            children: (0, l0.jsx)(cJ(), {
                                src: "/images/animations/bg-stars.png",
                                alt: "background stars",
                                width: 1050,
                                height: 725,
                                objectFit: "contain"
                            })
                        }), (0, l0.jsxs)(c1, {
                            width: "120%",
                            sx: {
                                animation: "bobAndRotate ".concat(7, "s ease-in-out infinite 0s")
                            },
                            children: [(0, l0.jsx)(c1, {
                                sx: {
                                    opacity: 0,
                                    animation: "blink ".concat(5, "s linear infinite -").concat(5 / 3, "s")
                                },
                                children: (0, l0.jsx)(l8.Z, {
                                    sx: {
                                        transform: {
                                            xs: "translateX(-25vw) translateY(-24vw) scale(0.4)",
                                            sm: "translateX(-25vw) translateY(-25vw) scale(0.6)",
                                            md: "translateX(-85%) translateY(-80%)"
                                        }
                                    },
                                    children: (0, l0.jsx)(cJ(), {
                                        src: "/images/animations/large-star.webp",
                                        alt: "large star left",
                                        width: 280,
                                        height: 288
                                    })
                                })
                            }), (0, l0.jsx)(l8.Z, {
                                sx: {
                                    width: "45%",
                                    height: "56%",
                                    marginLeft: {
                                        md: 30
                                    }
                                },
                                children: (0, l0.jsx)(cJ(), {
                                    src: e.images.saturnSaucelings,
                                    alt: "saturn sauceling aliens",
                                    width: 1050,
                                    height: 725,
                                    objectFit: "contain",
                                    unoptimized: !0
                                })
                            })]
                        }), (0, l0.jsx)(c1, {
                            sx: {
                                opacity: 0,
                                animation: "blink ".concat(5, "s linear infinite -").concat(5 / 1.3, "s, bobAndRotateMid ").concat(7, "s ease-in-out infinite 0s")
                            },
                            children: (0, l0.jsx)(l8.Z, {
                                sx: {
                                    transform: {
                                        xs: "translateX(28vw) translateY(-23vw) scale(0.5)",
                                        md: "translateX(240%) translateY(-168%)"
                                    }
                                },
                                children: (0, l0.jsx)(cJ(), {
                                    src: "/images/animations/large-star.webp",
                                    alt: "large star right",
                                    width: 125,
                                    height: 129
                                })
                            })
                        }), (0, l0.jsx)(c1, {
                            sx: {
                                animation: "blink ".concat(5, "s linear infinite 0s, bobAndRotateFar ").concat(7, "s ease-in-out infinite 0s")
                            },
                            children: (0, l0.jsx)(l8.Z, {
                                sx: {
                                    transform: {
                                        xs: "translateX(12vw) translateY(0) scale(0.6)",
                                        sm: "translateX(12vw) translateY(-6vw) scale(0.9)",
                                        md: "translateX(25%) translateY(-6%)"
                                    }
                                },
                                children: (0, l0.jsx)(cJ(), {
                                    src: "/images/animations/mid-stars.png",
                                    alt: "mid depth stars",
                                    width: 475,
                                    height: 419
                                })
                            })
                        })]
                    })
                },
                c1 = e => {
                    let {
                        children: t,
                        ...a
                    } = e;
                    return (0, l0.jsx)(l9.Z, {
                        position: "absolute",
                        width: 1,
                        height: 1,
                        top: 0,
                        alignItems: "center",
                        justifyContent: "center",
                        ...a,
                        children: t
                    })
                };
            var c2 = a(3422),
                c3 = a(43385),
                c5 = a(30773),
                c4 = a(41569),
                c0 = a(17e3),
                c6 = a(91402),
                c7 = a(618),
                c8 = a(4002),
                c9 = a(65074),
                ne = e => {
                    var t;
                    let {
                        data: a
                    } = (0, c9.ZP)(c9.Pg.address);
                    return (0, c0.a)(["stats"], async () => {
                        let e = await fetch("".concat(c7.z7, "/stats")),
                            t = await e.json();
                        return console.debug("FETCHED /stats SUCCESSFULLY"), t
                    }, {
                        ...e,
                        enabled: !!a && (null === (t = null == e ? void 0 : e.enabled) || void 0 === t || t),
                        select: (0, l6.useCallback)(e => {
                            var t, s;
                            return {
                                circulatingSauce: c6.ih.fromRawAmount(a || c9.Pg, (null == e ? void 0 : e.circulatingSauce) || 0),
                                swapTotal: (null == e ? void 0 : e.swapTotal) || 0,
                                tvl: (null == e ? void 0 : e.tvl) && (null == e ? void 0 : e.tvl) !== "NaN" ? e.tvl : 0,
                                tvlUsd: c6.ih.fromRawAmount(c9.em, (0, c8.nq)(c9.em.decimals, (null == e ? void 0 : null === (t = e.tvlUsd) || void 0 === t ? void 0 : t.toFixed(c9.em.decimals)) || 0)),
                                volumeTotalUsd: c6.ih.fromRawAmount(c9.em, (0, c8.nq)(c9.em.decimals, (null == e ? void 0 : null === (s = e.volumeTotalUsd) || void 0 === s ? void 0 : s.toFixed(c9.em.decimals)) || 0))
                            }
                        }, [a])
                    })
                },
                nt = a(49004),
                na = a(47808),
                ns = a(27801),
                nr = a(34647),
                nl = a(86124),
                nc = a(70178),
                nn = a.n(nc);

            function nh() {
                return (nh = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function ni() {
                return (ni = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function n_() {
                return (n_ = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function no() {
                return (no = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nd() {
                return (nd = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            var nm = function (e) {
                return l6.createElement("svg", nd({
                    viewBox: "0 0 873 199",
                    fill: "inherit",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), w || (w = l6.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M112.344 75.37c5.097-2.542 11.585-6.284 18.08-11.412 1.369 2.844 1.519 5.326.814 7.33-.5 1.412-1.443 2.64-2.681 3.618-1.342 1.056-3.018 1.824-4.87 2.24-3.514.792-7.617.33-11.343-1.776ZM113.227 101.418l6.749 3.898c-13.78 7.723-17.526 22.064-21.976 36.033-4.45-13.969-8.196-28.31-21.976-36.033l6.75-3.898a3.306 3.306 0 0 0 2.133-3.247c-.619-13.082 2.914-18.867 7.678-22.5 1.709-1.3 3.574-1.954 5.415-1.954 1.841 0 3.706.654 5.415 1.955 4.765 3.632 8.297 9.417 7.679 22.499a3.304 3.304 0 0 0 2.133 3.247ZM98 16c7.801.21 15.622 1.724 22.409 4.67 4.7 2.043 9.086 4.741 13.056 7.968 1.794 1.456 3.27 2.864 4.897 4.483 4.388.152 10.799-4.722 13.776-9.282-5.123 16.794-28.499 36.627-44.684 44.216l-.016-.01c-2.904-2.218-6.171-3.327-9.438-3.327-3.267 0-6.533 1.11-9.438 3.327l-.016.01c-16.184-7.589-39.56-27.422-44.683-44.216 2.976 4.56 9.388 9.434 13.775 9.282 1.627-1.62 3.104-3.027 4.897-4.483 3.97-3.227 8.357-5.925 13.056-7.968C82.38 17.724 90.2 16.21 98.001 16ZM83.657 75.37c-5.098-2.542-11.585-6.284-18.08-11.412-1.37 2.844-1.52 5.326-.814 7.33.5 1.412 1.442 2.64 2.68 3.618 1.343 1.056 3.018 1.824 4.87 2.24 3.515.792 7.618.33 11.344-1.776Z"
                })), b || (b = l6.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M137.537 57.676c3.576-3.609 6.726-7.602 9.26-11.166l1.286 2.422c4.143 8.287 6.295 16.54 6.295 25.83 0 4.912-.022 9.828-.009 14.74.007 3.08.029 4.56.077 7.64.301 18.759 4.36 37.739 13.554 55.108l-19.237-15.512-13.612 22.088-14.3-13.461L98 182.447l-22.851-37.082-14.3 13.461-13.611-22.088L28 152.25c9.195-17.369 13.254-36.349 13.554-55.107.048-3.082.07-4.561.078-7.642.012-4.911-.01-9.827-.01-14.74 0-9.289 2.152-17.542 6.295-25.83l1.287-2.421c2.533 3.564 5.683 7.557 9.26 11.166l-1.117 2.32c-2.17 4.504-2.888 9.541-1.198 14.332 1.089 3.085 3.077 5.731 5.64 7.751 2.49 1.962 5.435 3.284 8.52 3.979 2.008.452 4.055.638 6.088.575-.475 2.69-.682 5.479-.696 8.321l-18.146 10.481 14.003 7.849a23.37 23.37 0 0 1 3.186 2.15C86.289 125.8 93.23 156.465 98 171.443c4.77-14.978 11.711-45.643 23.256-56.009a23.399 23.399 0 0 1 3.186-2.15l14.003-7.849-18.147-10.481c-.013-2.842-.22-5.632-.695-8.321a24.29 24.29 0 0 0 6.089-.575c3.084-.695 6.03-2.017 8.518-3.979 2.564-2.02 4.552-4.666 5.641-7.751 1.69-4.79.972-9.828-1.197-14.333l-1.117-2.32Z"
                })), Z || (Z = l6.createElement("path", {
                    d: "M225.288 125c19.526 0 31.354-12.079 31.354-32.105 0-19.965-11.828-31.98-31.166-31.98H202.57V125h22.718Zm-9.169-11.609V72.524h8.637c12.016 0 18.368 6.133 18.368 20.37 0 14.301-6.352 20.497-18.399 20.497h-8.606ZM266.679 125h43.308v-11.171h-29.759V98.527h27.412V87.356h-27.412v-15.27h29.634V60.914h-43.183V125Zm66.659-64.086h-15.364l19.683 32.043L317.599 125h15.52l13.143-21.873h.5L359.905 125h15.583l-19.995-32.043 19.557-32.043h-15.301l-12.987 21.842h-.5l-12.924-21.842ZM428.631 76.936h7.51c-.345-9.67-9.263-16.898-21.654-16.898-12.267 0-21.904 7.135-21.904 17.9 0 8.636 6.258 13.767 16.271 16.646l7.886 2.253c6.759 1.878 12.767 4.256 12.767 10.64 0 7.009-6.759 11.64-15.646 11.64-7.635 0-14.394-3.379-15.02-10.639h-8.011c.751 10.514 9.263 17.649 23.031 17.649 14.77 0 23.156-8.136 23.156-18.525 0-12.016-11.39-15.897-18.024-17.649l-6.509-1.752c-4.756-1.252-12.391-3.755-12.391-10.64 0-6.133 5.632-10.639 14.143-10.639 7.761 0 13.644 3.693 14.395 10.014Zm72.714 4.005c-2.378-13.142-12.892-20.903-25.785-20.903-16.396 0-28.287 12.642-28.287 32.92 0 20.276 11.891 32.918 28.287 32.918 12.893 0 23.407-7.76 25.785-20.903h-7.76c-1.878 8.887-9.513 13.643-18.025 13.643-11.64 0-20.777-9.012-20.777-25.659s9.137-25.659 20.777-25.659c8.512 0 16.147 4.756 18.025 13.643h7.76ZM513.885 125h7.76V99.967h14.019c.563 0 1.095 0 1.627-.032L550.809 125h9.012l-14.488-26.473c8.167-2.785 11.985-9.45 11.985-17.961 0-11.328-6.759-19.652-21.779-19.652h-21.654V125Zm7.76-32.043V67.8h13.644c10.389 0 14.394 5.069 14.394 12.767 0 7.697-4.005 12.391-14.269 12.391h-13.769ZM570.249 125h39.178v-6.884H578.01v-21.78h28.913v-6.883H578.01V67.799h30.916v-6.885h-38.677V125Zm52.664 0h39.178v-6.884h-31.417v-21.78h28.913v-6.883h-28.913V67.799h30.916v-6.885h-38.677V125Zm103.482-64.086h-7.635v50.443h-.626l-35.046-50.443h-7.51V125h7.76V74.683h.626L718.885 125h7.51V60.914ZM741.924 125h39.177v-6.884h-31.417v-21.78h28.914v-6.883h-28.914V67.799h30.917v-6.885h-38.677V125Zm52.664 0h7.76V99.967h14.019c.563 0 1.095 0 1.627-.032L831.512 125h9.012l-14.488-26.473c8.167-2.785 11.985-9.45 11.985-17.961 0-11.328-6.759-19.652-21.779-19.652h-21.654V125Zm7.76-32.043V67.8h13.644c10.388 0 14.394 5.069 14.394 12.767 0 7.697-4.006 12.391-14.269 12.391h-13.769Z"
                })))
            };

            function nv() {
                return (nv = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            var ng = function (e) {
                return l6.createElement("svg", nv({
                    viewBox: "0 0 603 136",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), y || (y = l6.createElement("g", {
                    fill: "inherit"
                }, l6.createElement("path", {
                    d: "M389.29 59.42c3.756 1.586 7.803 2.37 12.161 2.37s8.405-.802 12.161-2.37c3.738-1.568 6.984-3.737 9.718-6.473 2.735-2.734 4.886-5.998 6.455-9.754 1.55-3.774 2.333-7.803 2.333-12.125 0-4.376-.765-8.423-2.333-12.16-1.569-3.738-3.72-6.984-6.455-9.719-2.734-2.735-5.98-4.904-9.718-6.472-3.756-1.587-7.785-2.37-12.161-2.37-4.376 0-8.424.802-12.161 2.37-3.738 1.568-6.983 3.737-9.718 6.472-2.735 2.753-4.886 5.98-6.454 9.718-1.55 3.738-2.334 7.786-2.334 12.161 0 4.321.766 8.369 2.333 12.125 1.569 3.756 3.72 7.02 6.455 9.755 2.735 2.735 5.98 4.904 9.718 6.472zm19.144-11.559c-2.06 1.003-4.394 1.495-6.983 1.495-2.589 0-4.941-.492-7.02-1.495-2.096-1.003-3.865-2.334-5.305-4.03-1.44-1.695-2.552-3.646-3.318-5.87-.766-2.225-1.15-4.577-1.15-7.093s.384-4.868 1.15-7.092c.766-2.206 1.878-4.157 3.318-5.816 1.44-1.66 3.209-2.972 5.306-3.939 2.078-.966 4.43-1.44 7.019-1.44 2.59 0 4.923.474 6.983 1.44 2.06.967 3.81 2.28 5.25 3.938 1.441 1.66 2.554 3.592 3.32 5.817.765 2.224 1.148 4.576 1.148 7.092s-.383 4.868-1.149 7.093c-.765 2.224-1.878 4.175-3.318 5.87a15.679 15.679 0 0 1-5.251 4.03zM154.924 1.915h22.28c4.54 0 8.733.583 12.599 1.75 3.865 1.167 7.184 2.954 9.992 5.342 2.79 2.389 4.977 5.452 6.545 9.19 1.568 3.737 2.334 8.131 2.334 13.219 0 4.85-.802 9.061-2.389 12.653-1.586 3.591-3.792 6.6-6.582 9.007-2.807 2.424-6.126 4.23-9.991 5.433-3.865 1.203-8.059 1.786-12.599 1.786h-22.189zm21.478 46.657c5.89 0 10.429-1.532 13.62-4.595 3.19-3.063 4.777-7.274 4.777-12.653 0-2.68-.365-5.123-1.112-7.311-.73-2.188-1.86-4.048-3.355-5.597-1.495-1.55-3.41-2.735-5.707-3.592-2.297-.839-5.032-1.276-8.222-1.276h-8.132v35.007h8.132zm41.461-46.657h13.346v58.381h-13.346zm56.484 0h-14.768L237.59 60.296h13.967l4.504-13.383h20.767l4.503 13.383h14.586zm-7.876 12.69 7.165 22.061H259.14zm37.559-12.69h12.635L332.053 29.3l15.024-27.385h12.726l2.735 58.381h-13.346l-1.678-38.161-12.198 22.754h-6.892L315.516 22.39l-1.495 37.887h-12.726zm137.27 0h12.726l25.544 37.887V1.915h13.164v58.381h-12.107l-26.164-38.598v38.598h-13.164zm85.22 0h-22.281v58.381h22.188c4.54 0 8.736-.583 12.6-1.786 3.863-1.204 7.184-3.01 9.993-5.434 2.787-2.407 4.996-5.415 6.579-9.007 1.588-3.592 2.39-7.803 2.39-12.653 0-5.087-.766-9.48-2.333-13.219-1.568-3.737-3.755-6.8-6.548-9.189-2.804-2.388-6.124-4.175-9.988-5.342-3.869-1.167-8.058-1.75-12.6-1.75zm12.817 42.063c-3.192 3.063-7.733 4.595-13.618 4.595v-.021h-8.134V13.545h8.134c3.191 0 5.922.438 8.218 1.276 2.302.857 4.216 2.042 5.71 3.592s2.607 3.41 3.352 5.597c.75 2.188 1.112 4.632 1.112 7.312 0 5.378-1.583 9.59-4.774 12.653zm-380.2 72.201a25.155 25.155 0 0 0 2.644 2.443c1.003.839 2.133 1.587 3.373 2.28 1.24.692 2.589 1.24 4.065 1.677 1.477.437 3.045.638 4.723.638.984 0 1.969-.146 2.935-.42.985-.291 1.878-.692 2.68-1.24.802-.546 1.459-1.202 1.951-1.968s.73-1.642.73-2.608c0-2.115-1.04-3.756-3.118-4.923-2.079-1.167-5.36-2.333-9.864-3.463a26.442 26.442 0 0 1-6.108-2.225c-1.878-.966-3.5-2.133-4.85-3.519a14.93 14.93 0 0 1-3.154-4.704c-.748-1.768-1.13-3.737-1.13-5.907 0-2.407.437-4.65 1.294-6.764.857-2.115 2.17-3.993 3.938-5.616 1.75-1.623 3.956-2.917 6.582-3.847 2.626-.948 5.725-1.422 9.298-1.422 2.936 0 5.544.291 7.786.893 2.242.602 4.175 1.313 5.762 2.134 1.586.838 2.88 1.677 3.901 2.57a85.236 85.236 0 0 1 2.297 2.097l-7.53 8.223a51.76 51.76 0 0 0-2.206-1.678c-.838-.601-1.768-1.148-2.808-1.677-1.039-.51-2.169-.948-3.427-1.295-1.24-.346-2.553-.51-3.938-.51-.93 0-1.824.146-2.736.42-.893.291-1.695.674-2.424 1.147-.73.493-1.295 1.058-1.732 1.715s-.657 1.349-.657 2.096c0 1.951 1.04 3.52 3.118 4.704 2.079 1.185 4.941 2.206 8.57 2.99 2.132.511 4.23 1.222 6.271 2.097 2.042.894 3.884 2.042 5.489 3.464 1.622 1.423 2.917 3.191 3.902 5.27.984 2.078 1.476 4.612 1.476 7.584 0 2.57-.583 4.941-1.732 7.111s-2.735 4.066-4.722 5.652c-1.987 1.605-4.321 2.844-7.02 3.72-2.68.893-5.579 1.33-8.697 1.33-2.88 0-5.506-.273-7.876-.82-2.37-.547-4.504-1.258-6.4-2.133-1.896-.894-3.628-1.897-5.141-3.045-1.532-1.149-2.844-2.315-3.939-3.519zm43.047-29.682h19.089v46.73h13.437v-46.73h18.998V74.865h-51.525zm66.476-11.651h14.768l21.569 58.381H290.41l-4.504-13.383H265.14l-4.503 13.383H246.67zm14.057 34.752-7.165-22.062-7.33 22.062zm41.352-34.752h-12.727v58.381h13.164V94.629l26.164 38.598h12.106V74.846h-13.164v37.888zm50.23 0h22.262c4.54 0 8.733.583 12.599 1.75 3.865 1.168 7.183 2.954 9.99 5.343 2.79 2.388 4.979 5.451 6.547 9.189 1.568 3.738 2.352 8.132 2.352 13.219 0 4.85-.802 9.062-2.389 12.653-1.586 3.592-3.792 6.6-6.582 9.007-2.807 2.425-6.126 4.23-9.991 5.433-3.865 1.204-8.06 1.787-12.6 1.787H374.3zm21.46 46.657c5.889 0 10.429-1.532 13.62-4.595 3.19-3.062 4.777-7.274 4.777-12.652 0-2.68-.365-5.124-1.113-7.312-.747-2.188-1.86-4.047-3.354-5.597-1.495-1.55-3.41-2.735-5.707-3.592-2.297-.857-5.033-1.276-8.223-1.276h-8.132v35.006h8.132zm70.45-46.657H451.44l-21.99 58.381h13.967l4.503-13.383h20.767l4.504 13.383h14.586zm-7.877 12.69 7.166 22.062h-14.495zm35.809-12.69h21.915c3.411 0 6.417.474 9.023 1.44 2.592.967 4.759 2.28 6.492 3.939a16.015 16.015 0 0 1 3.884 5.816c.859 2.224 1.278 4.576 1.278 7.093 0 3.792-.838 7.11-2.52 9.936-1.675 2.826-4.044 5.087-7.106 6.783l13.07 23.374h-14.679l-10.956-21.442h-7.42v21.442h-13V74.846zm21.223 26.346c2.48 0 4.414-.73 5.832-2.188 1.422-1.458 2.115-3.3 2.115-5.506 0-2.389-.709-4.285-2.115-5.689-1.418-1.404-3.353-2.096-5.832-2.096h-8.223v15.498h8.223zm54.714-26.346H547.8v58.381h22.189c4.536 0 8.73-.583 12.594-1.787 3.869-1.203 7.184-3.008 9.993-5.433 2.793-2.407 4.996-5.415 6.584-9.007 1.583-3.592 2.39-7.804 2.39-12.653 0-5.087-.771-9.481-2.338-13.22-1.568-3.737-3.755-6.8-6.543-9.188-2.809-2.389-6.13-4.175-9.993-5.342-3.864-1.168-8.058-1.751-12.6-1.751zm12.817 42.063c-3.191 3.063-7.727 4.595-13.62 4.595v-.016h-8.13V86.481h8.13c3.192 0 5.928.42 8.225 1.276 2.296.858 4.21 2.042 5.705 3.592 1.495 1.55 2.607 3.41 3.357 5.597.744 2.189 1.112 4.632 1.112 7.312 0 5.379-1.588 9.59-4.78 12.653zM67.2 108.05 26.56 67.391l40.64-40.64 40.64 40.64zM45.284 67.391 67.2 89.307l21.916-21.916L67.2 45.494zM67.2 108.05 26.56 67.391l40.64-40.64 40.64 40.64zM45.284 67.391 67.2 89.307l21.916-21.916L67.2 45.494zm87.553 0c0 36.247-29.391 65.637-65.637 65.637S1.563 103.637 1.563 67.391 30.954 1.754 67.2 1.754s65.637 29.391 65.637 65.637zM67.2 16.012c-28.388 0-51.379 23.01-51.379 51.379 0 28.37 22.991 51.398 51.379 51.398s51.379-23.009 51.379-51.379S95.588 16.013 67.2 16.013zM570.42 20.41c-1.309 0-2.509-.22-3.636-.66a8.624 8.624 0 0 1-2.902-1.871c-.838-.807-1.453-1.761-1.888-2.862a9.96 9.96 0 0 1-.693-3.705c0-1.357.218-2.605.693-3.742a8.454 8.454 0 0 1 1.888-2.861c.797-.807 1.78-1.431 2.902-1.871 1.127-.44 2.327-.66 3.636-.66 1.303 0 2.503.22 3.63.66a8.648 8.648 0 0 1 2.908 1.87 8.022 8.022 0 0 1 1.888 2.862c.434 1.1.687 2.348.687 3.742 0 1.357-.217 2.568-.687 3.705a8.532 8.532 0 0 1-1.888 2.862c-.802.807-1.78 1.394-2.907 1.87a9.996 9.996 0 0 1-3.631.661zm0-2.385c.941 0 1.815-.146 2.612-.476.802-.33 1.49-.77 2.074-1.358a5.587 5.587 0 0 0 1.34-2.128c.33-.807.476-1.724.476-2.714s-.145-1.908-.476-2.715c-.326-.807-.76-1.54-1.34-2.128-.584-.587-1.272-1.064-2.074-1.357-.797-.33-1.67-.477-2.612-.477-.947 0-1.815.147-2.617.477-.797.33-1.49.77-2.07 1.357a5.537 5.537 0 0 0-1.344 2.128 8.203 8.203 0 0 0-.47 2.715c0 .99.144 1.907.47 2.714.326.807.76 1.541 1.345 2.128a5.667 5.667 0 0 0 2.069 1.358c.765.33 1.634.477 2.617.477zM567.26 6.58h3.63c.875 0 1.599.256 2.142.733.548.477.838 1.174.838 1.981 0 .66-.145 1.247-.476 1.688-.29.44-.688.77-1.159.99l2.142 3.449h-2.323l-1.965-3.119h-.833v3.119h-2.032V6.58zm3.015 4.072c.543 0 .905-.074 1.159-.257.253-.184.367-.477.367-.954 0-.367-.114-.66-.331-.88a1.14 1.14 0 0 0-.833-.33h-1.345v2.42z"
                }))))
            };

            function np() {
                return (np = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nf() {
                return (nf = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nu() {
                return (nu = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nE() {
                return (nE = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nx() {
                return (nx = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            var nM = function (e) {
                return l6.createElement("svg", nx({
                    width: 318,
                    height: 94,
                    viewBox: "0 0 355 105",
                    fill: "inherit",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink"
                }, e), es || (es = l6.createElement("path", {
                    fill: "url(#hacken_logo_svg__a)",
                    d: "M0 0h110v105H0z"
                })), er || (er = l6.createElement("path", {
                    d: "M347.792 40v13.97L337.509 40h-7.208v31.192h7.208V57.074l10.353 14.118H355V40h-7.208ZM224.161 71.192h19.079v-8.685h-19.079V48.83h19.115V40h-26.217v31.192H224.161ZM300.481 71.192h17.594v-8.685h-17.594v-2.57h17.594v-8.73h-17.594V48.73h17.594V40h-24.732v31.192h7.138ZM187.06 64.207h10.6v6.982h7.103V40h-24.805v31.192h7.102v-6.985Zm0-15.525h10.6v6.84h-10.6v-6.84ZM150.138 60.13h10.386v11.062h7.138V40h-7.138v10.865h-10.386V40H143v31.192h7.138V60.131ZM262.709 60.034h11.024l7.068-9.265h.07V40h-7.138v10.769h-11.024V40h-7.138v31.192h7.138V60.034ZM280.871 60.034h-7.138v11.158h7.138V60.034Z",
                    fill: "#fff"
                })), el || (el = l6.createElement("defs", null, l6.createElement("pattern", {
                    id: "hacken_logo_svg__a",
                    patternContentUnits: "objectBoundingBox",
                    width: 1,
                    height: 1
                }, l6.createElement("use", {
                    xlinkHref: "#hacken_logo_svg__b",
                    transform: "matrix(.00543 0 0 .00568 0 .075)"
                })), l6.createElement("image", {
                    id: "hacken_logo_svg__b",
                    width: 184,
                    height: 184,
                    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAC4CAYAAABQMybHAAAMDElEQVR4nO3dW2wU1x3H8f+ZM7M7ewfHENWFxrjNRTEIMMZpiIRNUtNWhaRKa9SQgGry0CZtlaQJuVRq2LRIIQ2t1CqVWlWFKqQ8hIqGhkhRUEJShUu5rbAhBIKwuZiVMTFQ79p7ndOHBgkZ78x6d2DtP7/P4+6Zc45XX5bZu6AixOPxZzKZzKt2Y/L5/KmLFy/e3dDQcNZu3P79+1+prq5+1mnN9evXT4pGo+edxm3btu2bt91227tO4/L5/MK6urptBa7Wuru7Dwsh7rCbo7+/v2P27Nkznda6FtauXVvd1tZ2joiEzTCrp6fne/PmzXvLbq7u7u57hRDvO6157NixRa2tre8Us78TJ06clFJ+xW6MUmp7bW3tvXZjtmzZEpoxY8a/pZSz7MYZhrGspqbmDad9aU4DAMYzBA6sIXBgDYEDawgcWEPgwBoCB9YQOLCGwIE1BA6sIXBgDYEDawgcWEPgwBoCB9YQOLCGwIE1BA6sIXBgDYEDawgcWEPgwBoCB9YQOLCGwIE1BA6sIXBgDYEDawgcWEPgwBoCB9YQOLCmV3oD44lhGP6Ojo67K7F2IpGIOI1RSgm/33+70x5zudydhmE4rhmJRO7o6OjoL2Z/QghPEcPCRezNT0SBYtYsBgIfhVAo9DUi2lmJtSMRx75JCCEmTpy4xq01b7755rVuzUVEJISYE4lEruvth1MUYA2BA2sIHFhD4MAaAgfWEDiwhsCBNQQOrOGFnv9T58+f/wsRTa70Rm50uq5HIpHIck3T/K7M58YkDKjGxsbfVXoTQBSLxWoty3rQrcBxigKsIXBgDYEDawgcWEPgwBoCB9YQOLB2wzwPbllWMBaLTaj0PsCeZVlhIhJuzXfDBK5p2h9DodBgpfcB9oQQhq7rVW7Nd8MELqX8kpSy0tuA6wzn4MAaAgfWEDiwhsCBNQQOrCFwYA2BA2scngc/q5TaUOlNgDuUUkEhxLeFEKYb8437wFtbWzuJaHml9wHuiMViteFw+B5d110JHKcowBoCB9YQOLCGwIE1BA6sIXBgDYEDawgcWHPthR4hBGUyGS0ajTr9oyn283bFzAXMJBIJLRwOuzZfUbHF4/FnMpnMq3ZjlFJppVSMiDIO46ZJKac6rZnP53cJIbLF7A/4UEqZQojZmqbZ/pCnYRjLampq3nCaz817cK8Q4utuzSelrMgPrgIvOAUA1hA4sIbAgTUEDqwhcGANgQNrCBxYQ+DAmmsv9FiWFT916tQjAwMD59yaE8a+UCjUVFtb+1e7MUqpdG9v74q+vr4Op/nC4fCXp0yZslFK6co3zLoWuFIqGwqFPm1ubj7r1pww9m3dunVSEcMsXddPLFq06JDTwFgsllBK5VzYGhHhFAWYQ+DAGgIH1hA4sIbAgTUEDqwhcGDNzU/0mIFAYP6RI0f63ZoTKmvr1q07Vq5cmaz0PsrhWuCapk02TfPvbs0HlZfNZmcQ0SeV3kc53P76ZJzyMJLL5Vz7xeFKQZDAGgIH1hA4sIbAgTUEDqwhcGANgQNrbn5k7Vw8Hn8qlUp97taccG2Ew+HmSZMmvVDpfVwPbn5kLWWa5ofz5s3DR9bGuN27d0+s9B6uF5yiAGsIHFhD4MAaAgfWEDiwhsCBNQQOrLn5gQetu7s7snTp0iEX54QSmKaZW7du3UCl9zEWuBa4lHLKnDlzPpkzZ45bU0KJ0un0R+vWrWup9D7GApyiAGsIHFhD4MAaAgfWEDiwhsCBNQQOrCFwYM3NT/QMWJa1WSll+2WNlmXd7fF4ZjvNl06n10kpU0WsO9cwjLlO44aGht4wDOO/dmOEENOllPPtxliWlcrn868LIVz7oaTREEI8KqX0VmLt8cjNz2ReuHjx4i8aGhpsP7K2f//+V6qrqx0D37hx43PRaPS807hYLLaqqqrKMfC33377xZUrV3bZjenq6nqMiGwDz+fzidOnTz+xYMECx39818Jnn332AwRePJyiAGsIHFhD4MAaAgfWEDiwhsCBNQQOrCFwYA2BA2sIHFhD4MAaAgfWEDiwhsCBNQQOrCFwYA2BA2sIHFhD4MAaAgfWEDiwhsCBNQQOrCFwYA2BA2sIHFhD4MAaAgfWEDiwhsCBNQQOrCFwYK2oL8Dv6+vbkUgkVjkMu9TX1+f4++jxeHxbOp22/RUIIqJLly45jvlivg+Hhoac9kbJZPKC05ienp69mqbZzpXNZgeJqCK/7kBEFI/H1+i67rMbk06nT9pdf+7cuU7Lshxvs76+vnNOY06fPt1VVVVlO5dlWbne3t4zTnMREXV3d1+srq7+jZQyYDcuGAweLGY+AAAAAAAAAAAAAAAAAICxRxQz6OTJk4tTqdQjV16mlMolEolnGhsb4yMdc+DAgTs9Hs/Lwy/v7e3923333ffPYvZ29OjR14ioupg92snlct5NmzatiEaj/XbjDhw4MD8QCDxORd4uTpLJ5OcNDQ2P242JxWKv+f3+SVdels1mu/bu3Rttb29PFTpu586d3w2Hw+1XXiaEUET0h/r6+g/s1ty+ffu3ampq2u3GFKu3t3f7/Pnz/1TM2M7OzkeFEPcPv1wIsaW+vn49Eanh18VisVrDMH5Lw95WEggEfjdt2rSPnNYs6r0oHo/ndiJacuVlSqmMUuolIhox8EgkUqXr+lV/zMDAwI5i1iQi4fF4FmuaNrXI8bZ8Pp/pNEZKWWua5hJyKfBcLneaiGwDN03zO6Zp1g7bx4FAILDa7jiv13trKBQafvsqy7LectqXaZq3fvF3ls0wDMf3H10WDAana5p2VRNKqYWHDx+eXF9f/woNi9wwjEgwGFwshDCGXb6pmDXxbkKoOCGEGQgEfnXkyJGnyKU7l8sQOIwJQgjD7/e/evDgwRfJxcgROIwlWiQSeb6jo+M5cinyos7BC8lms1pbW5sc6bp8Pq/pelnTjyiVSv0nHo+/UOh6pVRTXV3dGrfWsyxrqL+//4mBgYHjoz02kUikS1xWXLhwQRa6bS+PKXHugrq6ulYQUfdojjl79uyIj8FKJYQwI5HIywcPHjSPHj3663LnK7lAIYTu8/l+v3r16sRI12uadlPp2yosn89/3tLSsr3Q9evXr/fW1dW5tp5SKi+l3NfS0hJzbVIHUsppzc3Nr7e0tBT8YIWU8tbhlymlUoODg5+Uuq6u69OklN7RHBMOh0NE9GmpaxYSiUSenTlzJg0NDW0pZ55y7mI1j8ezsJzFYWSapk3w+XxXPdtgx7KsvuPHj9/f2tq6p9R1p06d+svRHuPz+bYT0b9KXbMQIYTPNM1VSql6IUTJ/1u5fw5xjeXzeU9TU1PB/x2y2Wz4eu5njEgNDAwsbW1t3V3pjbjN7/c/qJQq+bHiuAs8HA5/Y9OmTecrvY+xQil1tre39/t33XXXrkrvpQyKCjymKCduIjyLMq5ZljUYj8eXNDU1jet77lQq9c61mruce3Arm82+q5Qa8ZUsTdOqdV2/r4z5b1iWZV3IZrMfCCEKPsgUQnw1mUzuCAaDUw4dOrSks7Pz8rF7Zs6c2VXKuoODg+/qun5pNMdkMpnDpaw1bI6XLMs64fP5fiyE8JQ735VKDlwplRscHHx68+bNx0a6fvny5fcQEQIvQT6f796zZ8+K48ePj/gMFRHRAw888HRVVdUaIvrZ5cuUUiSEWEFEJQX+8ccfP9fT03NoNMesWrXqqvePjJbf709v2LDh6ba2NiMYDD5W7nxXKusc3DAMKxqNWiNdt2zZsrL/8AIUjfCmnCsIcvE5YillYMKECe93dXWN+rtQksnkoenTp99bwrLK4/EUvG2JiBYvXkw07BRTCKEsyyr5b29ubt5mWdao/s5du3btJKK2Ute8LBqN5m655Zafz507Nx0MBn8y/L0npRp3DzKTyeS2J5988sFC1z/88MMLW1paNru4pBBCTCzlmSop5QQX93HNeb3eyaM9xu/3u/Z6R3t7e2rfvn3Per3emzwezyPkwh3VuAuciHLvvfdewW+9euihh4au52bAXY2Njdk333zzR7Nmzer3er0/JSK7V3Md4VkUGHOWLFky1NPT83wmk/kHEeXLmQuBw5i0YMGC1JkzZ36YSqX+TPaPuWz9D2jjaT0HGcJRAAAAAElFTkSuQmCC"
                }))))
            };

            function nz() {
                return (nz = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            var nw = function (e) {
                return l6.createElement("svg", nz({
                    width: 318,
                    height: 94,
                    viewBox: "0 0 355 105",
                    fill: "inherit",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink"
                }, e), ec || (ec = l6.createElement("defs", null, l6.createElement("filter", {
                    id: "hacken_logo_green_svg__b"
                }, l6.createElement("feColorMatrix", {
                    values: "0 0 0 0 0.05 0 1 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
                })))), en || (en = l6.createElement("path", {
                    fill: "url(#hacken_logo_green_svg__a)",
                    filter: "url(#hacken_logo_green_svg__b)",
                    d: "M0 0h110v105H0z"
                })), eh || (eh = l6.createElement("path", {
                    d: "M347.792 40v13.97L337.509 40h-7.208v31.192h7.208V57.074l10.353 14.118H355V40h-7.208ZM224.161 71.192h19.079v-8.685h-19.079V48.83h19.115V40h-26.217v31.192H224.161ZM300.481 71.192h17.594v-8.685h-17.594v-2.57h17.594v-8.73h-17.594V48.73h17.594V40h-24.732v31.192h7.138ZM187.06 64.207h10.6v6.982h7.103V40h-24.805v31.192h7.102v-6.985Zm0-15.525h10.6v6.84h-10.6v-6.84ZM150.138 60.13h10.386v11.062h7.138V40h-7.138v10.865h-10.386V40H143v31.192h7.138V60.131ZM262.709 60.034h11.024l7.068-9.265h.07V40h-7.138v10.769h-11.024V40h-7.138v31.192h7.138V60.034ZM280.871 60.034h-7.138v11.158h7.138V60.034Z",
                    fill: "#69ff52"
                })), ei || (ei = l6.createElement("defs", null, l6.createElement("pattern", {
                    id: "hacken_logo_green_svg__a",
                    patternContentUnits: "objectBoundingBox",
                    width: 1,
                    height: 1
                }, l6.createElement("use", {
                    xlinkHref: "#hacken_logo_green_svg__c",
                    transform: "matrix(.00543 0 0 .00568 0 .075)"
                })), l6.createElement("image", {
                    id: "hacken_logo_green_svg__c",
                    width: 184,
                    height: 184,
                    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAC4CAYAAABQMybHAAAMDElEQVR4nO3dW2wU1x3H8f+ZM7M7ewfHENWFxrjNRTEIMMZpiIRNUtNWhaRKa9SQgGry0CZtlaQJuVRq2LRIIQ2t1CqVWlWFKqQ8hIqGhkhRUEJShUu5rbAhBIKwuZiVMTFQ79p7ndOHBgkZ78x6d2DtP7/P4+6Zc45XX5bZu6AixOPxZzKZzKt2Y/L5/KmLFy/e3dDQcNZu3P79+1+prq5+1mnN9evXT4pGo+edxm3btu2bt91227tO4/L5/MK6urptBa7Wuru7Dwsh7rCbo7+/v2P27Nkznda6FtauXVvd1tZ2joiEzTCrp6fne/PmzXvLbq7u7u57hRDvO6157NixRa2tre8Us78TJ06clFJ+xW6MUmp7bW3tvXZjtmzZEpoxY8a/pZSz7MYZhrGspqbmDad9aU4DAMYzBA6sIXBgDYEDawgcWEPgwBoCB9YQOLCGwIE1BA6sIXBgDYEDawgcWEPgwBoCB9YQOLCGwIE1BA6sIXBgDYEDawgcWEPgwBoCB9YQOLCGwIE1BA6sIXBgDYEDawgcWEPgwBoCB9YQOLCmV3oD44lhGP6Ojo67K7F2IpGIOI1RSgm/33+70x5zudydhmE4rhmJRO7o6OjoL2Z/QghPEcPCRezNT0SBYtYsBgIfhVAo9DUi2lmJtSMRx75JCCEmTpy4xq01b7755rVuzUVEJISYE4lEruvth1MUYA2BA2sIHFhD4MAaAgfWEDiwhsCBNQQOrOGFnv9T58+f/wsRTa70Rm50uq5HIpHIck3T/K7M58YkDKjGxsbfVXoTQBSLxWoty3rQrcBxigKsIXBgDYEDawgcWEPgwBoCB9YQOLB2wzwPbllWMBaLTaj0PsCeZVlhIhJuzXfDBK5p2h9DodBgpfcB9oQQhq7rVW7Nd8MELqX8kpSy0tuA6wzn4MAaAgfWEDiwhsCBNQQOrCFwYA2BA2scngc/q5TaUOlNgDuUUkEhxLeFEKYb8437wFtbWzuJaHml9wHuiMViteFw+B5d110JHKcowBoCB9YQOLCGwIE1BA6sIXBgDYEDawgcWHPthR4hBGUyGS0ajTr9oyn283bFzAXMJBIJLRwOuzZfUbHF4/FnMpnMq3ZjlFJppVSMiDIO46ZJKac6rZnP53cJIbLF7A/4UEqZQojZmqbZ/pCnYRjLampq3nCaz817cK8Q4utuzSelrMgPrgIvOAUA1hA4sIbAgTUEDqwhcGANgQNrCBxYQ+DAmmsv9FiWFT916tQjAwMD59yaE8a+UCjUVFtb+1e7MUqpdG9v74q+vr4Op/nC4fCXp0yZslFK6co3zLoWuFIqGwqFPm1ubj7r1pww9m3dunVSEcMsXddPLFq06JDTwFgsllBK5VzYGhHhFAWYQ+DAGgIH1hA4sIbAgTUEDqwhcGDNzU/0mIFAYP6RI0f63ZoTKmvr1q07Vq5cmaz0PsrhWuCapk02TfPvbs0HlZfNZmcQ0SeV3kc53P76ZJzyMJLL5Vz7xeFKQZDAGgIH1hA4sIbAgTUEDqwhcGANgQNrbn5k7Vw8Hn8qlUp97taccG2Ew+HmSZMmvVDpfVwPbn5kLWWa5ofz5s3DR9bGuN27d0+s9B6uF5yiAGsIHFhD4MAaAgfWEDiwhsCBNQQOrLn5gQetu7s7snTp0iEX54QSmKaZW7du3UCl9zEWuBa4lHLKnDlzPpkzZ45bU0KJ0un0R+vWrWup9D7GApyiAGsIHFhD4MAaAgfWEDiwhsCBNQQOrCFwYM3NT/QMWJa1WSll+2WNlmXd7fF4ZjvNl06n10kpU0WsO9cwjLlO44aGht4wDOO/dmOEENOllPPtxliWlcrn868LIVz7oaTREEI8KqX0VmLt8cjNz2ReuHjx4i8aGhpsP7K2f//+V6qrqx0D37hx43PRaPS807hYLLaqqqrKMfC33377xZUrV3bZjenq6nqMiGwDz+fzidOnTz+xYMECx39818Jnn332AwRePJyiAGsIHFhD4MAaAgfWEDiwhsCBNQQOrCFwYA2BA2sIHFhD4MAaAgfWEDiwhsCBNQQOrCFwYA2BA2sIHFhD4MAaAgfWEDiwhsCBNQQOrCFwYA2BA2sIHFhD4MAaAgfWEDiwhsCBNQQOrCFwYK2oL8Dv6+vbkUgkVjkMu9TX1+f4++jxeHxbOp22/RUIIqJLly45jvlivg+Hhoac9kbJZPKC05ienp69mqbZzpXNZgeJqCK/7kBEFI/H1+i67rMbk06nT9pdf+7cuU7Lshxvs76+vnNOY06fPt1VVVVlO5dlWbne3t4zTnMREXV3d1+srq7+jZQyYDcuGAweLGY+AAAAAAAAAAAAAAAAAICxRxQz6OTJk4tTqdQjV16mlMolEolnGhsb4yMdc+DAgTs9Hs/Lwy/v7e3923333ffPYvZ29OjR14ioupg92snlct5NmzatiEaj/XbjDhw4MD8QCDxORd4uTpLJ5OcNDQ2P242JxWKv+f3+SVdels1mu/bu3Rttb29PFTpu586d3w2Hw+1XXiaEUET0h/r6+g/s1ty+ffu3ampq2u3GFKu3t3f7/Pnz/1TM2M7OzkeFEPcPv1wIsaW+vn49Eanh18VisVrDMH5Lw95WEggEfjdt2rSPnNYs6r0oHo/ndiJacuVlSqmMUuolIhox8EgkUqXr+lV/zMDAwI5i1iQi4fF4FmuaNrXI8bZ8Pp/pNEZKWWua5hJyKfBcLneaiGwDN03zO6Zp1g7bx4FAILDa7jiv13trKBQafvsqy7LectqXaZq3fvF3ls0wDMf3H10WDAana5p2VRNKqYWHDx+eXF9f/woNi9wwjEgwGFwshDCGXb6pmDXxbkKoOCGEGQgEfnXkyJGnyKU7l8sQOIwJQgjD7/e/evDgwRfJxcgROIwlWiQSeb6jo+M5cinyos7BC8lms1pbW5sc6bp8Pq/pelnTjyiVSv0nHo+/UOh6pVRTXV3dGrfWsyxrqL+//4mBgYHjoz02kUikS1xWXLhwQRa6bS+PKXHugrq6ulYQUfdojjl79uyIj8FKJYQwI5HIywcPHjSPHj3663LnK7lAIYTu8/l+v3r16sRI12uadlPp2yosn89/3tLSsr3Q9evXr/fW1dW5tp5SKi+l3NfS0hJzbVIHUsppzc3Nr7e0tBT8YIWU8tbhlymlUoODg5+Uuq6u69OklN7RHBMOh0NE9GmpaxYSiUSenTlzJg0NDW0pZ55y7mI1j8ezsJzFYWSapk3w+XxXPdtgx7KsvuPHj9/f2tq6p9R1p06d+svRHuPz+bYT0b9KXbMQIYTPNM1VSql6IUTJ/1u5fw5xjeXzeU9TU1PB/x2y2Wz4eu5njEgNDAwsbW1t3V3pjbjN7/c/qJQq+bHiuAs8HA5/Y9OmTecrvY+xQil1tre39/t33XXXrkrvpQyKCjymKCduIjyLMq5ZljUYj8eXNDU1jet77lQq9c61mruce3Arm82+q5Qa8ZUsTdOqdV2/r4z5b1iWZV3IZrMfCCEKPsgUQnw1mUzuCAaDUw4dOrSks7Pz8rF7Zs6c2VXKuoODg+/qun5pNMdkMpnDpaw1bI6XLMs64fP5fiyE8JQ735VKDlwplRscHHx68+bNx0a6fvny5fcQEQIvQT6f796zZ8+K48ePj/gMFRHRAw888HRVVdUaIvrZ5cuUUiSEWEFEJQX+8ccfP9fT03NoNMesWrXqqvePjJbf709v2LDh6ba2NiMYDD5W7nxXKusc3DAMKxqNWiNdt2zZsrL/8AIUjfCmnCsIcvE5YillYMKECe93dXWN+rtQksnkoenTp99bwrLK4/EUvG2JiBYvXkw07BRTCKEsyyr5b29ubt5mWdao/s5du3btJKK2Ute8LBqN5m655Zafz507Nx0MBn8y/L0npRp3DzKTyeS2J5988sFC1z/88MMLW1paNru4pBBCTCzlmSop5QQX93HNeb3eyaM9xu/3u/Z6R3t7e2rfvn3Per3emzwezyPkwh3VuAuciHLvvfdewW+9euihh4au52bAXY2Njdk333zzR7Nmzer3er0/JSK7V3Md4VkUGHOWLFky1NPT83wmk/kHEeXLmQuBw5i0YMGC1JkzZ36YSqX+TPaPuWz9D2jjaT0HGcJRAAAAAElFTkSuQmCC"
                }))))
            };

            function nb() {
                return (nb = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nZ() {
                return (nZ = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function ny() {
                return (ny = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nV() {
                return (nV = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nN() {
                return (nN = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            var nj = function (e) {
                return l6.createElement("svg", nN({
                    width: 340,
                    height: 80,
                    viewBox: "0 0 335 85",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), eY || (eY = l6.createElement("g", {
                    clipPath: "url(#hbarf_svg__a)"
                }, l6.createElement("path", {
                    d: "M100.89 12.61h21v3.75h-8v19.91h-5.07V16.36h-8l.07-3.75ZM125.91 12.61h5v9.8h9.95v-9.8h5.05v23.66h-5.05V26.11h-9.95v10.16h-5V12.61ZM151.6 12.61h17.17v3.75h-12.14v5.92h10.51V26h-10.51v6.51h12.48v3.74H151.6V12.61ZM183.7 12.61h5v9.8h9.94v-9.8h5v23.66h-5V26.11h-9.94v10.16h-5V12.61ZM209.39 12.61h11.72a8.61 8.61 0 0 1 5.28 1.53 5.08 5.08 0 0 1 2.05 4.36 6.18 6.18 0 0 1-.32 2 4.46 4.46 0 0 1-1.86 2.5 6.157 6.157 0 0 1-1.11.64c-.325.135-.66.249-1 .34v.34c3.08.74 4.62 2.61 4.62 5.61a5.73 5.73 0 0 1-1.06 3.48 6.25 6.25 0 0 1-2.71 2.17 10.162 10.162 0 0 1-3.85.69h-11.76V12.61Zm5 3.75v6.05h5.38a4.299 4.299 0 0 0 2.67-.77 2.659 2.659 0 0 0 1-2.26 2.615 2.615 0 0 0-1-2.26 4.32 4.32 0 0 0-2.67-.76h-5.38Zm0 9.79v6.38h5.44a4.65 4.65 0 0 0 2.85-.79 2.764 2.764 0 0 0 1.1-2.4 2.741 2.741 0 0 0-1.1-2.39 4.591 4.591 0 0 0-2.85-.8h-5.44ZM231.45 36.27v-.5l8.09-23.16h6.36l8.1 23.16v.5h-5.06L247.19 31h-8.94l-1.74 5.3-5.06-.03Zm7.91-9h6.7l-3.17-9.72h-.34l-3.19 9.72ZM277.59 19.88a6.897 6.897 0 0 1-1.48 4.49 7.388 7.388 0 0 1-3.94 2.47l5.18 8.93v.5h-5.24l-5.11-9.1h-4v9.1h-5V12.61h11.53a8.47 8.47 0 0 1 5.74 2 6.618 6.618 0 0 1 2.32 5.27Zm-14.51-3.52v7.06h5.48a4.44 4.44 0 0 0 2.94-.91 3.282 3.282 0 0 0 1.09-2.63 3.223 3.223 0 0 0-1.09-2.6 4.441 4.441 0 0 0-2.94-.92h-5.48ZM102.53 45.45h16.39v3.76h-11.36v6.2h10v3.74h-10v10h-5l-.03-23.7ZM122.14 57.29a13.004 13.004 0 0 1 1.54-6.43 10.684 10.684 0 0 1 4.38-4.28 13.56 13.56 0 0 1 6.52-1.51 12.299 12.299 0 0 1 9 3.35 11.824 11.824 0 0 1 3.42 8.87 11.878 11.878 0 0 1-3.42 8.87 12.339 12.339 0 0 1-9 3.35 13.64 13.64 0 0 1-6.52-1.51 10.794 10.794 0 0 1-4.38-4.3 12.938 12.938 0 0 1-1.54-6.41Zm5 0a9.12 9.12 0 0 0 2 6.13 7.632 7.632 0 0 0 10.86 0 9.001 9.001 0 0 0 2-6.13 9.001 9.001 0 0 0-2-6.13 7.583 7.583 0 0 0-10.86 0 9.058 9.058 0 0 0-1.95 6.13h-.05ZM151.5 45.45h5.05V60.8a4.84 4.84 0 0 0 1.32 3.63 6.201 6.201 0 0 0 7.49 0 4.85 4.85 0 0 0 1.31-3.63V45.45h5.07v15a8.523 8.523 0 0 1-2.63 6.62c-1.74 1.587-4.237 2.383-7.49 2.39-3.19 0-5.67-.8-7.46-2.41a8.454 8.454 0 0 1-2.66-6.6v-15ZM177.25 45.45h5.59l9.68 16.43h.34V45.45h4.82v23.66h-5.54l-9.72-16.42h-.34v16.42h-4.83V45.45ZM203.33 45.45h9.24a12.286 12.286 0 0 1 8.93 3.21 11.417 11.417 0 0 1 3.32 8.63 11.446 11.446 0 0 1-3.32 8.63 12.346 12.346 0 0 1-8.93 3.19h-9.24V45.45Zm5 3.76v16.16h4.11a6.754 6.754 0 0 0 5.34-2.18 8.561 8.561 0 0 0 1.94-5.9 8.561 8.561 0 0 0-1.94-5.9 6.72 6.72 0 0 0-5.34-2.18h-4.11ZM226.93 69.11v-.5L235 45.45h6.37l8.08 23.16v.5h-5.05l-1.74-5.29h-8.93L232 69.11h-5.07Zm7.91-9h6.7l-3.17-9.71H238l-3.16 9.71ZM249.57 45.45h21v3.76h-8v19.9h-5.06v-19.9h-8l.06-3.76ZM274.59 45.45h5v23.66h-5V45.45ZM284.2 57.29a13.09 13.09 0 0 1 1.53-6.43 10.677 10.677 0 0 1 4.38-4.28 13.6 13.6 0 0 1 6.53-1.51 12.331 12.331 0 0 1 9 3.35 11.807 11.807 0 0 1 3.41 8.87 11.854 11.854 0 0 1-3.41 8.87 12.367 12.367 0 0 1-9 3.35 13.65 13.65 0 0 1-6.53-1.51 10.788 10.788 0 0 1-4.38-4.3 13.001 13.001 0 0 1-1.53-6.41Zm5.05 0a9.068 9.068 0 0 0 2 6.13 7.614 7.614 0 0 0 5.425 2.269 7.618 7.618 0 0 0 5.425-2.269 9.001 9.001 0 0 0 2-6.13 9.001 9.001 0 0 0-2-6.13 7.564 7.564 0 0 0-5.425-2.29 7.567 7.567 0 0 0-5.425 2.29 9.001 9.001 0 0 0-2 6.13ZM313.69 45.45h5.58L329 61.88h.34V45.45h4.82v23.66h-5.54l-9.72-16.42h-.34v16.42h-4.82l-.05-23.66ZM40.27 11.82a5.91 5.91 0 1 0-5.91-5.91 5.9 5.9 0 0 0 5.91 5.91ZM19 18.72A5.91 5.91 0 1 0 19 6.9a5.91 5.91 0 0 0 0 11.82ZM5.91 36.79A5.92 5.92 0 1 0 0 30.88a5.91 5.91 0 0 0 5.91 5.91ZM5.91 59.11A5.91 5.91 0 1 0 0 53.2a5.9 5.9 0 0 0 5.91 5.91ZM19 77.18a5.92 5.92 0 1 0 .02-11.84A5.92 5.92 0 0 0 19 77.18ZM40.27 84.08a5.92 5.92 0 1 0-5.91-5.91 5.91 5.91 0 0 0 5.91 5.91ZM61.51 77.18a5.92 5.92 0 1 0 0-11.84 5.92 5.92 0 0 0 0 11.84ZM74.63 59.11a5.91 5.91 0 1 0-5.91-5.91 5.9 5.9 0 0 0 5.91 5.91ZM74.63 36.79a5.92 5.92 0 1 0-5.91-5.91 5.91 5.91 0 0 0 5.91 5.91ZM61.51 18.72a5.91 5.91 0 1 0-.02-11.82 5.91 5.91 0 0 0 .02 11.82ZM33.77 26.28a4.6 4.6 0 1 0 0-9.2 4.6 4.6 0 0 0 0 9.2ZM23 34a4.6 4.6 0 1 0 .02-9.199A4.6 4.6 0 0 0 23 34ZM18.91 46.53a4.6 4.6 0 1 0 0-9.199 4.6 4.6 0 0 0 0 9.199ZM22.92 59.11a4.6 4.6 0 1 0-4.59-4.59 4.59 4.59 0 0 0 4.59 4.59ZM33.57 66.93a4.6 4.6 0 1 0 0-9.2 4.6 4.6 0 0 0 0 9.2ZM46.78 67a4.6 4.6 0 1 0 0-9.2 4.6 4.6 0 0 0 0 9.2ZM57.5 59.28a4.6 4.6 0 1 0 0-9.2 4.6 4.6 0 0 0 0 9.2ZM61.64 46.74a4.6 4.6 0 1 0 0-9.2 4.6 4.6 0 0 0 0 9.2ZM57.62 34.16a4.6 4.6 0 1 0 0-9.2 4.6 4.6 0 0 0 0 9.2ZM47 26.35a4.6 4.6 0 1 0 .02-9.199A4.6 4.6 0 0 0 47 26.35Z",
                    fill: "#fff"
                }), l6.createElement("path", {
                    d: "M40.27 5.91 47 21.75M61.51 12.81 47 21.75M57.62 29.56l3.89-16.75M74.63 30.88l-17-1.32M61.64 42.14l13-11.26M74.63 53.2l-13-11.06M57.5 54.68l17.13-1.48M61.51 71.27l-4-16.59M46.78 62.39l14.73 8.87M40.27 78.17l6.51-15.78M33.57 62.33l6.7 15.84M19 71.27l14.53-8.94M22.92 54.52 19 71.26M5.91 53.2l17 1.32M18.9 41.93 5.91 53.2M5.91 30.88l13 11.05M23.05 29.39 5.91 30.88M19 12.81l4 16.58M33.77 21.69 19 12.81M40.27 5.91l-6.5 15.78",
                    stroke: "#fff",
                    strokeWidth: 2.63,
                    strokeMiterlimit: 10
                }))), eX || (eX = l6.createElement("defs", null, l6.createElement("clipPath", {
                    id: "hbarf_svg__a"
                }, l6.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h334.11v84.08H0z"
                })))))
            };

            function nH() {
                return (nH = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            var nk = function (e) {
                return l6.createElement("svg", nH({
                    width: 340,
                    height: 80,
                    viewBox: "0 0 335 85",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), eK || (eK = l6.createElement("g", {
                    clipPath: "url(#hbarf_green_svg__a)"
                }, l6.createElement("path", {
                    d: "M100.89 12.61h21v3.75h-8v19.91h-5.07V16.36h-8l.07-3.75ZM125.91 12.61h5v9.8h9.95v-9.8h5.05v23.66h-5.05V26.11h-9.95v10.16h-5V12.61ZM151.6 12.61h17.17v3.75h-12.14v5.92h10.51V26h-10.51v6.51h12.48v3.74H151.6V12.61ZM183.7 12.61h5v9.8h9.94v-9.8h5v23.66h-5V26.11h-9.94v10.16h-5V12.61ZM209.39 12.61h11.72a8.61 8.61 0 0 1 5.28 1.53 5.08 5.08 0 0 1 2.05 4.36 6.18 6.18 0 0 1-.32 2 4.46 4.46 0 0 1-1.86 2.5 6.157 6.157 0 0 1-1.11.64c-.325.135-.66.249-1 .34v.34c3.08.74 4.62 2.61 4.62 5.61a5.73 5.73 0 0 1-1.06 3.48 6.25 6.25 0 0 1-2.71 2.17 10.162 10.162 0 0 1-3.85.69h-11.76V12.61Zm5 3.75v6.05h5.38a4.299 4.299 0 0 0 2.67-.77 2.659 2.659 0 0 0 1-2.26 2.615 2.615 0 0 0-1-2.26 4.32 4.32 0 0 0-2.67-.76h-5.38Zm0 9.79v6.38h5.44a4.65 4.65 0 0 0 2.85-.79 2.764 2.764 0 0 0 1.1-2.4 2.741 2.741 0 0 0-1.1-2.39 4.591 4.591 0 0 0-2.85-.8h-5.44ZM231.45 36.27v-.5l8.09-23.16h6.36l8.1 23.16v.5h-5.06L247.19 31h-8.94l-1.74 5.3-5.06-.03Zm7.91-9h6.7l-3.17-9.72h-.34l-3.19 9.72ZM277.59 19.88a6.897 6.897 0 0 1-1.48 4.49 7.388 7.388 0 0 1-3.94 2.47l5.18 8.93v.5h-5.24l-5.11-9.1h-4v9.1h-5V12.61h11.53a8.47 8.47 0 0 1 5.74 2 6.618 6.618 0 0 1 2.32 5.27Zm-14.51-3.52v7.06h5.48a4.44 4.44 0 0 0 2.94-.91 3.282 3.282 0 0 0 1.09-2.63 3.223 3.223 0 0 0-1.09-2.6 4.441 4.441 0 0 0-2.94-.92h-5.48ZM102.53 45.45h16.39v3.76h-11.36v6.2h10v3.74h-10v10h-5l-.03-23.7ZM122.14 57.29a13.004 13.004 0 0 1 1.54-6.43 10.684 10.684 0 0 1 4.38-4.28 13.56 13.56 0 0 1 6.52-1.51 12.299 12.299 0 0 1 9 3.35 11.824 11.824 0 0 1 3.42 8.87 11.878 11.878 0 0 1-3.42 8.87 12.339 12.339 0 0 1-9 3.35 13.64 13.64 0 0 1-6.52-1.51 10.794 10.794 0 0 1-4.38-4.3 12.938 12.938 0 0 1-1.54-6.41Zm5 0a9.12 9.12 0 0 0 2 6.13 7.632 7.632 0 0 0 10.86 0 9.001 9.001 0 0 0 2-6.13 9.001 9.001 0 0 0-2-6.13 7.583 7.583 0 0 0-10.86 0 9.058 9.058 0 0 0-1.95 6.13h-.05ZM151.5 45.45h5.05V60.8a4.84 4.84 0 0 0 1.32 3.63 6.201 6.201 0 0 0 7.49 0 4.85 4.85 0 0 0 1.31-3.63V45.45h5.07v15a8.523 8.523 0 0 1-2.63 6.62c-1.74 1.587-4.237 2.383-7.49 2.39-3.19 0-5.67-.8-7.46-2.41a8.454 8.454 0 0 1-2.66-6.6v-15ZM177.25 45.45h5.59l9.68 16.43h.34V45.45h4.82v23.66h-5.54l-9.72-16.42h-.34v16.42h-4.83V45.45ZM203.33 45.45h9.24a12.286 12.286 0 0 1 8.93 3.21 11.417 11.417 0 0 1 3.32 8.63 11.446 11.446 0 0 1-3.32 8.63 12.346 12.346 0 0 1-8.93 3.19h-9.24V45.45Zm5 3.76v16.16h4.11a6.754 6.754 0 0 0 5.34-2.18 8.561 8.561 0 0 0 1.94-5.9 8.561 8.561 0 0 0-1.94-5.9 6.72 6.72 0 0 0-5.34-2.18h-4.11ZM226.93 69.11v-.5L235 45.45h6.37l8.08 23.16v.5h-5.05l-1.74-5.29h-8.93L232 69.11h-5.07Zm7.91-9h6.7l-3.17-9.71H238l-3.16 9.71ZM249.57 45.45h21v3.76h-8v19.9h-5.06v-19.9h-8l.06-3.76ZM274.59 45.45h5v23.66h-5V45.45ZM284.2 57.29a13.09 13.09 0 0 1 1.53-6.43 10.677 10.677 0 0 1 4.38-4.28 13.6 13.6 0 0 1 6.53-1.51 12.331 12.331 0 0 1 9 3.35 11.807 11.807 0 0 1 3.41 8.87 11.854 11.854 0 0 1-3.41 8.87 12.367 12.367 0 0 1-9 3.35 13.65 13.65 0 0 1-6.53-1.51 10.788 10.788 0 0 1-4.38-4.3 13.001 13.001 0 0 1-1.53-6.41Zm5.05 0a9.068 9.068 0 0 0 2 6.13 7.614 7.614 0 0 0 5.425 2.269 7.618 7.618 0 0 0 5.425-2.269 9.001 9.001 0 0 0 2-6.13 9.001 9.001 0 0 0-2-6.13 7.564 7.564 0 0 0-5.425-2.29 7.567 7.567 0 0 0-5.425 2.29 9.001 9.001 0 0 0-2 6.13ZM313.69 45.45h5.58L329 61.88h.34V45.45h4.82v23.66h-5.54l-9.72-16.42h-.34v16.42h-4.82l-.05-23.66ZM40.27 11.82a5.91 5.91 0 1 0-5.91-5.91 5.9 5.9 0 0 0 5.91 5.91ZM19 18.72A5.91 5.91 0 1 0 19 6.9a5.91 5.91 0 0 0 0 11.82ZM5.91 36.79A5.92 5.92 0 1 0 0 30.88a5.91 5.91 0 0 0 5.91 5.91ZM5.91 59.11A5.91 5.91 0 1 0 0 53.2a5.9 5.9 0 0 0 5.91 5.91ZM19 77.18a5.92 5.92 0 1 0 .02-11.84A5.92 5.92 0 0 0 19 77.18ZM40.27 84.08a5.92 5.92 0 1 0-5.91-5.91 5.91 5.91 0 0 0 5.91 5.91ZM61.51 77.18a5.92 5.92 0 1 0 0-11.84 5.92 5.92 0 0 0 0 11.84ZM74.63 59.11a5.91 5.91 0 1 0-5.91-5.91 5.9 5.9 0 0 0 5.91 5.91ZM74.63 36.79a5.92 5.92 0 1 0-5.91-5.91 5.91 5.91 0 0 0 5.91 5.91ZM61.51 18.72a5.91 5.91 0 1 0-.02-11.82 5.91 5.91 0 0 0 .02 11.82ZM33.77 26.28a4.6 4.6 0 1 0 0-9.2 4.6 4.6 0 0 0 0 9.2ZM23 34a4.6 4.6 0 1 0 .02-9.199A4.6 4.6 0 0 0 23 34ZM18.91 46.53a4.6 4.6 0 1 0 0-9.199 4.6 4.6 0 0 0 0 9.199ZM22.92 59.11a4.6 4.6 0 1 0-4.59-4.59 4.59 4.59 0 0 0 4.59 4.59ZM33.57 66.93a4.6 4.6 0 1 0 0-9.2 4.6 4.6 0 0 0 0 9.2ZM46.78 67a4.6 4.6 0 1 0 0-9.2 4.6 4.6 0 0 0 0 9.2ZM57.5 59.28a4.6 4.6 0 1 0 0-9.2 4.6 4.6 0 0 0 0 9.2ZM61.64 46.74a4.6 4.6 0 1 0 0-9.2 4.6 4.6 0 0 0 0 9.2ZM57.62 34.16a4.6 4.6 0 1 0 0-9.2 4.6 4.6 0 0 0 0 9.2ZM47 26.35a4.6 4.6 0 1 0 .02-9.199A4.6 4.6 0 0 0 47 26.35Z",
                    fill: "#69ff52"
                }), l6.createElement("path", {
                    d: "M40.27 5.91 47 21.75M61.51 12.81 47 21.75M57.62 29.56l3.89-16.75M74.63 30.88l-17-1.32M61.64 42.14l13-11.26M74.63 53.2l-13-11.06M57.5 54.68l17.13-1.48M61.51 71.27l-4-16.59M46.78 62.39l14.73 8.87M40.27 78.17l6.51-15.78M33.57 62.33l6.7 15.84M19 71.27l14.53-8.94M22.92 54.52 19 71.26M5.91 53.2l17 1.32M18.9 41.93 5.91 53.2M5.91 30.88l13 11.05M23.05 29.39 5.91 30.88M19 12.81l4 16.58M33.77 21.69 19 12.81M40.27 5.91l-6.5 15.78",
                    stroke: "#69ff52",
                    strokeWidth: 2.63,
                    strokeMiterlimit: 10
                }))), eJ || (eJ = l6.createElement("defs", null, l6.createElement("clipPath", {
                    id: "hbarf_green_svg__a"
                }, l6.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h334.11v84.08H0z"
                })))))
            };

            function nS() {
                return (nS = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nD() {
                return (nD = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nI() {
                return (nI = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nA() {
                return (nA = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nP() {
                return (nP = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nO() {
                return (nO = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nC() {
                return (nC = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nG() {
                return (nG = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nB() {
                return (nB = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nL() {
                return (nL = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nT() {
                return (nT = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            var nF = function (e) {
                return l6.createElement("svg", nT({
                    id: "omniscia_logo_svg__Layer_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    x: 0,
                    y: 0,
                    viewBox: "0 0 2000 477",
                    style: {
                        enableBackground: "new 0 0 2000 477"
                    },
                    xmlSpace: "preserve"
                }, e), lk || (lk = l6.createElement("style", null, ".omniscia_logo_svg__st0{fill:none;stroke:#b8b8b8;stroke-width:2}.omniscia_logo_svg__st1{fill:#fff}.omniscia_logo_svg__st2{fill:#8d8d8d}.omniscia_logo_svg__st3{fill:#717171}")), lS || (lS = l6.createElement("path", {
                    vectorEffect: "non-scaling-stroke",
                    className: "omniscia_logo_svg__st0",
                    d: "M406.33 119.78c-14.21-4.7-27.4-7.51-39.58-8.42-12-.91-23.59-1.76-34.76-2.55-14.18-1.01-29.55-2.72-46.1-5.15-19.51-2.86-35.63-11.7-48.37-26.53-5.82-6.77-10.87-14.68-15.15-23.72-7.44-15.71-12.49-32.25-15.14-49.64M110.31 337.41c.03-.59-.33-1.21-1.06-1.85-.25-.22-.38-.5-.39-.83-.05-1.7-.81-2.99-1.27-4.55-1.57-5.31-3.43-10.75-4.63-16.06-2.01-8.88-3.24-17.28-3.7-25.2-.66-11.4-.69-20.5-.08-27.31 1.3-14.72 3.67-28.77 7.1-42.15 2.69-10.48 5.62-21.71 8.79-33.7 2.89-10.91 5.2-21.76 5.42-33.25.3-15.18-6.68-31.44-16.45-42.54-6.09-6.91-12.79-12.46-20.1-16.65C72.8 86.95 59.68 82.3 44.59 79.38M277.71 216.03a134.35 134.35 0 0 0-1.39 29.6c1.09 17.03 2.74 33.94 1.33 51.07-.59 7.11-1.72 13.67-3.38 19.68-4.77 17.26-13.96 32.06-27.56 44.4-7.69 6.99-15.65 12.77-23.87 17.36-8.72 4.87-18.43 9.97-29.13 15.31-5.79 2.89-13.97 7.74-24.55 14.55"
                })), lD || (lD = l6.createElement("path", {
                    className: "omniscia_logo_svg__st1",
                    d: "M2000 204.12v124.63c-.47 2.1-1.72 3.17-3.74 3.22-7.31.18-15.54.2-24.71.06-1.87-.03-3.29-.28-4.28-.77-1.75-.87-2.72-2.34-2.89-4.43-.31-3.54-.29-7.16.04-10.87.07-.81-.16-.91-.71-.31-16.82 18.43-41.19 23.76-65.41 18.28-22.79-5.15-37.65-21.37-40.34-45.25-1.12-9.93.01-19.67 3.4-29.21 8.73-24.59 32.54-34.11 56.66-37.55 15.49-2.21 30.56-4.33 45.2-6.36.64-.09.94-.45.89-1.1-.87-13.48-5.13-28.64-20.36-32.06-3.28-.73-6.94-1.07-10.98-1.01-16.43.24-31.15 5.15-44.15 14.74-2.05 1.51-4.03 2.88-5.92 4.11-4.04 2.62-8.63.55-8.62-4.33.01-8.79.01-17.17-.02-25.16-.01-2.87 1.53-4.99 3.9-6.4 21.25-12.66 46.96-17.83 71.11-14.84 17.07 2.11 31.88 9.31 41.37 23.79 5.73 8.74 8.91 19.01 9.56 30.82zm-38.6 43.03c-10.51 1.65-22.22 3.33-35.13 5.04-6.51.87-12.68 2.59-18.49 5.16-5.89 2.61-10.26 6.82-11.67 13.19-1.36 6.18-1.76 13.94 1.21 19.61 6.95 13.29 23.32 15.07 36.23 11.91 17.49-4.28 29.07-20.83 30.33-38.37.37-5.12.48-10.59.34-16.4-.01-.34-.18-.49-.52-.45-.74.09-1.51.19-2.3.31z"
                })), lI || (lI = l6.createElement("path", {
                    className: "omniscia_logo_svg__st2",
                    d: "M406.33 119.78c-14.21-4.7-27.4-7.51-39.58-8.42-12-.91-23.59-1.76-34.76-2.55-14.18-1.01-29.55-2.72-46.1-5.15-19.51-2.86-35.63-11.7-48.37-26.53-5.82-6.77-10.87-14.68-15.15-23.72-7.44-15.71-12.49-32.25-15.14-49.64 32.71-.84 65.38 1.23 98.02 6.2 30.7 4.67 60.99 12.58 90.36 24.69 7.98 3.3 8.79 7.1 9.5 15.08 2.02 22.85 2.43 46.2 1.22 70.04z"
                })), lA || (lA = l6.createElement("path", {
                    className: "omniscia_logo_svg__st3",
                    d: "M207.23 3.77c2.65 17.39 7.7 33.93 15.14 49.64 4.28 9.04 9.33 16.95 15.15 23.72 12.74 14.83 28.86 23.67 48.37 26.53 16.55 2.43 31.92 4.14 46.1 5.15 11.17.79 22.76 1.64 34.76 2.55 12.18.91 25.37 3.72 39.58 8.42-1.09 26.58-4.43 53.34-10.02 80.27-.87 4.18-3.15 7.14-6.85 8.88-1.95.92-4.06 1.08-6.33.47-62.54-16.73-123.42-32.96-182.65-48.69-5.91-1.57-8.37-5.74-8.6-11.75-1.73-44.41-3.66-88.63-5.79-132.66-.24-5.05 2.34-9.16 6.5-11.07 1.57-.72 3.98-1.13 7.24-1.24 2.4-.09 4.87-.16 7.4-.22zM110.31 337.41c.03-.59-.33-1.21-1.06-1.85-.25-.22-.38-.5-.39-.83-.05-1.7-.81-2.99-1.27-4.55-1.57-5.31-3.43-10.75-4.63-16.06-2.01-8.88-3.24-17.28-3.7-25.2-.66-11.4-.69-20.5-.08-27.31 1.3-14.72 3.67-28.77 7.1-42.15 2.69-10.48 5.62-21.71 8.79-33.7 2.89-10.91 5.2-21.76 5.42-33.25.3-15.18-6.68-31.44-16.45-42.54-6.09-6.91-12.79-12.46-20.1-16.65C72.8 86.95 59.68 82.3 44.59 79.38c2.57-1.22 4.45-2.05 5.63-2.5 28.87-11.11 58.97-19.51 90.28-25.19 7.55-1.37 14.22 4.43 14.53 11.81 3.19 76.4 6.36 151.33 9.49 224.78.28 6.48 1.02 9.8-2.09 14-.83 1.13-2.31 2.39-4.44 3.79-15.9 10.48-31.79 20.93-47.68 31.34z"
                })), lP || (lP = l6.createElement("circle", {
                    className: "omniscia_logo_svg__st1",
                    cx: 1383.42,
                    cy: 96.9,
                    r: 22.58
                })), lO || (lO = l6.createElement("circle", {
                    className: "omniscia_logo_svg__st1",
                    cx: 1797.11,
                    cy: 96.91,
                    r: 22.58
                })), l6.createElement("path", {
                    d: "M44.59 79.38c15.09 2.92 28.21 7.57 39.35 13.94 7.31 4.19 14.01 9.74 20.1 16.65 9.77 11.1 16.75 27.36 16.45 42.54-.22 11.49-2.53 22.34-5.42 33.25-3.17 11.99-6.1 23.22-8.79 33.7-3.43 13.38-5.8 27.43-7.1 42.15-.61 6.81-.58 15.91.08 27.31.46 7.92 1.69 16.32 3.7 25.2 1.2 5.31 3.06 10.75 4.63 16.06.46 1.56 1.22 2.85 1.27 4.55.01.33.14.61.39.83.73.64 1.09 1.26 1.06 1.85-6.89 4.41-13.71 8.88-20.47 13.42-3.79 2.54-6.45 3.98-8 4.33-3.44.77-6.74 0-9.91-2.32-2.5-1.83-3.77-4.7-5.36-7.37-8.59-14.42-16.62-29.92-24.09-46.49-19.01-42.17-31.52-85.94-37.54-131.29-.87-6.59-1.52-13.22-1.94-19.9-.95-15.1-1.14-29.65-.59-43.66.16-4 4.12-7.21 7.51-8.97 12.03-6.27 23.58-11.53 34.67-15.78z",
                    style: {
                        fill: "#8f8f8f"
                    }
                }), lC || (lC = l6.createElement("path", {
                    className: "omniscia_logo_svg__st1",
                    d: "M809.51 236.77c-3.13 18.77-9.75 37.15-20.6 52.66-15.37 21.96-37.4 37.02-63.31 42.96-21.65 4.96-43.04 4.82-64.17-.43-26.28-6.52-48.35-22.79-63.05-45.69-13.73-21.4-19.78-46.31-20.18-72.08-.61-40.27 11.09-81.7 42.65-107.8 25.08-20.73 58.6-28.17 90.98-24.86 21.3 2.18 41.53 9.75 57.74 23.32 38.8 32.49 47.87 84.24 39.94 131.92zm-37.57-7.58c4.68-39.84-2.21-90.54-44.98-108.02-12.65-5.17-27.76-6.18-41.47-4.73-15.91 1.68-29.58 8.07-41.01 19.16-11.99 11.63-19.88 25.31-23.67 41.04-4.72 19.6-5.09 39.48-1.12 59.63 6.09 30.84 28.09 58.7 60.17 63.73 12.16 1.91 24.27 1.49 36.33-1.26 20-4.56 36.36-18.03 45.88-36.21 5.11-9.77 8.4-20.89 9.87-33.34zM895.9 169.66c12.26-13.48 27.8-20.46 46.63-20.93 21.34-.53 40.25 10.03 50.21 29.03.15.29.32.29.5.02 4.71-7.25 10.55-13.26 17.52-18.03 18.01-12.31 42.15-14.02 62.14-6.86 28.41 10.16 36.02 41.29 36.08 68.17.07 35.77.07 70.99-.01 105.68-.01 2.21-.85 3.74-2.52 4.61-.9.47-1.91.7-3.03.7-9.11-.03-17.79-.04-26.05-.03-4.76 0-5.34-4-5.33-7.64.05-27.34.07-54.84.08-82.51 0-12.65.36-25.45-2.67-37.99-2.56-10.57-8.52-18.98-19.23-21.35-4.27-.94-8.85-1.28-13.75-1.01-6.69.37-12.67 3.14-17.94 8.31-9.97 9.78-15.25 21.61-15.84 35.49-.33 7.67-.45 16.64-.36 26.91.2 24.12.22 48.72.06 73.81-.02 3.93-2.87 6.08-6.59 6.04-7.89-.09-15.69-.09-23.4.01-3.81.05-6.9-1.96-6.9-6.07 0-33.03-.01-66.65-.02-100.84-.01-17.96-4.47-39.8-25.83-43.18-9.72-1.53-19.46-.5-27.2 6.08-13 11.06-16.69 26.8-16.67 43.71.02 28.62.01 60.3-.02 95.04 0 2.13-.73 3.62-2.18 4.45-.89.51-1.99.77-3.29.77-8.92-.04-17.61-.04-26.06-.01-1.55 0-2.86-.52-3.93-1.55-.83-.8-1.25-2.38-1.26-4.74-.34-50.55-.38-106.01-.13-166.38.01-4.44 2.35-6.65 7.02-6.64 7.27.03 14.47-.01 21.59-.1 4.73-.06 8.28 1.3 8.39 6.58.1 4.48-.04 7.89-.43 10.24-.09.55.05.62.42.21zM1198.2 171.11c11.77-13.31 26.98-20.72 45.61-22.21 9.36-.75 18.42.27 27.17 3.06 24.9 7.93 36.47 30.17 39.41 54.99.71 6 1.06 12.81 1.05 20.42-.04 33.38-.06 66.25-.07 98.61 0 4.1-2.6 6.12-6.4 6.08-8.09-.08-15.9-.08-23.44.01-3.9.05-7-1.91-7.01-6.12-.05-29.79-.05-61.93-.01-96.44.01-11.8-1.43-24.99-7.87-35.16-5.89-9.29-15.48-13.59-28.78-12.9-4.69.25-8.85 1.07-12.46 2.46-14.58 5.62-24.37 20.9-26.48 35.78-.63 4.45-.94 9.31-.93 14.56.04 30.1.05 61.02.02 92.75-.01 2.03-.73 3.46-2.18 4.29-.79.46-1.66.69-2.59.7-8.72.06-17.7.06-26.95 0a5.249 5.249 0 0 1-2.84-.86c-1.53-.99-2.29-2.61-2.3-4.88-.11-53.02-.11-108.69.02-167 .02-5.24 3.3-6.55 7.92-6.56 8.33-.03 15.79-.01 22.39.06 3.85.04 5.99 1.72 6.42 5.03.39 3.03.35 7.41-.1 13.15-.04.47.09.53.4.18zM1458.04 290.69c16.69 11.47 37.08 14.95 57.05 11.18 7.48-1.4 14.61-6.5 15.38-14.55.27-2.74.14-5.35-.37-7.83-1.44-6.94-11.07-13.27-17.34-15.87-13.61-5.65-28.32-10.88-41.33-18.41-14.05-8.13-22.15-19.54-24.28-34.23-4.55-31.32 16.93-52.16 45.42-59.25 21.41-5.33 43-3.7 64.75 4.9 2.23.88 3.16 3.55 3.17 5.79.03 8.21.03 16.52 0 24.93-.02 5.21-4.99 7.03-9.13 4.49-14.25-8.73-30.24-11.97-47.96-9.72-5.24.66-10.07 2.99-14.49 6.98-6.99 6.3-6.27 18.28.48 24.43 4.13 3.76 9.07 6.4 14.15 8.41 7.69 3.04 15.71 6.33 24.08 9.86 7.46 3.15 14.14 6.73 20.04 10.76 12.81 8.74 20 21.55 20.47 37.15.83 28.03-18.14 46.02-43.92 52.63-23.29 5.97-46.15 4.66-68.58-3.91-2.13-.81-4.44-1.99-6.93-3.54-1.74-1.08-2.41-3.03-2.42-4.96-.05-8.49-.06-17.26-.04-26.31.01-3.15 1.5-5.28 4.47-6.39.39-.14.82-.13 1.2.03 2.05.89 4.1 2.03 6.13 3.43zM1729.35 192.15c-14.36-9.35-30.07-12.75-47.44-9.59-5.45.99-10.88 3.19-15.54 6.25-14.17 9.31-23.14 24.02-25.46 40.64-1.48 10.62-1.39 20.8.26 30.55 3.5 20.69 17.57 38.27 38.51 42.13 18.16 3.35 34.59-.32 49.3-11.02 1.41-1.02 3.07-1.83 4.99-2.44.34-.11.71-.09 1.04.06 2.64 1.21 3.97 3.33 3.98 6.34.03 7.34.03 14.94 0 22.8-.01 2.77-1.11 4.8-3.32 6.07-12.19 7.07-26.23 11.02-42.13 11.87-21.61 1.15-43.07-4.13-59.88-17.72-15.83-12.8-26.24-31.62-29.64-51.86-3.11-18.56-2.09-36.69 3.06-54.39 8.28-28.43 29.58-51.05 58.39-59.07 22.79-6.35 49.1-5.77 70.52 4.55 2.63 1.27 3.35 4.04 3.36 6.71.05 8.12.05 15.96 0 23.53-.02 3.19-2.15 7.08-5.82 6.61-.89-.12-2.29-.79-4.18-2.02zM1370.02 152.76h25.92c3.05 0 5.52 2.47 5.52 5.52v168.26c0 3.05-2.47 5.52-5.52 5.52h-25.92c-3.05 0-5.52-2.47-5.52-5.52V158.28c0-3.05 2.47-5.52 5.52-5.52zM1783.68 152.77h25.96c3.03 0 5.48 2.45 5.48 5.48v168.32c0 3.03-2.45 5.48-5.48 5.48h-25.96c-3.03 0-5.48-2.45-5.48-5.48V158.25c0-3.03 2.45-5.48 5.48-5.48z"
                })), lG || (lG = l6.createElement("path", {
                    className: "omniscia_logo_svg__st3",
                    d: "M277.71 216.03a134.35 134.35 0 0 0-1.39 29.6c1.09 17.03 2.74 33.94 1.33 51.07-.59 7.11-1.72 13.67-3.38 19.68-4.77 17.26-13.96 32.06-27.56 44.4-7.69 6.99-15.65 12.77-23.87 17.36-8.72 4.87-18.43 9.97-29.13 15.31-5.79 2.89-13.97 7.74-24.55 14.55-10.8-10.53-20.99-21.34-30.58-32.45-2.3-2.67-3.65-4.69-4.04-6.08-1.37-4.85 1.59-8.87 5.56-11.43 18.47-11.89 36.63-23.72 54.47-35.48 3.27-2.16 5-6.13 4.82-9.95-1.57-34.47-3.11-68.36-4.61-101.69-.2-4.32-.62-6.86 2.55-10.78 3.08-3.8 6.82-3.42 11.6-2.18 22.76 5.93 45.69 11.96 68.78 18.07z"
                })), lB || (lB = l6.createElement("path", {
                    className: "omniscia_logo_svg__st2",
                    d: "M277.71 216.03c45.24 11.89 90.67 23.85 136.3 35.88 1.69.45 3.54 1.59 5.57 3.42 1.05.96 1.61 2.06 1.67 3.3.18 4.11.05 7.14-1.56 11.08-2.22 5.42-4.5 11.08-6.84 16.98-5.43 13.69-12.13 28.1-20.1 43.22-20.77 39.35-46.85 74.73-79.21 105.01-14.47 13.55-31.37 26.31-50.68 38.28-1.77 1.1-3.57 1.68-5.4 1.74-2.29.08-4.73-.66-7.34-2.23-19.78-11.88-39.49-26.61-59.14-44.2-9.74-8.73-17.01-15.56-21.82-20.51 10.58-6.81 18.76-11.66 24.55-14.55 10.7-5.34 20.41-10.44 29.13-15.31 8.22-4.59 16.18-10.37 23.87-17.36 13.6-12.34 22.79-27.14 27.56-44.4 1.66-6.01 2.79-12.57 3.38-19.68 1.41-17.13-.24-34.04-1.33-51.07-.63-9.84-.17-19.71 1.39-29.6z"
                })))
            };

            function nW() {
                return (nW = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            var nU = function (e) {
                return l6.createElement("svg", nW({
                    id: "omniscia_logo_green_svg__Layer_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    x: 0,
                    y: 0,
                    viewBox: "0 0 2000 477",
                    style: {
                        enableBackground: "new 0 0 2000 477"
                    },
                    xmlSpace: "preserve"
                }, e), lL || (lL = l6.createElement("style", null, ".omniscia_logo_green_svg__st0{fill:none;stroke:#b8b8b8;stroke-width:2}.omniscia_logo_green_svg__st1,.omniscia_logo_green_svg__st2{fill:#69ff52}.omniscia_logo_green_svg__st3{fill:#4c9541}")), lT || (lT = l6.createElement("path", {
                    vectorEffect: "non-scaling-stroke",
                    className: "omniscia_logo_green_svg__st0",
                    d: "M406.33 119.78c-14.21-4.7-27.4-7.51-39.58-8.42-12-.91-23.59-1.76-34.76-2.55-14.18-1.01-29.55-2.72-46.1-5.15-19.51-2.86-35.63-11.7-48.37-26.53-5.82-6.77-10.87-14.68-15.15-23.72-7.44-15.71-12.49-32.25-15.14-49.64M110.31 337.41c.03-.59-.33-1.21-1.06-1.85-.25-.22-.38-.5-.39-.83-.05-1.7-.81-2.99-1.27-4.55-1.57-5.31-3.43-10.75-4.63-16.06-2.01-8.88-3.24-17.28-3.7-25.2-.66-11.4-.69-20.5-.08-27.31 1.3-14.72 3.67-28.77 7.1-42.15 2.69-10.48 5.62-21.71 8.79-33.7 2.89-10.91 5.2-21.76 5.42-33.25.3-15.18-6.68-31.44-16.45-42.54-6.09-6.91-12.79-12.46-20.1-16.65C72.8 86.95 59.68 82.3 44.59 79.38M277.71 216.03a134.35 134.35 0 0 0-1.39 29.6c1.09 17.03 2.74 33.94 1.33 51.07-.59 7.11-1.72 13.67-3.38 19.68-4.77 17.26-13.96 32.06-27.56 44.4-7.69 6.99-15.65 12.77-23.87 17.36-8.72 4.87-18.43 9.97-29.13 15.31-5.79 2.89-13.97 7.74-24.55 14.55"
                })), lF || (lF = l6.createElement("path", {
                    className: "omniscia_logo_green_svg__st1",
                    d: "M2000 204.12v124.63c-.47 2.1-1.72 3.17-3.74 3.22-7.31.18-15.54.2-24.71.06-1.87-.03-3.29-.28-4.28-.77-1.75-.87-2.72-2.34-2.89-4.43-.31-3.54-.29-7.16.04-10.87.07-.81-.16-.91-.71-.31-16.82 18.43-41.19 23.76-65.41 18.28-22.79-5.15-37.65-21.37-40.34-45.25-1.12-9.93.01-19.67 3.4-29.21 8.73-24.59 32.54-34.11 56.66-37.55 15.49-2.21 30.56-4.33 45.2-6.36.64-.09.94-.45.89-1.1-.87-13.48-5.13-28.64-20.36-32.06-3.28-.73-6.94-1.07-10.98-1.01-16.43.24-31.15 5.15-44.15 14.74-2.05 1.51-4.03 2.88-5.92 4.11-4.04 2.62-8.63.55-8.62-4.33.01-8.79.01-17.17-.02-25.16-.01-2.87 1.53-4.99 3.9-6.4 21.25-12.66 46.96-17.83 71.11-14.84 17.07 2.11 31.88 9.31 41.37 23.79 5.73 8.74 8.91 19.01 9.56 30.82zm-38.6 43.03c-10.51 1.65-22.22 3.33-35.13 5.04-6.51.87-12.68 2.59-18.49 5.16-5.89 2.61-10.26 6.82-11.67 13.19-1.36 6.18-1.76 13.94 1.21 19.61 6.95 13.29 23.32 15.07 36.23 11.91 17.49-4.28 29.07-20.83 30.33-38.37.37-5.12.48-10.59.34-16.4-.01-.34-.18-.49-.52-.45-.74.09-1.51.19-2.3.31z"
                })), lW || (lW = l6.createElement("path", {
                    className: "omniscia_logo_green_svg__st2",
                    d: "M406.33 119.78c-14.21-4.7-27.4-7.51-39.58-8.42-12-.91-23.59-1.76-34.76-2.55-14.18-1.01-29.55-2.72-46.1-5.15-19.51-2.86-35.63-11.7-48.37-26.53-5.82-6.77-10.87-14.68-15.15-23.72-7.44-15.71-12.49-32.25-15.14-49.64 32.71-.84 65.38 1.23 98.02 6.2 30.7 4.67 60.99 12.58 90.36 24.69 7.98 3.3 8.79 7.1 9.5 15.08 2.02 22.85 2.43 46.2 1.22 70.04z"
                })), lU || (lU = l6.createElement("path", {
                    className: "omniscia_logo_green_svg__st3",
                    d: "M207.23 3.77c2.65 17.39 7.7 33.93 15.14 49.64 4.28 9.04 9.33 16.95 15.15 23.72 12.74 14.83 28.86 23.67 48.37 26.53 16.55 2.43 31.92 4.14 46.1 5.15 11.17.79 22.76 1.64 34.76 2.55 12.18.91 25.37 3.72 39.58 8.42-1.09 26.58-4.43 53.34-10.02 80.27-.87 4.18-3.15 7.14-6.85 8.88-1.95.92-4.06 1.08-6.33.47-62.54-16.73-123.42-32.96-182.65-48.69-5.91-1.57-8.37-5.74-8.6-11.75-1.73-44.41-3.66-88.63-5.79-132.66-.24-5.05 2.34-9.16 6.5-11.07 1.57-.72 3.98-1.13 7.24-1.24 2.4-.09 4.87-.16 7.4-.22zM110.31 337.41c.03-.59-.33-1.21-1.06-1.85-.25-.22-.38-.5-.39-.83-.05-1.7-.81-2.99-1.27-4.55-1.57-5.31-3.43-10.75-4.63-16.06-2.01-8.88-3.24-17.28-3.7-25.2-.66-11.4-.69-20.5-.08-27.31 1.3-14.72 3.67-28.77 7.1-42.15 2.69-10.48 5.62-21.71 8.79-33.7 2.89-10.91 5.2-21.76 5.42-33.25.3-15.18-6.68-31.44-16.45-42.54-6.09-6.91-12.79-12.46-20.1-16.65C72.8 86.95 59.68 82.3 44.59 79.38c2.57-1.22 4.45-2.05 5.63-2.5 28.87-11.11 58.97-19.51 90.28-25.19 7.55-1.37 14.22 4.43 14.53 11.81 3.19 76.4 6.36 151.33 9.49 224.78.28 6.48 1.02 9.8-2.09 14-.83 1.13-2.31 2.39-4.44 3.79-15.9 10.48-31.79 20.93-47.68 31.34z"
                })), lQ || (lQ = l6.createElement("circle", {
                    className: "omniscia_logo_green_svg__st1",
                    cx: 1383.42,
                    cy: 96.9,
                    r: 22.58
                })), lq || (lq = l6.createElement("circle", {
                    className: "omniscia_logo_green_svg__st1",
                    cx: 1797.11,
                    cy: 96.91,
                    r: 22.58
                })), l6.createElement("path", {
                    d: "M44.59 79.38c15.09 2.92 28.21 7.57 39.35 13.94 7.31 4.19 14.01 9.74 20.1 16.65 9.77 11.1 16.75 27.36 16.45 42.54-.22 11.49-2.53 22.34-5.42 33.25-3.17 11.99-6.1 23.22-8.79 33.7-3.43 13.38-5.8 27.43-7.1 42.15-.61 6.81-.58 15.91.08 27.31.46 7.92 1.69 16.32 3.7 25.2 1.2 5.31 3.06 10.75 4.63 16.06.46 1.56 1.22 2.85 1.27 4.55.01.33.14.61.39.83.73.64 1.09 1.26 1.06 1.85-6.89 4.41-13.71 8.88-20.47 13.42-3.79 2.54-6.45 3.98-8 4.33-3.44.77-6.74 0-9.91-2.32-2.5-1.83-3.77-4.7-5.36-7.37-8.59-14.42-16.62-29.92-24.09-46.49-19.01-42.17-31.52-85.94-37.54-131.29-.87-6.59-1.52-13.22-1.94-19.9-.95-15.1-1.14-29.65-.59-43.66.16-4 4.12-7.21 7.51-8.97 12.03-6.27 23.58-11.53 34.67-15.78z",
                    style: {
                        fill: "#69ff52"
                    }
                }), lR || (lR = l6.createElement("path", {
                    className: "omniscia_logo_green_svg__st1",
                    d: "M809.51 236.77c-3.13 18.77-9.75 37.15-20.6 52.66-15.37 21.96-37.4 37.02-63.31 42.96-21.65 4.96-43.04 4.82-64.17-.43-26.28-6.52-48.35-22.79-63.05-45.69-13.73-21.4-19.78-46.31-20.18-72.08-.61-40.27 11.09-81.7 42.65-107.8 25.08-20.73 58.6-28.17 90.98-24.86 21.3 2.18 41.53 9.75 57.74 23.32 38.8 32.49 47.87 84.24 39.94 131.92zm-37.57-7.58c4.68-39.84-2.21-90.54-44.98-108.02-12.65-5.17-27.76-6.18-41.47-4.73-15.91 1.68-29.58 8.07-41.01 19.16-11.99 11.63-19.88 25.31-23.67 41.04-4.72 19.6-5.09 39.48-1.12 59.63 6.09 30.84 28.09 58.7 60.17 63.73 12.16 1.91 24.27 1.49 36.33-1.26 20-4.56 36.36-18.03 45.88-36.21 5.11-9.77 8.4-20.89 9.87-33.34zM895.9 169.66c12.26-13.48 27.8-20.46 46.63-20.93 21.34-.53 40.25 10.03 50.21 29.03.15.29.32.29.5.02 4.71-7.25 10.55-13.26 17.52-18.03 18.01-12.31 42.15-14.02 62.14-6.86 28.41 10.16 36.02 41.29 36.08 68.17.07 35.77.07 70.99-.01 105.68-.01 2.21-.85 3.74-2.52 4.61-.9.47-1.91.7-3.03.7-9.11-.03-17.79-.04-26.05-.03-4.76 0-5.34-4-5.33-7.64.05-27.34.07-54.84.08-82.51 0-12.65.36-25.45-2.67-37.99-2.56-10.57-8.52-18.98-19.23-21.35-4.27-.94-8.85-1.28-13.75-1.01-6.69.37-12.67 3.14-17.94 8.31-9.97 9.78-15.25 21.61-15.84 35.49-.33 7.67-.45 16.64-.36 26.91.2 24.12.22 48.72.06 73.81-.02 3.93-2.87 6.08-6.59 6.04-7.89-.09-15.69-.09-23.4.01-3.81.05-6.9-1.96-6.9-6.07 0-33.03-.01-66.65-.02-100.84-.01-17.96-4.47-39.8-25.83-43.18-9.72-1.53-19.46-.5-27.2 6.08-13 11.06-16.69 26.8-16.67 43.71.02 28.62.01 60.3-.02 95.04 0 2.13-.73 3.62-2.18 4.45-.89.51-1.99.77-3.29.77-8.92-.04-17.61-.04-26.06-.01-1.55 0-2.86-.52-3.93-1.55-.83-.8-1.25-2.38-1.26-4.74-.34-50.55-.38-106.01-.13-166.38.01-4.44 2.35-6.65 7.02-6.64 7.27.03 14.47-.01 21.59-.1 4.73-.06 8.28 1.3 8.39 6.58.1 4.48-.04 7.89-.43 10.24-.09.55.05.62.42.21zM1198.2 171.11c11.77-13.31 26.98-20.72 45.61-22.21 9.36-.75 18.42.27 27.17 3.06 24.9 7.93 36.47 30.17 39.41 54.99.71 6 1.06 12.81 1.05 20.42-.04 33.38-.06 66.25-.07 98.61 0 4.1-2.6 6.12-6.4 6.08-8.09-.08-15.9-.08-23.44.01-3.9.05-7-1.91-7.01-6.12-.05-29.79-.05-61.93-.01-96.44.01-11.8-1.43-24.99-7.87-35.16-5.89-9.29-15.48-13.59-28.78-12.9-4.69.25-8.85 1.07-12.46 2.46-14.58 5.62-24.37 20.9-26.48 35.78-.63 4.45-.94 9.31-.93 14.56.04 30.1.05 61.02.02 92.75-.01 2.03-.73 3.46-2.18 4.29-.79.46-1.66.69-2.59.7-8.72.06-17.7.06-26.95 0a5.249 5.249 0 0 1-2.84-.86c-1.53-.99-2.29-2.61-2.3-4.88-.11-53.02-.11-108.69.02-167 .02-5.24 3.3-6.55 7.92-6.56 8.33-.03 15.79-.01 22.39.06 3.85.04 5.99 1.72 6.42 5.03.39 3.03.35 7.41-.1 13.15-.04.47.09.53.4.18zM1458.04 290.69c16.69 11.47 37.08 14.95 57.05 11.18 7.48-1.4 14.61-6.5 15.38-14.55.27-2.74.14-5.35-.37-7.83-1.44-6.94-11.07-13.27-17.34-15.87-13.61-5.65-28.32-10.88-41.33-18.41-14.05-8.13-22.15-19.54-24.28-34.23-4.55-31.32 16.93-52.16 45.42-59.25 21.41-5.33 43-3.7 64.75 4.9 2.23.88 3.16 3.55 3.17 5.79.03 8.21.03 16.52 0 24.93-.02 5.21-4.99 7.03-9.13 4.49-14.25-8.73-30.24-11.97-47.96-9.72-5.24.66-10.07 2.99-14.49 6.98-6.99 6.3-6.27 18.28.48 24.43 4.13 3.76 9.07 6.4 14.15 8.41 7.69 3.04 15.71 6.33 24.08 9.86 7.46 3.15 14.14 6.73 20.04 10.76 12.81 8.74 20 21.55 20.47 37.15.83 28.03-18.14 46.02-43.92 52.63-23.29 5.97-46.15 4.66-68.58-3.91-2.13-.81-4.44-1.99-6.93-3.54-1.74-1.08-2.41-3.03-2.42-4.96-.05-8.49-.06-17.26-.04-26.31.01-3.15 1.5-5.28 4.47-6.39.39-.14.82-.13 1.2.03 2.05.89 4.1 2.03 6.13 3.43zM1729.35 192.15c-14.36-9.35-30.07-12.75-47.44-9.59-5.45.99-10.88 3.19-15.54 6.25-14.17 9.31-23.14 24.02-25.46 40.64-1.48 10.62-1.39 20.8.26 30.55 3.5 20.69 17.57 38.27 38.51 42.13 18.16 3.35 34.59-.32 49.3-11.02 1.41-1.02 3.07-1.83 4.99-2.44.34-.11.71-.09 1.04.06 2.64 1.21 3.97 3.33 3.98 6.34.03 7.34.03 14.94 0 22.8-.01 2.77-1.11 4.8-3.32 6.07-12.19 7.07-26.23 11.02-42.13 11.87-21.61 1.15-43.07-4.13-59.88-17.72-15.83-12.8-26.24-31.62-29.64-51.86-3.11-18.56-2.09-36.69 3.06-54.39 8.28-28.43 29.58-51.05 58.39-59.07 22.79-6.35 49.1-5.77 70.52 4.55 2.63 1.27 3.35 4.04 3.36 6.71.05 8.12.05 15.96 0 23.53-.02 3.19-2.15 7.08-5.82 6.61-.89-.12-2.29-.79-4.18-2.02zM1370.02 152.76h25.92c3.05 0 5.52 2.47 5.52 5.52v168.26c0 3.05-2.47 5.52-5.52 5.52h-25.92c-3.05 0-5.52-2.47-5.52-5.52V158.28c0-3.05 2.47-5.52 5.52-5.52zM1783.68 152.77h25.96c3.03 0 5.48 2.45 5.48 5.48v168.32c0 3.03-2.45 5.48-5.48 5.48h-25.96c-3.03 0-5.48-2.45-5.48-5.48V158.25c0-3.03 2.45-5.48 5.48-5.48z"
                })), lY || (lY = l6.createElement("path", {
                    className: "omniscia_logo_green_svg__st3",
                    d: "M277.71 216.03a134.35 134.35 0 0 0-1.39 29.6c1.09 17.03 2.74 33.94 1.33 51.07-.59 7.11-1.72 13.67-3.38 19.68-4.77 17.26-13.96 32.06-27.56 44.4-7.69 6.99-15.65 12.77-23.87 17.36-8.72 4.87-18.43 9.97-29.13 15.31-5.79 2.89-13.97 7.74-24.55 14.55-10.8-10.53-20.99-21.34-30.58-32.45-2.3-2.67-3.65-4.69-4.04-6.08-1.37-4.85 1.59-8.87 5.56-11.43 18.47-11.89 36.63-23.72 54.47-35.48 3.27-2.16 5-6.13 4.82-9.95-1.57-34.47-3.11-68.36-4.61-101.69-.2-4.32-.62-6.86 2.55-10.78 3.08-3.8 6.82-3.42 11.6-2.18 22.76 5.93 45.69 11.96 68.78 18.07z"
                })), lX || (lX = l6.createElement("path", {
                    className: "omniscia_logo_green_svg__st2",
                    d: "M277.71 216.03c45.24 11.89 90.67 23.85 136.3 35.88 1.69.45 3.54 1.59 5.57 3.42 1.05.96 1.61 2.06 1.67 3.3.18 4.11.05 7.14-1.56 11.08-2.22 5.42-4.5 11.08-6.84 16.98-5.43 13.69-12.13 28.1-20.1 43.22-20.77 39.35-46.85 74.73-79.21 105.01-14.47 13.55-31.37 26.31-50.68 38.28-1.77 1.1-3.57 1.68-5.4 1.74-2.29.08-4.73-.66-7.34-2.23-19.78-11.88-39.49-26.61-59.14-44.2-9.74-8.73-17.01-15.56-21.82-20.51 10.58-6.81 18.76-11.66 24.55-14.55 10.7-5.34 20.41-10.44 29.13-15.31 8.22-4.59 16.18-10.37 23.87-17.36 13.6-12.34 22.79-27.14 27.56-44.4 1.66-6.01 2.79-12.57 3.38-19.68 1.41-17.13-.24-34.04-1.33-51.07-.63-9.84-.17-19.71 1.39-29.6z"
                })))
            };

            function nQ() {
                return (nQ = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nq() {
                return (nq = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nR() {
                return (nR = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function nY() {
                return (nY = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            cq().extend(nn());
            let nX = "20px",
                nK = ["Hedera DeFi", "Real Yields", "Concentrated Liquidity", "Efficient Markets", "Low, Fixed Fees", "Self-Custody", "Fair Order Flow", "Greener Pastures"],
                nJ = () => {
                    let {
                        isSmall: e
                    } = (0, cz.l)(), t = (0, l7.Z)();
                    return (0, l0.jsxs)(l0.Fragment, {
                        children: [(0, l0.jsxs)(l9.Z, {
                            direction: "row",
                            mt: e ? 22 : 2.25,
                            ml: "max(".concat(e ? nX : "".concat(11.45, "%"), ", calc((100vw - 1110px) / 2))"),
                            minHeight: e ? void 0 : "60vh",
                            alignItems: "center",
                            children: [(0, l0.jsxs)(l9.Z, {
                                width: "550px",
                                minWidth: e ? void 0 : "490px",
                                alignItems: "start",
                                justifyContent: "center",
                                spacing: 5,
                                zIndex: 1,
                                children: [(0, l0.jsx)(l8.Z, {
                                    display: "flex",
                                    children: (0, l0.jsxs)(cd.Z, {
                                        fontWeight: 900,
                                        fontSize: {
                                            xs: "18px",
                                            sm: "28px"
                                        },
                                        children: ["Saucer", (0, l0.jsx)(cd.Z, {
                                            color: "primary",
                                            component: "span",
                                            fontWeight: "inherit",
                                            fontSize: "inherit",
                                            children: "Swap"
                                        })]
                                    })
                                }), (0, l0.jsxs)(l8.Z, {
                                    position: "relative",
                                    children: [(0, l0.jsx)(cd.Z, {
                                        fontSize: {
                                            xs: "24px",
                                            sm: "40px"
                                        },
                                        fontWeight: "800",
                                        children: "Your Gateway To:"
                                    }), (0, l0.jsxs)(cd.Z, {
                                        fontSize: {
                                            xs: "24px",
                                            sm: "40px"
                                        },
                                        fontWeight: "800",
                                        children: [nK.map((e, a, s) => (0, l0.jsx)(cd.Z, {
                                            color: t.palette.custom.green,
                                            component: "span",
                                            fontSize: {
                                                xs: "24px",
                                                sm: "40px"
                                            },
                                            fontWeight: "800",
                                            noWrap: !0,
                                            sx: {
                                                overflow: "hidden",
                                                position: "absolute",
                                                opacity: 0,
                                                animation: "topToBottom ".concat(3 * s.length, "s linear infinite"),
                                                WebkitAnimation: "topToBottom ".concat(3 * s.length, "s linear infinite"),
                                                animationDelay: "".concat(3 * a, "s"),
                                                WebkitAnimationDelay: "".concat(3 * a, "s")
                                            },
                                            children: e
                                        }, e)), "\xa0"]
                                    })]
                                }), (0, l0.jsx)(l8.Z, {
                                    children: (0, l0.jsx)(cd.Z, {
                                        fontSize: "20px",
                                        children: "An open source and non-custodial crypto trading protocol on the Hedera network"
                                    })
                                }), (0, l0.jsxs)(l8.Z, {
                                    border: "1px solid ".concat("light" === t.palette.mode ? t.palette.custom.green : t.palette.custom.grey),
                                    borderRadius: "4px",
                                    pt: "16px",
                                    py: "6px",
                                    pl: "12px",
                                    pr: "6px",
                                    display: "flex",
                                    children: [(0, l0.jsx)(l8.Z, {
                                        children: (0, l0.jsx)(nr.Z, {
                                            color: "light" === t.palette.mode ? t.palette.custom.green : void 0
                                        })
                                    }), (0, l0.jsx)(l8.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        children: (0, l0.jsx)(nl.Z, {
                                            href: "/swap",
                                            sx: {
                                                ..."light" === t.palette.mode ? {
                                                    background: t.palette.custom.green,
                                                    color: "white"
                                                } : {
                                                    background: "linear-gradient(88.04deg, #6AFF52 49.01%, #ADFF55 99.9%)",
                                                    color: "#0E0E0E"
                                                },
                                                borderRadius: "4px",
                                                fontWeight: 600,
                                                ml: 2,
                                                width: {
                                                    md: "165px"
                                                },
                                                px: {
                                                    xs: 2,
                                                    sm: 14
                                                },
                                                py: 2,
                                                lineHeight: 1
                                            },
                                            variant: "contained",
                                            children: "GET STARTED"
                                        })
                                    })]
                                })]
                            }), !e && (0, l0.jsx)(l8.Z, {
                                overflow: "hidden",
                                ml: "-180px",
                                children: (0, l0.jsx)(l8.Z, {
                                    width: "1050px",
                                    children: (0, l0.jsx)(c$, {})
                                })
                            })]
                        }), e && (0, l0.jsx)(l8.Z, {
                            children: (0, l0.jsx)(c$, {})
                        })]
                    })
                },
                n$ = () => {
                    let {
                        settings: e
                    } = (0, nt.r)(), {
                        data: t
                    } = (0, c3.ZP)(), {
                        data: a = c9.k3
                    } = (0, c9.ZP)(c9.k3.address), {
                        data: s = c9.Pg
                    } = (0, c9.ZP)(c9.Pg.address), {
                        data: r
                    } = ne(), {
                        data: l
                    } = (0, c4.Z)(), c = (0, l7.Z)(), n = (0, c5._s)(), h = c6.ih.fromRawAmount(a, s.price), i = (0, l6.useCallback)(e => (e / 100).toFixed(2) + "%", []), {
                        update: _
                    } = (0, cX.$i)({
                        ref: "stat-tvl",
                        prefix: c2.t$[e.currency].symbol,
                        end: 0,
                        separator: ","
                    }), {
                        update: o
                    } = (0, cX.$i)({
                        ref: "stat-volume",
                        prefix: c2.t$[e.currency].symbol,
                        end: 0,
                        separator: ","
                    }), {
                        update: d
                    } = (0, cX.$i)({
                        ref: "stat-swaps",
                        end: 0,
                        separator: ","
                    }), {
                        update: m
                    } = (0, cX.$i)({
                        ref: "stat-mcap",
                        prefix: c2.t$[e.currency].symbol,
                        end: 0,
                        separator: ","
                    }), {
                        update: v
                    } = (0, cX.$i)({
                        ref: "stat-sauce",
                        end: 0,
                        separator: ","
                    }), {
                        update: g
                    } = (0, cX.$i)({
                        ref: "stat-staked-sauce",
                        formattingFn: i,
                        end: 0
                    });
                    (0, l6.useEffect)(() => {
                        if (r && l) {
                            if (_(n), v(r.circulatingSauce.toFixed(0)), o(r.volumeTotalUsd.toFixed(0)), d(r.swapTotal), h) {
                                let e = (0, ns.Wi)(r.circulatingSauce);
                                m((0, c2.iS)(e, t).toExact())
                            }
                            g(new c6.gG(0, 100).add(r.circulatingSauce.greaterThan(0) ? l.sauce.divide(r.circulatingSauce) : na.xE).multiply(100).toFixed())
                        }
                    }, [r, l, t, h, v, d, _, o, m, g, n]);
                    let p = (0, cF.Z)(e => e.breakpoints.down("md")),
                        f = (0, cF.Z)(e => e.breakpoints.down(1e3)),
                        u = (0, cF.Z)(e => e.breakpoints.down(570));
                    return (0, l0.jsx)(l8.Z, {
                        mt: 12,
                        display: "flex",
                        alignItems: "center",
                        mx: "max(".concat(p ? nX : "".concat(11.45 / 1.4, "%"), ", calc((100vw - 1200px) / 2))"),
                        sx: {
                            border: "0.5px solid transparent",
                            borderRadius: "12px",
                            boxSizing: "border-box",
                            background: p ? "linear-gradient(180deg, rgb(0 15 27 / 60%), rgb(1, 9, 15) 60%) padding-box,linear-gradient(180deg, rgb(255 255 255 / 7%), rgba(255, 255, 255, 0.15)) border-box" : "light" === c.palette.mode ? "linear-gradient(142.56deg, rgba(255, 255, 255, 0.54) 45.35%, rgba(255, 255, 255, 0.24) 129.54%)" : "linear-gradient(190deg, rgba(15, 34, 49, 1), rgba(0, 9, 15, 1) 50%) padding-box,\n                        linear-gradient(183deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0)) border-box",
                            ...p ? {
                                backdropFilter: "blur(18px)"
                            } : {}
                        },
                        children: (0, l0.jsx)(cg.ZP, {
                            container: !0,
                            direction: "row",
                            p: 14,
                            pt: {
                                xs: 10,
                                sm: 14
                            },
                            px: p ? 0 : void 0,
                            justifyContent: "space-evenly",
                            width: "100%",
                            sx: {
                                spacing: "14px",
                                rowGap: "60px",
                                flexWrap: "wrap"
                            },
                            children: [{
                                id: "stat-tvl",
                                name: "Total Value Locked"
                            }, {
                                id: "stat-volume",
                                name: "Trade Volume"
                            }, {
                                id: "stat-mcap",
                                name: "Market Cap"
                            }, {
                                id: "stat-sauce",
                                name: "Circulating SAUCE"
                            }, {
                                id: "stat-staked-sauce",
                                name: "Staked SAUCE"
                            }, {
                                id: "stat-swaps",
                                name: "All Time Trades"
                            }].map(e => {
                                let {
                                    id: t,
                                    name: a
                                } = e;
                                return (0, l0.jsxs)(cg.ZP, {
                                    item: !0,
                                    xs: u ? 12 : f ? 6 : 4,
                                    px: "auto",
                                    alignItems: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    children: [(0, l0.jsx)(cd.Z, {
                                        color: "light" === c.palette.mode ? c.palette.custom.green : "custom.fadedWhite",
                                        variant: "h4",
                                        children: a
                                    }), (0, l0.jsx)(cd.Z, {
                                        id: t,
                                        mt: 2,
                                        fontSize: 32
                                    })]
                                }, a)
                            })
                        })
                    })
                },
                n1 = () => {
                    let e = (0, l7.Z)(),
                        {
                            isSmall: t
                        } = (0, cz.l)(),
                        a = [{
                            description: "Swap HBAR and HTS tokens in seconds with no counterparty risk.",
                            icon: e.images.landingSwap,
                            link: "/swap",
                            name: "Swap Tokens"
                        }, {
                            description: "Provide token liquidity and earn swap fees. Constant product and concentrated pools available.",
                            icon: e.images.landingLiquidity,
                            link: "/liquidity",
                            name: "Provide Liquidity"
                        }, {
                            description: "Stake liquidity to earn yield farming rewards in V1 or instantly begin earning LARI rewards in V2.",
                            icon: e.images.landingFarm,
                            link: "/liquidity",
                            name: "Earn Token Incentives"
                        }, {
                            description: "Stake SAUCE to earn rewards from swap fees, HBAR native staking, and emissions with no risk of IL.",
                            icon: e.images.landingStake,
                            link: "/stake",
                            name: "Stake SAUCE"
                        }, {
                            description: "Bridge tokens between Hedera and 11 blockchains via hashport, a secure interoperability solution.",
                            icon: e.images.landingBridge,
                            link: "https://app.hashport.network/",
                            name: "Bridge Tokens",
                            redirectNotice: "You will be redirected to Hashport, an independent bridge protocol. Would you like to proceed?"
                        }];
                    return (0, l0.jsxs)(l0.Fragment, {
                        children: [(0, l0.jsx)(ca.Z, {
                            className: "scrollable",
                            mt: 60,
                            fontSize: 32,
                            fontWeight: 800,
                            color: e.palette.custom.contrastText,
                            children: "Features"
                        }), (0, l0.jsx)(cg.ZP, {
                            container: !0,
                            spacing: 12.5,
                            mt: 7.5,
                            justifyContent: "center",
                            px: {
                                xs: 0,
                                md: 32,
                                lg: 40
                            },
                            children: a.map(a => {
                                let {
                                    description: s,
                                    icon: r,
                                    link: l,
                                    redirectNotice: c,
                                    name: n
                                } = a;
                                return (0, l0.jsx)(cg.ZP, {
                                    container: !0,
                                    item: !0,
                                    lg: 4,
                                    sm: 6,
                                    xs: 12,
                                    children: (0, l0.jsx)(cZ.C, {
                                        href: l,
                                        redirectNotice: c,
                                        children: (0, l0.jsxs)(cW.Z, {
                                            sx: {
                                                "& img": {
                                                    transform: "scale(0.95)",
                                                    transition: "".concat(e.transitions.create(["padding", "transform"], {
                                                        duration: e.transitions.duration.standard
                                                    }))
                                                },
                                                color: "".concat(e.palette.custom.grey),
                                                "&:hover": {
                                                    color: "".concat(e.palette.custom.green)
                                                },
                                                "&:hover img": {
                                                    padding: "0%",
                                                    transform: "scale(1)"
                                                },
                                                backdropFilter: "blur(6px)",
                                                boxSizing: "border-box",
                                                display: "flex",
                                                flexDirection: "column",
                                                ..."light" === e.palette.mode ? {
                                                    background: "linear-gradient(185deg, rgba(255, 255, 255, 0.6) 45.35%, rgba(255, 255, 255, 0.24) 129.54%)",
                                                    boxShadow: "none",
                                                    borderRadius: "12px"
                                                } : {
                                                    background: "linear-gradient(150deg, rgba(25, 44, 59, 1), rgba(0, 9, 15, 1) 40%) padding-box,\n                  linear-gradient(150deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)) border-box",
                                                    border: "0.5px solid transparent",
                                                    borderRadius: "12px"
                                                }
                                            },
                                            children: [(0, l0.jsx)(cY(), {
                                                alt: n,
                                                src: r,
                                                height: 304,
                                                width: 580,
                                                style: {
                                                    width: "auto",
                                                    maxWidth: "100%",
                                                    height: t ? 175 : 135,
                                                    margin: "auto"
                                                }
                                            }), (0, l0.jsx)(cd.Z, {
                                                mb: 4,
                                                mt: 10,
                                                variant: "h6",
                                                children: n
                                            }), (0, l0.jsx)(cU.Z, {
                                                sx: {
                                                    border: "0.5px solid"
                                                }
                                            }), (0, l0.jsx)(cd.Z, {
                                                mt: 4,
                                                variant: "h4",
                                                children: s
                                            })]
                                        })
                                    })
                                }, n)
                            })
                        })]
                    })
                },
                n2 = () => {
                    let {
                        isSmall: e
                    } = (0, cz.l)();
                    return (0, l0.jsx)(l0.Fragment, {
                        children: (0, l0.jsxs)(cg.ZP, {
                            container: !0,
                            spacing: 12.5,
                            rowSpacing: e ? 17.5 : 40,
                            mt: 25,
                            px: {
                                xs: nX,
                                md: 31.25,
                                lg: 62.5
                            },
                            children: [(0, l0.jsx)(cg.ZP, {
                                item: !0,
                                md: 6,
                                xs: 12,
                                order: {
                                    xs: 2,
                                    md: 1
                                },
                                children: (0, l0.jsx)(l8.Z, {
                                    display: "flex",
                                    height: "100%",
                                    children: (0, l0.jsx)(n6, {
                                        iconA: (0, l0.jsx)(nj, {
                                            width: 300
                                        }),
                                        iconB: (0, l0.jsx)(nk, {
                                            width: 300
                                        }),
                                        href: "https://www.hbarfoundation.org/blog-post/the-hbar-foundation-announces-its-support-of-saucerswap-the-decentralized-exchange-built-on-hedera"
                                    })
                                })
                            }), (0, l0.jsx)(cg.ZP, {
                                item: !0,
                                md: 6,
                                xs: 12,
                                order: 1,
                                children: (0, l0.jsx)(n0, {
                                    title: "Supported by",
                                    partner: "THE HBAR FOUNDATION",
                                    description: "SaucerSwap is proudly partnered with the HBAR Foundation, an organization dedicated to helping builders and creators bring their ideas to market. The project is a grant recipient, which was awarded in July 2022 and served to incentivize liquidity on the Hedera network."
                                })
                            }), e && (0, l0.jsx)(cg.ZP, {
                                item: !0,
                                xs: 12,
                                order: 3,
                                children: (0, l0.jsx)(n7, {})
                            }), (0, l0.jsx)(cg.ZP, {
                                item: !0,
                                md: 6,
                                xs: 12,
                                order: {
                                    xs: 4,
                                    sm: 3
                                },
                                children: (0, l0.jsx)(n0, {
                                    title: "Audited by",
                                    partner: "HACKEN",
                                    description: "SaucerSwap V1 and staking contracts have been audited by Hacken, a leading blockchain security company with an essential focus on auditing, crowdsourced security, pen-testing, monitoring, and analytics."
                                })
                            }), (0, l0.jsx)(cg.ZP, {
                                item: !0,
                                md: 6,
                                xs: 12,
                                order: {
                                    xs: 5,
                                    sm: 4
                                },
                                children: (0, l0.jsx)(l8.Z, {
                                    display: "flex",
                                    height: "100%",
                                    children: (0, l0.jsx)(n6, {
                                        iconA: (0, l0.jsx)(nM, {
                                            width: 300
                                        }),
                                        iconB: (0, l0.jsx)(nw, {
                                            width: 300
                                        }),
                                        href: "https://docs.saucerswap.finance/developer/audits"
                                    })
                                })
                            }), e && (0, l0.jsx)(cg.ZP, {
                                item: !0,
                                xs: 12,
                                order: 6,
                                children: (0, l0.jsx)(n7, {})
                            }), (0, l0.jsx)(cg.ZP, {
                                item: !0,
                                md: 6,
                                xs: 12,
                                order: {
                                    xs: 7,
                                    md: 5
                                },
                                children: (0, l0.jsx)(l8.Z, {
                                    display: "flex",
                                    height: "100%",
                                    children: (0, l0.jsx)(n6, {
                                        iconA: (0, l0.jsx)(nF, {
                                            width: 300
                                        }),
                                        iconB: (0, l0.jsx)(nU, {
                                            width: 300
                                        }),
                                        href: "https://docs.saucerswap.finance/developer/audits"
                                    })
                                })
                            }), (0, l0.jsx)(cg.ZP, {
                                item: !0,
                                md: 6,
                                xs: 12,
                                order: {
                                    xs: 6,
                                    md: 6
                                },
                                children: (0, l0.jsx)(n0, {
                                    title: "Audited by",
                                    partner: "Omniscia",
                                    description: "SaucerSwap V2 contracts have been audited by Omniscia, a decentralized team of experienced smart contract auditors & developers with deep expertise building and securing complex decentralized networks and applications. Omniscia has protected over $65 billion in assets."
                                })
                            }), e && (0, l0.jsx)(cg.ZP, {
                                item: !0,
                                xs: 12,
                                order: 8,
                                children: (0, l0.jsx)(n7, {})
                            })]
                        })
                    })
                },
                n3 = () => (0, l0.jsxs)(l8.Z, {
                    children: [(0, l0.jsx)(ca.Z, {
                        className: "scrollable",
                        mt: {
                            xs: 47.5,
                            sm: 60
                        },
                        mb: "120px",
                        fontSize: "32px",
                        fontWeight: 800,
                        color: "custom.contrastText",
                        children: "Collaborators"
                    }), (0, l0.jsx)(l8.Z, {
                        mx: {
                            xs: nX,
                            md: 50
                        },
                        children: (0, l0.jsx)(cg.ZP, {
                            container: !0,
                            py: {
                                xs: "40px",
                                md: "52px"
                            },
                            justifyContent: "center",
                            columnGap: 13,
                            rowGap: 30,
                            sx: e => ({
                                backgroundColor: "light" === e.palette.mode ? e.palette.custom.chartContainerBackground : void 0,
                                borderRadius: "12px"
                            }),
                            children: n4.map(e => {
                                let {
                                    iconA: t,
                                    iconB: a,
                                    link: s,
                                    name: r
                                } = e;
                                return (0, l0.jsx)(cg.ZP, {
                                    item: !0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    lg: 3,
                                    sm: 4,
                                    xs: 6,
                                    children: (0, l0.jsx)(n6, {
                                        iconA: t,
                                        iconB: a,
                                        href: s
                                    })
                                }, r)
                            })
                        })
                    })]
                }),
                n5 = () => {
                    let e = (0, l7.Z)();
                    return (0, l0.jsxs)(l9.Z, {
                        alignItems: "center",
                        spacing: "32px",
                        mt: {
                            xs: "164px",
                            sm: "366px"
                        },
                        mb: {
                            xs: "188px",
                            sm: "412px"
                        },
                        children: [(0, l0.jsx)(cd.Z, {
                            fontSize: 32,
                            fontWeight: "800",
                            textAlign: "center",
                            sx: "light" === e.palette.mode ? {
                                p: "12px",
                                backgroundColor: "custom.chartContainerBackground",
                                borderRadius: "8px"
                            } : void 0,
                            children: "Join the Community"
                        }), (0, l0.jsx)(cU.Z, {
                            sx: {
                                borderColor: "custom.green",
                                borderWidth: "0.5px",
                                borderStyle: "solid",
                                width: "84px"
                            }
                        }), (0, l0.jsx)(l8.Z, {
                            borderRadius: "4px",
                            sx: "light" === e.palette.mode ? {
                                backgroundColor: "custom.chartContainerBackground",
                                border: "1px solid",
                                borderColor: "custom.green"
                            } : {
                                border: "0.5px solid transparent",
                                background: "linear-gradient(#051725, #051725) padding-box,\n            linear-gradient(to right, rgba(255, 255, 255), rgba(255, 255, 255, 0.1)) border-box",
                                boxSizing: "border-box"
                            },
                            py: "6px",
                            px: "12px",
                            children: (0, l0.jsx)(nr.Z, {
                                color: e.palette.custom.green,
                                iconSize: "24px"
                            })
                        })]
                    })
                },
                n4 = [{
                    iconA: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", ny({
                            id: "hashport_svg__LOGO",
                            xmlns: "http://www.w3.org/2000/svg",
                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                            x: 0,
                            y: 0,
                            viewBox: "0 0 655 154.6",
                            style: {
                                enableBackground: "new 0 0 655 154.6"
                            },
                            xmlSpace: "preserve"
                        }, e), ep || (ep = l6.createElement("style", null, ".hashport_svg__st14{fill:#fff}.hashport_svg__st16{display:inline}")), l6.createElement("g", {
                            id: "hashport_svg__LIGHT"
                        }, l6.createElement("g", {
                            id: "hashport_svg__Glyph"
                        }, ef || (ef = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_svg__SVGID_1_",
                            d: "M433.4 6.9h113.4v138H433.4z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_svg__SVGID_00000158750928878304820870000006786713372114479264_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_svg__SVGID_1_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("g", {
                            style: {
                                clipPath: "url(#hashport_svg__SVGID_00000158750928878304820870000006786713372114479264_)"
                            }
                        }, eu || (eu = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_svg__SVGID_00000132072495054830493150000014227297355534299065_",
                            d: "M372.3-8h235.8v166.7H372.3z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_svg__SVGID_00000032607595974205953950000012166353342872136618_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_svg__SVGID_00000132072495054830493150000014227297355534299065_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("g", {
                            style: {
                                clipPath: "url(#hashport_svg__SVGID_00000032607595974205953950000012166353342872136618_)"
                            }
                        }, eE || (eE = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_svg__SVGID_00000031887485266871471550000007191744337509997209_",
                            d: "M458.1 51.6c0 8.7 7.1 15.8 15.8 15.8 2.9 0 5.6-.8 7.9-2.1L497 77.8v6.4h-32.5c-1.7-6.9-7.9-12-15.3-12-8.7 0-15.8 7.1-15.8 15.8 0 8.7 7.1 15.8 15.8 15.8 7.4 0 13.6-5.1 15.3-12h40V73.4h-1.1L487.2 60c.9-1.4 1.6-3 2-4.6h40.5c.6-2.6 1.1-5.1 1.5-7.5h-41.9c-1.7-6.9-7.9-12-15.3-12-8.9 0-15.9 7-15.9 15.7"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_svg__SVGID_00000107558027883254092120000005981717931076439197_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_svg__SVGID_00000031887485266871471550000007191744337509997209_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("linearGradient", {
                            id: "hashport_svg__SVGID_00000153698764335539927640000013998112766296372642_",
                            gradientUnits: "userSpaceOnUse",
                            x1: -66.118,
                            y1: 387.536,
                            x2: -65.838,
                            y2: 387.536,
                            gradientTransform: "scale(181.8417) rotate(-8.615 -2601.513 -261.142)"
                        }, l6.createElement("stop", {
                            offset: 0,
                            style: {
                                stopColor: "#a6a6a6"
                            }
                        }), l6.createElement("stop", {
                            offset: 1,
                            style: {
                                stopColor: "#858585"
                            }
                        })), l6.createElement("path", {
                            style: {
                                clipPath: "url(#hashport_svg__SVGID_00000107558027883254092120000005981717931076439197_)",
                                fill: "url(#hashport_svg__SVGID_00000153698764335539927640000013998112766296372642_)"
                            },
                            d: "m423.4 37.4 105.5-16 12.3 80.8-105.6 16z"
                        })), ex || (ex = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_svg__SVGID_00000101789989914234209160000017572567143871624865_",
                            d: "M372.3-8h235.8v166.7H372.3z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_svg__SVGID_00000108267463766368246700000001880684390429862025_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_svg__SVGID_00000101789989914234209160000017572567143871624865_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("g", {
                            style: {
                                clipPath: "url(#hashport_svg__SVGID_00000108267463766368246700000001880684390429862025_)"
                            }
                        }, eM || (eM = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_svg__SVGID_00000065065465084773747020000005569792199357971597_",
                            d: "M490.8 85.2c0 8.7 7.1 15.8 15.8 15.8.5 0 1 0 1.5-.1 4.8-6.7 9.2-14.1 13-22-2.4-5.6-8-9.5-14.5-9.5-8.8 0-15.8 7.1-15.8 15.8"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_svg__SVGID_00000171692106461370394810000018016696121148119463_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_svg__SVGID_00000065065465084773747020000005569792199357971597_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("linearGradient", {
                            id: "hashport_svg__SVGID_00000147209931025622933060000004266122715788886179_",
                            gradientUnits: "userSpaceOnUse",
                            x1: -65.752,
                            y1: 389.334,
                            x2: -65.472,
                            y2: 389.334,
                            gradientTransform: "translate(7589.248 -41946.496) scale(107.958)"
                        }, l6.createElement("stop", {
                            offset: 0,
                            style: {
                                stopColor: "#a6a6a6"
                            }
                        }), l6.createElement("stop", {
                            offset: 1,
                            style: {
                                stopColor: "#858585"
                            }
                        })), l6.createElement("path", {
                            style: {
                                clipPath: "url(#hashport_svg__SVGID_00000171692106461370394810000018016696121148119463_)",
                                fill: "url(#hashport_svg__SVGID_00000147209931025622933060000004266122715788886179_)"
                            },
                            d: "M490.8 69.4H521V101h-30.2z"
                        })), ez || (ez = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_svg__SVGID_00000094608814033025148890000010384307731419401393_",
                            d: "M372.3-8h235.8v166.7H372.3z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_svg__SVGID_00000036242282324696710600000003263188939694586298_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_svg__SVGID_00000094608814033025148890000010384307731419401393_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("g", {
                            style: {
                                clipPath: "url(#hashport_svg__SVGID_00000036242282324696710600000003263188939694586298_)"
                            }
                        }, ew || (ew = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_svg__SVGID_00000048464965827960641730000000002780051381149856_",
                            d: "M523.5 7.2c-5.4.9-11.5 3.4-17.9 7.3 1.6-.7 3.3-1.2 4.9-1.6 22.7-6 29.6 23.9 15.3 58.3-13.6 32.9-38 58.8-57.2 62.8-10.8 2.2-21.3-4.4-20.5-25.5-1.9 22.6 5 39.2 23.3 36.1 22.9-3.9 52.5-35.1 67.6-73.4 14.3-36.1 8.2-64.3-11.8-64.3-1.1 0-2.4.1-3.7.3"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_svg__SVGID_00000106124232261845999480000012691548026300319368_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_svg__SVGID_00000048464965827960641730000000002780051381149856_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("radialGradient", {
                            id: "hashport_svg__SVGID_00000027579280573997254960000002698440424537876897_",
                            cx: -66.663,
                            cy: 385.921,
                            r: .28,
                            gradientTransform: "matrix(232.3418 -15.1275 20.5052 314.937 8072.404 -122473.102)",
                            gradientUnits: "userSpaceOnUse"
                        }, l6.createElement("stop", {
                            offset: 0,
                            style: {
                                stopColor: "#a6a6a6"
                            }
                        }), l6.createElement("stop", {
                            offset: 1,
                            style: {
                                stopColor: "#ababab"
                            }
                        })), l6.createElement("path", {
                            style: {
                                clipPath: "url(#hashport_svg__SVGID_00000106124232261845999480000012691548026300319368_)",
                                fill: "url(#hashport_svg__SVGID_00000027579280573997254960000002698440424537876897_)"
                            },
                            d: "M437.1 7.5 552.8 0l9.6 147-115.7 7.6z"
                        })), eb || (eb = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_svg__SVGID_00000016768132453266776880000016778891835279976332_",
                            d: "M372.3-8h235.8v166.7H372.3z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_svg__SVGID_00000134223837835631575430000000035244417440059547_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_svg__SVGID_00000016768132453266776880000016778891835279976332_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("g", {
                            style: {
                                clipPath: "url(#hashport_svg__SVGID_00000134223837835631575430000000035244417440059547_)"
                            }
                        }, eZ || (eZ = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_svg__SVGID_00000132776771348176537970000000929640383020554941_",
                            d: "M524.9 7.1c18.9 1.2 24.6 28.3 10.7 63.5-15.1 38.3-44.7 69.5-67.6 73.4-2 .3-4 .4-5.7.3 2.7.7 5.7.9 9.2.3 22.9-3.9 52.5-35.1 67.6-73.4C553.4 35.1 547.3 7 527.3 7c-.8-.1-1.6 0-2.4.1"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_svg__SVGID_00000062898385767109675530000004951200592406248626_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_svg__SVGID_00000132776771348176537970000000929640383020554941_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("radialGradient", {
                            id: "hashport_svg__SVGID_00000016788929378299907820000010618261594198366119_",
                            cx: -66.515,
                            cy: 386.503,
                            r: .281,
                            gradientTransform: "matrix(204.3085 0 0 239.6028 14093.92 -92531.102)",
                            gradientUnits: "userSpaceOnUse"
                        }, l6.createElement("stop", {
                            offset: 0,
                            style: {
                                stopColor: "#ababab"
                            }
                        }), l6.createElement("stop", {
                            offset: 1,
                            style: {
                                stopColor: "#a6a6a6"
                            }
                        })), l6.createElement("path", {
                            style: {
                                clipPath: "url(#hashport_svg__SVGID_00000062898385767109675530000004951200592406248626_)",
                                fill: "url(#hashport_svg__SVGID_00000016788929378299907820000010618261594198366119_)"
                            },
                            d: "M462.2 6.9h91v138.2h-91z"
                        })), ey || (ey = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_svg__SVGID_00000153704716356085411860000011206702324176884408_",
                            d: "M372.3-8h235.8v166.7H372.3z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_svg__SVGID_00000009587737088005705190000004936672482692275344_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_svg__SVGID_00000153704716356085411860000011206702324176884408_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("g", {
                            style: {
                                clipPath: "url(#hashport_svg__SVGID_00000009587737088005705190000004936672482692275344_)"
                            }
                        }, eV || (eV = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_svg__SVGID_00000044864007727585687930000002727825458992125624_",
                            d: "M372.3-8h235.8v166.7H372.3z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_svg__SVGID_00000104685752401939936780000018194420985133367983_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_svg__SVGID_00000044864007727585687930000002727825458992125624_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("g", {
                            style: {
                                opacity: .4,
                                clipPath: "url(#hashport_svg__SVGID_00000104685752401939936780000018194420985133367983_)"
                            }
                        }, eN || (eN = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_svg__SVGID_00000000926545914905352210000008159769785124852139_",
                            d: "M462.2 6.9h84.6v138h-84.6z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_svg__SVGID_00000139279563518792398490000013375888721479656595_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_svg__SVGID_00000000926545914905352210000008159769785124852139_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("path", {
                            style: {
                                clipPath: "url(#hashport_svg__SVGID_00000139279563518792398490000013375888721479656595_)",
                                fill: "#fefefe"
                            },
                            d: "M524.9 7.1c18.9 1.2 24.6 28.3 10.7 63.5-15.1 38.3-44.7 69.5-67.6 73.4-2 .3-4 .4-5.7.3 2.7.7 5.7.9 9.2.3 22.9-3.9 52.5-35.1 67.6-73.4 14.7-37.5 7.6-66.4-14.2-64.1"
                        })), ej || (ej = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_svg__SVGID_00000021104040409066672500000007180344143316507291_",
                            d: "M372.3-8h235.8v166.7H372.3z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_svg__SVGID_00000082365234760409916400000018326854780077371536_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_svg__SVGID_00000021104040409066672500000007180344143316507291_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("path", {
                            style: {
                                clipPath: "url(#hashport_svg__SVGID_00000082365234760409916400000018326854780077371536_)"
                            },
                            d: "M464.1 144.3c1.4 0 2.9-.1 4.4-.4 22.9-3.9 52.5-35.1 67.6-73.4 14-35.4 8.2-62.5-10.9-63.5.7-.1 1.3-.1 1.9-.1-.7 0-1.5 0-2.2.1 19 1.1 24.8 28.2 10.9 63.5-15.1 38.3-44.7 69.5-67.6 73.4-1.5.3-2.9.4-4.3.4h.2"
                        }), eH || (eH = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_svg__SVGID_00000023239194230424479340000004350522573285300629_",
                            d: "M372.3-8h235.8v166.7H372.3z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_svg__SVGID_00000168084187594473760540000004514874064668574853_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_svg__SVGID_00000023239194230424479340000004350522573285300629_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("path", {
                            style: {
                                clipPath: "url(#hashport_svg__SVGID_00000168084187594473760540000004514874064668574853_)"
                            },
                            d: "M462.6 144.3h-.4c1.6.4 3.3.7 5.1.7-1.7-.1-3.3-.3-4.7-.7"
                        })))), ek || (ek = l6.createElement("g", {
                            id: "hashport_svg__TypeFace"
                        }, l6.createElement("g", {
                            id: "hashport_svg__rt_-_OUTLINES"
                        }, l6.createElement("path", {
                            className: "hashport_svg__st14",
                            d: "M559.2 107.9c-1.6 0-2.9-.5-3.8-1.4-.9-.9-1.4-2.2-1.4-3.8V37.9c0-1.6.5-2.9 1.4-3.8.9-.9 2.2-1.4 3.8-1.4 1.6 0 2.9.5 3.8 1.4.9.9 1.4 2.2 1.4 3.8v64.7c0 1.6-.5 2.9-1.4 3.8-.8 1-2.1 1.5-3.8 1.5zm-.8-46.4c.3-5.7 1.8-10.8 4.5-15.3s6.2-8 10.6-10.6c4.3-2.6 9.2-3.8 14.5-3.8 4.2 0 7.5.6 9.8 1.8 2.3 1.2 3.2 2.9 2.6 5.2-.4 1.4-1 2.3-1.9 2.7-.9.5-1.9.6-3.2.5-1.2-.1-2.6-.2-4.2-.3-5.1-.5-9.7.1-13.7 1.6s-7.1 3.8-9.5 6.9c-2.3 3.1-3.5 6.8-3.5 11.1l-6 .2zM612.1 44.6c-1.4 0-2.5-.4-3.4-1.3-.9-.9-1.4-1.9-1.4-3.2 0-1.4.5-2.5 1.4-3.4.9-.9 2.1-1.3 3.4-1.3h35c1.4 0 2.5.4 3.4 1.3.9.9 1.4 2 1.4 3.4 0 1.3-.5 2.4-1.4 3.2-.9.9-2.1 1.3-3.4 1.3h-35zm34.3 63.3c-4.9 0-9.2-1.1-13-3.4-3.8-2.3-6.8-5.4-9-9.4s-3.3-8.5-3.3-13.7V14.1c0-1.6.5-2.8 1.4-3.8 1-1 2.2-1.5 3.8-1.5 1.6 0 2.8.5 3.8 1.5s1.5 2.3 1.5 3.8v67.2c0 4.7 1.4 8.5 4.1 11.5 2.7 3 6.3 4.5 10.6 4.5h3.7c1.5 0 2.7.5 3.6 1.5.9 1 1.4 2.3 1.4 3.8 0 1.6-.5 2.8-1.6 3.8s-2.5 1.4-4.1 1.4h-2.9z"
                        })), l6.createElement("g", {
                            id: "hashport_svg__Hashp_-_OUTLINES"
                        }, l6.createElement("path", {
                            className: "hashport_svg__st14",
                            d: "M5.4 77.2c-1.6 0-3-.5-3.9-1.5-1-1-1.4-2.3-1.4-3.8v-66c0-1.6.5-3 1.4-3.9S3.8.6 5.4.6C6.9.5 8.2 1 9.1 2c1 1 1.4 2.3 1.4 3.9v66c0 1.6-.5 2.8-1.4 3.8-.9 1-2.2 1.5-3.7 1.5zm0 30.7c-1.6 0-3-.5-3.9-1.4S0 104.2 0 102.6V38c0-1.6.5-3 1.4-3.9s2.3-1.4 3.9-1.4 2.8.5 3.8 1.4 1.4 2.3 1.4 3.9v64.6c0 1.6-.5 2.8-1.4 3.8s-2.2 1.5-3.7 1.5zm59.1 0c-1.6 0-2.8-.5-3.8-1.5s-1.5-2.2-1.5-3.7V66.9c0-5.7-1.1-10.4-3.2-14-2.2-3.7-5.1-6.4-8.8-8.2-3.7-1.8-7.9-2.7-12.6-2.7-4.5 0-8.5.9-12.2 2.6-3.6 1.7-6.5 4.1-8.6 7.1-2.1 3-3.2 6.5-3.2 10.3H3c.2-5.8 1.8-11 4.7-15.5 2.9-4.5 6.8-8.1 11.7-10.7 4.9-2.6 10.3-3.9 16.2-3.9 6.5 0 12.3 1.4 17.5 4.1 5.1 2.7 9.2 6.7 12.2 11.9s4.5 11.6 4.5 19.1v35.7c0 1.5-.5 2.7-1.5 3.7-1.1 1-2.4 1.5-3.8 1.5zM126.2 108.5c-7.1 0-13.4-1.7-19-5s-10-7.9-13.3-13.7C90.6 84 89 77.5 89 70.3c0-7.3 1.7-13.9 5-19.7 3.3-5.8 7.9-10.3 13.7-13.7 5.8-3.3 12.3-5 19.5-5 7.2 0 13.7 1.7 19.4 5 5.7 3.3 10.3 7.9 13.6 13.7 3.3 5.8 5.1 12.3 5.2 19.7l-4.3 3.3c0 6.6-1.5 12.5-4.6 17.8-3.1 5.3-7.2 9.4-12.5 12.5-5.2 3.1-11.2 4.6-17.8 4.6zm1.1-9.6c5.3 0 10.1-1.2 14.2-3.7 4.2-2.5 7.5-5.9 9.9-10.2 2.4-4.4 3.6-9.2 3.6-14.6 0-5.5-1.2-10.4-3.6-14.7-2.4-4.3-5.7-7.7-9.9-10.2-4.2-2.5-8.9-3.8-14.2-3.8-5.2 0-9.9 1.3-14.2 3.8-4.2 2.5-7.6 5.9-10 10.2-2.5 4.3-3.7 9.2-3.7 14.7 0 5.4 1.2 10.3 3.7 14.6 2.5 4.4 5.8 7.8 10 10.2 4.2 2.5 8.9 3.7 14.2 3.7zm32.8 9c-1.6 0-2.8-.5-3.8-1.4-1-1-1.5-2.2-1.5-3.8V79.1l2.6-10.9 8.1 2.1v32.3c0 1.6-.5 2.8-1.5 3.8-1.1 1-2.3 1.5-3.9 1.5zM212.3 108.5c-5.4 0-10.8-.9-16.1-2.7-5.3-1.8-9.6-4.6-12.9-8.2-1-1.1-1.4-2.3-1.2-3.7.2-1.4.9-2.6 2.1-3.6 1.3-.9 2.6-1.3 4-1.1 1.4.2 2.5.8 3.4 1.8 2.2 2.6 5.1 4.5 8.7 5.9 3.6 1.4 7.6 2.1 12 2.1 6.8 0 11.7-1.2 14.7-3.5s4.6-5.2 4.7-8.5c0-3.3-1.6-6-4.7-8.2-3.1-2.2-8.2-3.8-15.4-5-9.3-1.5-16-4-20.3-7.7-4.3-3.7-6.5-8-6.5-13.1 0-4.7 1.2-8.6 3.7-11.7 2.5-3.1 5.8-5.4 9.9-7 4.1-1.6 8.7-2.3 13.6-2.3 6.1 0 11.4 1.1 15.9 3.2 4.4 2.1 8 4.9 10.8 8.5.9 1.2 1.3 2.4 1.1 3.7-.2 1.3-.9 2.3-2.2 3.2-1.1.6-2.4.8-3.8.6-1.4-.2-2.6-.9-3.6-2-2.3-2.7-4.9-4.6-8-5.8-3-1.2-6.5-1.9-10.4-1.9-5 0-9.1 1-12.1 3.1s-4.5 4.7-4.5 7.8c0 2.1.6 3.9 1.7 5.5s3.1 2.9 5.9 4.1c2.8 1.2 6.7 2.2 11.8 3 6.9 1.1 12.3 2.7 16.3 4.9s6.8 4.7 8.5 7.6c1.7 2.9 2.5 6 2.5 9.4 0 4.3-1.3 8.1-3.8 11.3-2.5 3.3-6 5.8-10.4 7.6-4.5 1.8-9.6 2.7-15.4 2.7zM265.5 77.2c-1.6 0-3-.5-3.9-1.5-1-1-1.4-2.3-1.4-3.8v-66c0-1.6.5-3 1.4-3.9s2.3-1.4 3.9-1.4 2.8.5 3.8 1.4c1 1 1.4 2.3 1.4 3.9v66c0 1.6-.5 2.8-1.4 3.8-1 1-2.2 1.5-3.8 1.5zm0 30.7c-1.6 0-3-.5-3.9-1.4s-1.4-2.2-1.4-3.8V38c0-1.6.5-3 1.4-3.9s2.3-1.4 3.9-1.4 2.8.5 3.8 1.4 1.4 2.3 1.4 3.9v64.6c0 1.6-.5 2.8-1.4 3.8s-2.2 1.5-3.8 1.5zm59.1 0c-1.6 0-2.8-.5-3.8-1.5s-1.5-2.2-1.5-3.7V66.9c0-5.7-1.1-10.4-3.2-14-2.2-3.7-5.1-6.4-8.8-8.2-3.7-1.8-7.9-2.7-12.6-2.7-4.5 0-8.5.9-12.2 2.6-3.6 1.7-6.5 4.1-8.6 7.1-2.1 3-3.2 6.5-3.2 10.3h-7.6c.2-5.8 1.7-10.9 4.7-15.5 2.9-4.5 6.8-8.1 11.7-10.7 4.9-2.6 10.3-3.9 16.2-3.9 6.5 0 12.3 1.4 17.5 4.1 5.1 2.7 9.2 6.7 12.2 11.9s4.5 11.6 4.5 19.1v35.7c0 1.5-.5 2.7-1.5 3.7-1.1 1-2.3 1.5-3.8 1.5zM358.6 140c-1.6 0-3-.5-3.9-1.4-1-1-1.4-2.3-1.4-3.9V69.8c.1-7.1 1.8-13.6 5.2-19.3 3.3-5.7 7.9-10.2 13.6-13.5 5.7-3.3 12.2-4.9 19.3-4.9 7.3 0 13.9 1.7 19.7 5 5.8 3.3 10.3 7.9 13.7 13.7 3.3 5.8 5 12.3 5 19.7 0 7.2-1.6 13.7-4.9 19.5-3.3 5.8-7.7 10.3-13.3 13.7-5.6 3.3-11.9 5-19 5-6.1 0-11.7-1.3-16.7-3.9-5-2.6-9-6.1-12-10.4v40.4c0 1.6-.5 3-1.4 3.9-1.1.8-2.4 1.3-3.9 1.3zm32.7-41.1c5.3 0 10.1-1.2 14.3-3.7 4.2-2.5 7.5-5.9 10-10.2 2.4-4.4 3.6-9.2 3.6-14.6 0-5.5-1.2-10.4-3.6-14.7-2.4-4.3-5.8-7.7-10-10.2-4.2-2.5-9-3.8-14.3-3.8-5.2 0-9.9 1.3-14.2 3.8-4.2 2.5-7.5 5.9-9.9 10.2-2.4 4.3-3.6 9.2-3.6 14.7 0 5.4 1.2 10.3 3.6 14.6 2.4 4.4 5.7 7.8 9.9 10.2 4.2 2.5 8.9 3.7 14.2 3.7z"
                        }))))))
                    }, {
                        style: {
                            paddingTop: 12
                        },
                        height: 55,
                        width: 200
                    }),
                    iconB: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nV({
                            id: "hashport_green_svg__LOGO",
                            xmlns: "http://www.w3.org/2000/svg",
                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                            x: 0,
                            y: 0,
                            viewBox: "0 0 655 154.6",
                            style: {
                                enableBackground: "new 0 0 655 154.6"
                            },
                            xmlSpace: "preserve"
                        }, e), eS || (eS = l6.createElement("style", null, ".hashport_green_svg__st14{fill:#69ff52}.hashport_green_svg__st16{display:inline}")), eD || (eD = l6.createElement("defs", null, l6.createElement("filter", {
                            id: "hashport_green_svg__greenFilter"
                        }, l6.createElement("feColorMatrix", {
                            values: "0 0 0 0 0.05 0 1 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
                        })))), l6.createElement("g", {
                            id: "hashport_green_svg__LIGHT"
                        }, l6.createElement("g", {
                            id: "hashport_green_svg__Glyph",
                            filter: "url(#hashport_green_svg__greenFilter)"
                        }, eI || (eI = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_green_svg__SVGID_1_",
                            filter: "url(#hashport_green_svg__greenFilter)",
                            d: "M433.4 6.9h113.4v138H433.4z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_green_svg__SVGID_00000158750928878304820870000006786713372114479264_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_green_svg__SVGID_1_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("g", {
                            style: {
                                clipPath: "url(#hashport_green_svg__SVGID_00000158750928878304820870000006786713372114479264_)"
                            }
                        }, eA || (eA = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_green_svg__SVGID_00000132072495054830493150000014227297355534299065_",
                            d: "M372.3-8h235.8v166.7H372.3z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_green_svg__SVGID_00000032607595974205953950000012166353342872136618_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_green_svg__SVGID_00000132072495054830493150000014227297355534299065_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("g", {
                            style: {
                                clipPath: "url(#hashport_green_svg__SVGID_00000032607595974205953950000012166353342872136618_)"
                            }
                        }, eP || (eP = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_green_svg__SVGID_00000031887485266871471550000007191744337509997209_",
                            d: "M458.1 51.6c0 8.7 7.1 15.8 15.8 15.8 2.9 0 5.6-.8 7.9-2.1L497 77.8v6.4h-32.5c-1.7-6.9-7.9-12-15.3-12-8.7 0-15.8 7.1-15.8 15.8 0 8.7 7.1 15.8 15.8 15.8 7.4 0 13.6-5.1 15.3-12h40V73.4h-1.1L487.2 60c.9-1.4 1.6-3 2-4.6h40.5c.6-2.6 1.1-5.1 1.5-7.5h-41.9c-1.7-6.9-7.9-12-15.3-12-8.9 0-15.9 7-15.9 15.7"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_green_svg__SVGID_00000107558027883254092120000005981717931076439197_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_green_svg__SVGID_00000031887485266871471550000007191744337509997209_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("linearGradient", {
                            id: "hashport_green_svg__SVGID_00000153698764335539927640000013998112766296372642_",
                            gradientUnits: "userSpaceOnUse",
                            x1: -66.118,
                            y1: 387.536,
                            x2: -65.838,
                            y2: 387.536,
                            gradientTransform: "scale(181.8417) rotate(-8.615 -2601.513 -261.142)"
                        }, l6.createElement("stop", {
                            offset: 0,
                            style: {
                                stopColor: "#a6a6a6"
                            }
                        }), l6.createElement("stop", {
                            offset: 1,
                            style: {
                                stopColor: "#858585"
                            }
                        })), l6.createElement("path", {
                            style: {
                                clipPath: "url(#hashport_green_svg__SVGID_00000107558027883254092120000005981717931076439197_)",
                                fill: "url(#hashport_green_svg__SVGID_00000153698764335539927640000013998112766296372642_)"
                            },
                            d: "m423.4 37.4 105.5-16 12.3 80.8-105.6 16z"
                        })), eO || (eO = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_green_svg__SVGID_00000101789989914234209160000017572567143871624865_",
                            d: "M372.3-8h235.8v166.7H372.3z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_green_svg__SVGID_00000108267463766368246700000001880684390429862025_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_green_svg__SVGID_00000101789989914234209160000017572567143871624865_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("g", {
                            style: {
                                clipPath: "url(#hashport_green_svg__SVGID_00000108267463766368246700000001880684390429862025_)"
                            }
                        }, eC || (eC = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_green_svg__SVGID_00000065065465084773747020000005569792199357971597_",
                            d: "M490.8 85.2c0 8.7 7.1 15.8 15.8 15.8.5 0 1 0 1.5-.1 4.8-6.7 9.2-14.1 13-22-2.4-5.6-8-9.5-14.5-9.5-8.8 0-15.8 7.1-15.8 15.8"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_green_svg__SVGID_00000171692106461370394810000018016696121148119463_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_green_svg__SVGID_00000065065465084773747020000005569792199357971597_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("linearGradient", {
                            id: "hashport_green_svg__SVGID_00000147209931025622933060000004266122715788886179_",
                            gradientUnits: "userSpaceOnUse",
                            x1: -65.752,
                            y1: 389.334,
                            x2: -65.472,
                            y2: 389.334,
                            gradientTransform: "translate(7589.248 -41946.496) scale(107.958)"
                        }, l6.createElement("stop", {
                            offset: 0,
                            style: {
                                stopColor: "#a6a6a6"
                            }
                        }), l6.createElement("stop", {
                            offset: 1,
                            style: {
                                stopColor: "#858585"
                            }
                        })), l6.createElement("path", {
                            style: {
                                clipPath: "url(#hashport_green_svg__SVGID_00000171692106461370394810000018016696121148119463_)",
                                fill: "url(#hashport_green_svg__SVGID_00000147209931025622933060000004266122715788886179_)"
                            },
                            d: "M490.8 69.4H521V101h-30.2z"
                        })), eG || (eG = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_green_svg__SVGID_00000094608814033025148890000010384307731419401393_",
                            d: "M372.3-8h235.8v166.7H372.3z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_green_svg__SVGID_00000036242282324696710600000003263188939694586298_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_green_svg__SVGID_00000094608814033025148890000010384307731419401393_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("g", {
                            style: {
                                clipPath: "url(#hashport_green_svg__SVGID_00000036242282324696710600000003263188939694586298_)"
                            }
                        }, eB || (eB = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_green_svg__SVGID_00000048464965827960641730000000002780051381149856_",
                            d: "M523.5 7.2c-5.4.9-11.5 3.4-17.9 7.3 1.6-.7 3.3-1.2 4.9-1.6 22.7-6 29.6 23.9 15.3 58.3-13.6 32.9-38 58.8-57.2 62.8-10.8 2.2-21.3-4.4-20.5-25.5-1.9 22.6 5 39.2 23.3 36.1 22.9-3.9 52.5-35.1 67.6-73.4 14.3-36.1 8.2-64.3-11.8-64.3-1.1 0-2.4.1-3.7.3"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_green_svg__SVGID_00000106124232261845999480000012691548026300319368_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_green_svg__SVGID_00000048464965827960641730000000002780051381149856_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("radialGradient", {
                            id: "hashport_green_svg__SVGID_00000027579280573997254960000002698440424537876897_",
                            cx: -66.663,
                            cy: 385.921,
                            r: .28,
                            gradientTransform: "matrix(232.3418 -15.1275 20.5052 314.937 8072.404 -122473.102)",
                            gradientUnits: "userSpaceOnUse"
                        }, l6.createElement("stop", {
                            offset: 0,
                            style: {
                                stopColor: "#a6a6a6"
                            }
                        }), l6.createElement("stop", {
                            offset: 1,
                            style: {
                                stopColor: "#ababab"
                            }
                        })), l6.createElement("path", {
                            style: {
                                clipPath: "url(#hashport_green_svg__SVGID_00000106124232261845999480000012691548026300319368_)",
                                fill: "url(#hashport_green_svg__SVGID_00000027579280573997254960000002698440424537876897_)"
                            },
                            d: "M437.1 7.5 552.8 0l9.6 147-115.7 7.6z"
                        })), eL || (eL = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_green_svg__SVGID_00000016768132453266776880000016778891835279976332_",
                            d: "M372.3-8h235.8v166.7H372.3z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_green_svg__SVGID_00000134223837835631575430000000035244417440059547_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_green_svg__SVGID_00000016768132453266776880000016778891835279976332_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("g", {
                            style: {
                                clipPath: "url(#hashport_green_svg__SVGID_00000134223837835631575430000000035244417440059547_)"
                            }
                        }, eT || (eT = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_green_svg__SVGID_00000132776771348176537970000000929640383020554941_",
                            d: "M524.9 7.1c18.9 1.2 24.6 28.3 10.7 63.5-15.1 38.3-44.7 69.5-67.6 73.4-2 .3-4 .4-5.7.3 2.7.7 5.7.9 9.2.3 22.9-3.9 52.5-35.1 67.6-73.4C553.4 35.1 547.3 7 527.3 7c-.8-.1-1.6 0-2.4.1"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_green_svg__SVGID_00000062898385767109675530000004951200592406248626_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_green_svg__SVGID_00000132776771348176537970000000929640383020554941_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("radialGradient", {
                            id: "hashport_green_svg__SVGID_00000016788929378299907820000010618261594198366119_",
                            cx: -66.515,
                            cy: 386.503,
                            r: .281,
                            gradientTransform: "matrix(204.3085 0 0 239.6028 14093.92 -92531.102)",
                            gradientUnits: "userSpaceOnUse"
                        }, l6.createElement("stop", {
                            offset: 0,
                            style: {
                                stopColor: "#ababab"
                            }
                        }), l6.createElement("stop", {
                            offset: 1,
                            style: {
                                stopColor: "#a6a6a6"
                            }
                        })), l6.createElement("path", {
                            style: {
                                clipPath: "url(#hashport_green_svg__SVGID_00000062898385767109675530000004951200592406248626_)",
                                fill: "url(#hashport_green_svg__SVGID_00000016788929378299907820000010618261594198366119_)"
                            },
                            d: "M462.2 6.9h91v138.2h-91z"
                        })), eF || (eF = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_green_svg__SVGID_00000153704716356085411860000011206702324176884408_",
                            d: "M372.3-8h235.8v166.7H372.3z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_green_svg__SVGID_00000009587737088005705190000004936672482692275344_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_green_svg__SVGID_00000153704716356085411860000011206702324176884408_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("g", {
                            style: {
                                clipPath: "url(#hashport_green_svg__SVGID_00000009587737088005705190000004936672482692275344_)"
                            }
                        }, eW || (eW = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_green_svg__SVGID_00000044864007727585687930000002727825458992125624_",
                            d: "M372.3-8h235.8v166.7H372.3z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_green_svg__SVGID_00000104685752401939936780000018194420985133367983_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_green_svg__SVGID_00000044864007727585687930000002727825458992125624_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("g", {
                            style: {
                                opacity: .4,
                                clipPath: "url(#hashport_green_svg__SVGID_00000104685752401939936780000018194420985133367983_)"
                            }
                        }, eU || (eU = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_green_svg__SVGID_00000000926545914905352210000008159769785124852139_",
                            d: "M462.2 6.9h84.6v138h-84.6z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_green_svg__SVGID_00000139279563518792398490000013375888721479656595_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_green_svg__SVGID_00000000926545914905352210000008159769785124852139_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("path", {
                            style: {
                                clipPath: "url(#hashport_green_svg__SVGID_00000139279563518792398490000013375888721479656595_)",
                                fill: "#fefefe"
                            },
                            d: "M524.9 7.1c18.9 1.2 24.6 28.3 10.7 63.5-15.1 38.3-44.7 69.5-67.6 73.4-2 .3-4 .4-5.7.3 2.7.7 5.7.9 9.2.3 22.9-3.9 52.5-35.1 67.6-73.4 14.7-37.5 7.6-66.4-14.2-64.1"
                        })), eQ || (eQ = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_green_svg__SVGID_00000021104040409066672500000007180344143316507291_",
                            d: "M372.3-8h235.8v166.7H372.3z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_green_svg__SVGID_00000082365234760409916400000018326854780077371536_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_green_svg__SVGID_00000021104040409066672500000007180344143316507291_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("path", {
                            style: {
                                clipPath: "url(#hashport_green_svg__SVGID_00000082365234760409916400000018326854780077371536_)"
                            },
                            d: "M464.1 144.3c1.4 0 2.9-.1 4.4-.4 22.9-3.9 52.5-35.1 67.6-73.4 14-35.4 8.2-62.5-10.9-63.5.7-.1 1.3-.1 1.9-.1-.7 0-1.5 0-2.2.1 19 1.1 24.8 28.2 10.9 63.5-15.1 38.3-44.7 69.5-67.6 73.4-1.5.3-2.9.4-4.3.4h.2"
                        }), eq || (eq = l6.createElement("defs", null, l6.createElement("path", {
                            id: "hashport_green_svg__SVGID_00000023239194230424479340000004350522573285300629_",
                            d: "M372.3-8h235.8v166.7H372.3z"
                        }))), l6.createElement("clipPath", {
                            id: "hashport_green_svg__SVGID_00000168084187594473760540000004514874064668574853_"
                        }, l6.createElement("use", {
                            xlinkHref: "#hashport_green_svg__SVGID_00000023239194230424479340000004350522573285300629_",
                            style: {
                                overflow: "visible"
                            }
                        })), l6.createElement("path", {
                            style: {
                                clipPath: "url(#hashport_green_svg__SVGID_00000168084187594473760540000004514874064668574853_)"
                            },
                            d: "M462.6 144.3h-.4c1.6.4 3.3.7 5.1.7-1.7-.1-3.3-.3-4.7-.7"
                        })))), eR || (eR = l6.createElement("g", {
                            id: "hashport_green_svg__TypeFace"
                        }, l6.createElement("g", {
                            id: "hashport_green_svg__rt_-_OUTLINES"
                        }, l6.createElement("path", {
                            className: "hashport_green_svg__st14",
                            d: "M559.2 107.9c-1.6 0-2.9-.5-3.8-1.4-.9-.9-1.4-2.2-1.4-3.8V37.9c0-1.6.5-2.9 1.4-3.8.9-.9 2.2-1.4 3.8-1.4 1.6 0 2.9.5 3.8 1.4.9.9 1.4 2.2 1.4 3.8v64.7c0 1.6-.5 2.9-1.4 3.8-.8 1-2.1 1.5-3.8 1.5zm-.8-46.4c.3-5.7 1.8-10.8 4.5-15.3s6.2-8 10.6-10.6c4.3-2.6 9.2-3.8 14.5-3.8 4.2 0 7.5.6 9.8 1.8 2.3 1.2 3.2 2.9 2.6 5.2-.4 1.4-1 2.3-1.9 2.7-.9.5-1.9.6-3.2.5-1.2-.1-2.6-.2-4.2-.3-5.1-.5-9.7.1-13.7 1.6s-7.1 3.8-9.5 6.9c-2.3 3.1-3.5 6.8-3.5 11.1l-6 .2zM612.1 44.6c-1.4 0-2.5-.4-3.4-1.3-.9-.9-1.4-1.9-1.4-3.2 0-1.4.5-2.5 1.4-3.4.9-.9 2.1-1.3 3.4-1.3h35c1.4 0 2.5.4 3.4 1.3.9.9 1.4 2 1.4 3.4 0 1.3-.5 2.4-1.4 3.2-.9.9-2.1 1.3-3.4 1.3h-35zm34.3 63.3c-4.9 0-9.2-1.1-13-3.4-3.8-2.3-6.8-5.4-9-9.4s-3.3-8.5-3.3-13.7V14.1c0-1.6.5-2.8 1.4-3.8 1-1 2.2-1.5 3.8-1.5 1.6 0 2.8.5 3.8 1.5s1.5 2.3 1.5 3.8v67.2c0 4.7 1.4 8.5 4.1 11.5 2.7 3 6.3 4.5 10.6 4.5h3.7c1.5 0 2.7.5 3.6 1.5.9 1 1.4 2.3 1.4 3.8 0 1.6-.5 2.8-1.6 3.8s-2.5 1.4-4.1 1.4h-2.9z"
                        })), l6.createElement("g", {
                            id: "hashport_green_svg__Hashp_-_OUTLINES"
                        }, l6.createElement("path", {
                            className: "hashport_green_svg__st14",
                            d: "M5.4 77.2c-1.6 0-3-.5-3.9-1.5-1-1-1.4-2.3-1.4-3.8v-66c0-1.6.5-3 1.4-3.9S3.8.6 5.4.6C6.9.5 8.2 1 9.1 2c1 1 1.4 2.3 1.4 3.9v66c0 1.6-.5 2.8-1.4 3.8-.9 1-2.2 1.5-3.7 1.5zm0 30.7c-1.6 0-3-.5-3.9-1.4S0 104.2 0 102.6V38c0-1.6.5-3 1.4-3.9s2.3-1.4 3.9-1.4 2.8.5 3.8 1.4 1.4 2.3 1.4 3.9v64.6c0 1.6-.5 2.8-1.4 3.8s-2.2 1.5-3.7 1.5zm59.1 0c-1.6 0-2.8-.5-3.8-1.5s-1.5-2.2-1.5-3.7V66.9c0-5.7-1.1-10.4-3.2-14-2.2-3.7-5.1-6.4-8.8-8.2-3.7-1.8-7.9-2.7-12.6-2.7-4.5 0-8.5.9-12.2 2.6-3.6 1.7-6.5 4.1-8.6 7.1-2.1 3-3.2 6.5-3.2 10.3H3c.2-5.8 1.8-11 4.7-15.5 2.9-4.5 6.8-8.1 11.7-10.7 4.9-2.6 10.3-3.9 16.2-3.9 6.5 0 12.3 1.4 17.5 4.1 5.1 2.7 9.2 6.7 12.2 11.9s4.5 11.6 4.5 19.1v35.7c0 1.5-.5 2.7-1.5 3.7-1.1 1-2.4 1.5-3.8 1.5zM126.2 108.5c-7.1 0-13.4-1.7-19-5s-10-7.9-13.3-13.7C90.6 84 89 77.5 89 70.3c0-7.3 1.7-13.9 5-19.7 3.3-5.8 7.9-10.3 13.7-13.7 5.8-3.3 12.3-5 19.5-5 7.2 0 13.7 1.7 19.4 5 5.7 3.3 10.3 7.9 13.6 13.7 3.3 5.8 5.1 12.3 5.2 19.7l-4.3 3.3c0 6.6-1.5 12.5-4.6 17.8-3.1 5.3-7.2 9.4-12.5 12.5-5.2 3.1-11.2 4.6-17.8 4.6zm1.1-9.6c5.3 0 10.1-1.2 14.2-3.7 4.2-2.5 7.5-5.9 9.9-10.2 2.4-4.4 3.6-9.2 3.6-14.6 0-5.5-1.2-10.4-3.6-14.7-2.4-4.3-5.7-7.7-9.9-10.2-4.2-2.5-8.9-3.8-14.2-3.8-5.2 0-9.9 1.3-14.2 3.8-4.2 2.5-7.6 5.9-10 10.2-2.5 4.3-3.7 9.2-3.7 14.7 0 5.4 1.2 10.3 3.7 14.6 2.5 4.4 5.8 7.8 10 10.2 4.2 2.5 8.9 3.7 14.2 3.7zm32.8 9c-1.6 0-2.8-.5-3.8-1.4-1-1-1.5-2.2-1.5-3.8V79.1l2.6-10.9 8.1 2.1v32.3c0 1.6-.5 2.8-1.5 3.8-1.1 1-2.3 1.5-3.9 1.5zM212.3 108.5c-5.4 0-10.8-.9-16.1-2.7-5.3-1.8-9.6-4.6-12.9-8.2-1-1.1-1.4-2.3-1.2-3.7.2-1.4.9-2.6 2.1-3.6 1.3-.9 2.6-1.3 4-1.1 1.4.2 2.5.8 3.4 1.8 2.2 2.6 5.1 4.5 8.7 5.9 3.6 1.4 7.6 2.1 12 2.1 6.8 0 11.7-1.2 14.7-3.5s4.6-5.2 4.7-8.5c0-3.3-1.6-6-4.7-8.2-3.1-2.2-8.2-3.8-15.4-5-9.3-1.5-16-4-20.3-7.7-4.3-3.7-6.5-8-6.5-13.1 0-4.7 1.2-8.6 3.7-11.7 2.5-3.1 5.8-5.4 9.9-7 4.1-1.6 8.7-2.3 13.6-2.3 6.1 0 11.4 1.1 15.9 3.2 4.4 2.1 8 4.9 10.8 8.5.9 1.2 1.3 2.4 1.1 3.7-.2 1.3-.9 2.3-2.2 3.2-1.1.6-2.4.8-3.8.6-1.4-.2-2.6-.9-3.6-2-2.3-2.7-4.9-4.6-8-5.8-3-1.2-6.5-1.9-10.4-1.9-5 0-9.1 1-12.1 3.1s-4.5 4.7-4.5 7.8c0 2.1.6 3.9 1.7 5.5s3.1 2.9 5.9 4.1c2.8 1.2 6.7 2.2 11.8 3 6.9 1.1 12.3 2.7 16.3 4.9s6.8 4.7 8.5 7.6c1.7 2.9 2.5 6 2.5 9.4 0 4.3-1.3 8.1-3.8 11.3-2.5 3.3-6 5.8-10.4 7.6-4.5 1.8-9.6 2.7-15.4 2.7zM265.5 77.2c-1.6 0-3-.5-3.9-1.5-1-1-1.4-2.3-1.4-3.8v-66c0-1.6.5-3 1.4-3.9s2.3-1.4 3.9-1.4 2.8.5 3.8 1.4c1 1 1.4 2.3 1.4 3.9v66c0 1.6-.5 2.8-1.4 3.8-1 1-2.2 1.5-3.8 1.5zm0 30.7c-1.6 0-3-.5-3.9-1.4s-1.4-2.2-1.4-3.8V38c0-1.6.5-3 1.4-3.9s2.3-1.4 3.9-1.4 2.8.5 3.8 1.4 1.4 2.3 1.4 3.9v64.6c0 1.6-.5 2.8-1.4 3.8s-2.2 1.5-3.8 1.5zm59.1 0c-1.6 0-2.8-.5-3.8-1.5s-1.5-2.2-1.5-3.7V66.9c0-5.7-1.1-10.4-3.2-14-2.2-3.7-5.1-6.4-8.8-8.2-3.7-1.8-7.9-2.7-12.6-2.7-4.5 0-8.5.9-12.2 2.6-3.6 1.7-6.5 4.1-8.6 7.1-2.1 3-3.2 6.5-3.2 10.3h-7.6c.2-5.8 1.7-10.9 4.7-15.5 2.9-4.5 6.8-8.1 11.7-10.7 4.9-2.6 10.3-3.9 16.2-3.9 6.5 0 12.3 1.4 17.5 4.1 5.1 2.7 9.2 6.7 12.2 11.9s4.5 11.6 4.5 19.1v35.7c0 1.5-.5 2.7-1.5 3.7-1.1 1-2.3 1.5-3.8 1.5zM358.6 140c-1.6 0-3-.5-3.9-1.4-1-1-1.4-2.3-1.4-3.9V69.8c.1-7.1 1.8-13.6 5.2-19.3 3.3-5.7 7.9-10.2 13.6-13.5 5.7-3.3 12.2-4.9 19.3-4.9 7.3 0 13.9 1.7 19.7 5 5.8 3.3 10.3 7.9 13.7 13.7 3.3 5.8 5 12.3 5 19.7 0 7.2-1.6 13.7-4.9 19.5-3.3 5.8-7.7 10.3-13.3 13.7-5.6 3.3-11.9 5-19 5-6.1 0-11.7-1.3-16.7-3.9-5-2.6-9-6.1-12-10.4v40.4c0 1.6-.5 3-1.4 3.9-1.1.8-2.4 1.3-3.9 1.3zm32.7-41.1c5.3 0 10.1-1.2 14.3-3.7 4.2-2.5 7.5-5.9 10-10.2 2.4-4.4 3.6-9.2 3.6-14.6 0-5.5-1.2-10.4-3.6-14.7-2.4-4.3-5.8-7.7-10-10.2-4.2-2.5-9-3.8-14.3-3.8-5.2 0-9.9 1.3-14.2 3.8-4.2 2.5-7.5 5.9-9.9 10.2-2.4 4.3-3.6 9.2-3.6 14.7 0 5.4 1.2 10.3 3.6 14.6 2.4 4.4 5.7 7.8 9.9 10.2 4.2 2.5 8.9 3.7 14.2 3.7z"
                        }))))))
                    }, {
                        style: {
                            paddingTop: 12
                        },
                        height: 55,
                        width: 200
                    }),
                    link: "https://www.hashport.network/",
                    name: "HashPort"
                }, {
                    iconA: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nh({
                            width: 278,
                            height: 55,
                            viewBox: "0 0 311 61",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, e), s || (s = l6.createElement("path", {
                            d: "M69.38 8.604c1.662-6.13 7.956-9.74 14.074-8.077 6.117 1.663 9.725 7.966 8.064 14.095-1.66 6.127-7.953 9.739-14.073 8.075-6.117-1.663-9.725-7.966-8.064-14.093Z",
                            fill: "#fff"
                        })), r || (r = l6.createElement("path", {
                            d: "M75.966 8.225a.57.57 0 0 1 0-.833.64.64 0 0 1 .874 0l3.707 3.536a.57.57 0 0 1 .019.815l-3.398 3.536a.639.639 0 0 1-.873.036.57.57 0 0 1-.038-.833l2.998-3.12-3.289-3.137Z",
                            fill: "#000"
                        })), l || (l = l6.createElement("path", {
                            opacity: .6,
                            d: "M84.847 13.82h-4.12a.824.824 0 0 0 0 1.65h4.12a.824.824 0 0 0 0-1.65Z",
                            fill: "#3C3C3C"
                        })), c || (c = l6.createElement("path", {
                            d: "M15.322 52.39c4.366 0 8.073-1.443 11.038-4.372l-3.46-3.795c-1.977 1.939-4.654 3.011-7.496 3.011-5.725 0-9.638-4.001-9.638-9.9 0-5.9 3.913-9.901 9.638-9.901 2.801 0 5.108.949 7.002 2.846l3.666-3.506c-2.924-2.97-6.59-4.497-10.832-4.497C6.301 22.276 0 28.382 0 37.334 0 46.203 6.178 52.39 15.322 52.39ZM39.015 30.98c-2.224 0-4.16.867-5.725 2.97l-.453-2.557H28.1v20.379h5.478V41.83c0-3.712 1.936-5.816 4.942-5.816 1.154 0 2.142.288 3.295 1.072l2.39-4.249c-1.319-1.237-3.295-1.856-5.19-1.856ZM54.026 30.98c-6.384 0-10.709 4.291-10.709 10.644 0 6.518 4.366 10.684 11.244 10.684 3.542 0 6.796-1.279 8.938-3.465l-3.048-3.135c-1.318 1.196-3.5 1.939-5.684 1.939-3.295 0-5.519-1.691-5.89-4.25H64.57c.906-7.548-3.172-12.416-10.544-12.416Zm.165 4.497c3.047 0 5.024 1.65 5.23 4.29H48.96c.411-2.722 2.347-4.29 5.23-4.29ZM82.981 31.393l-.37 2.434c-1.648-1.856-4.16-2.887-7.044-2.887-5.848 0-9.885 4.372-9.885 10.643 0 6.27 4.037 10.643 9.885 10.643 2.883 0 5.355-1.032 7.043-2.93l.371 2.476h4.737V31.393H82.98ZM76.68 47.44c-3.254 0-5.56-2.433-5.56-5.857 0-3.424 2.306-5.858 5.56-5.858 3.295 0 5.602 2.434 5.602 5.858 0 3.424-2.307 5.858-5.602 5.858ZM103.897 46.78c-.7.33-1.648.578-2.43.578-1.648 0-2.595-.949-2.595-2.805V35.89h5.478v-4.497h-5.478v-5.775l-5.437.578v5.197h-3.666v4.497h3.666v8.663c0 5.321 2.76 7.549 6.92 7.549 1.812 0 3.295-.289 4.983-1.072l-1.441-4.25ZM116.543 52.226c6.714 0 10.997-4.414 10.997-10.643 0-6.23-4.283-10.643-10.997-10.643-6.714 0-10.997 4.413-10.997 10.643 0 6.229 4.283 10.643 10.997 10.643Zm0-4.785c-3.377 0-5.56-2.6-5.56-5.858 0-3.26 2.183-5.858 5.56-5.858s5.56 2.599 5.56 5.858c0 3.259-2.183 5.858-5.56 5.858ZM140.826 30.98c-2.225 0-4.16.867-5.725 2.97l-.454-2.557h-4.736v20.379h5.478V41.83c0-3.712 1.936-5.816 4.942-5.816 1.153 0 2.142.288 3.295 1.072l2.39-4.249c-1.318-1.237-3.296-1.856-5.19-1.856ZM149.934 22.607c-1.73 0-2.924 1.196-2.924 2.805 0 1.237.701 2.186 1.813 2.516l-1.031 4.373h2.761c1.729-3.837 2.306-5.28 2.306-6.807 0-1.691-1.195-2.887-2.925-2.887ZM163.722 52.308c5.602 0 9.103-2.599 9.103-6.559 0-3.919-2.883-5.94-8.773-6.518-2.512-.247-3.542-.825-3.542-1.939 0-1.237 1.318-1.897 3.872-1.897 2.1 0 3.995.495 5.683 1.567l2.225-3.795c-2.142-1.444-4.984-2.31-8.156-2.31-5.436 0-8.979 2.599-8.979 6.435 0 3.672 3.131 5.982 8.361 6.395 2.802.247 3.913.825 3.913 2.062 0 1.197-1.276 1.898-3.459 1.898-2.595 0-5.355-.784-7.249-2.104l-2.265 3.878c2.594 1.856 5.725 2.887 9.266 2.887ZM196.431 35.065v4.744h7.949v5.198c-1.811 1.526-4.118 2.31-6.96 2.31-5.683 0-9.432-3.92-9.432-9.983 0-6.023 3.872-9.984 9.72-9.984 2.719 0 5.479 1.114 7.373 3.012l3.542-3.548c-2.924-3.052-6.631-4.538-10.874-4.538-9.143 0-15.445 6.188-15.445 15.058 0 9.116 5.973 15.057 15.075 15.057 4.901 0 8.937-1.609 12.026-4.827v-12.5h-12.974ZM228.519 31.393l-.371 2.434c-1.648-1.856-4.161-2.887-7.043-2.887-5.849 0-9.885 4.372-9.885 10.643 0 6.27 4.036 10.643 9.885 10.643 2.882 0 5.355-1.032 7.043-2.93l.371 2.476h4.736V31.393h-4.736Zm-6.302 16.047c-3.254 0-5.56-2.433-5.56-5.857 0-3.424 2.306-5.858 5.56-5.858 3.294 0 5.601 2.434 5.601 5.858 0 3.424-2.307 5.858-5.601 5.858ZM236.872 51.772h5.479V22.895h-5.479v28.877ZM262.027 31.393l-.371 2.434c-1.647-1.856-4.16-2.887-7.043-2.887-5.848 0-9.884 4.372-9.884 10.643 0 6.27 4.036 10.643 9.884 10.643 2.883 0 5.355-1.032 7.043-2.93l.371 2.476h4.737V31.393h-4.737Zm-6.302 16.047c-3.254 0-5.56-2.433-5.56-5.857 0-3.424 2.306-5.858 5.56-5.858 3.295 0 5.602 2.434 5.602 5.858 0 3.424-2.307 5.858-5.602 5.858ZM282.366 41.335l6.591-9.942h-6.22l-2.43 3.713-1.565 2.599-1.524-2.599-2.389-3.713h-6.343l6.631 9.942-7.126 10.437h6.262l2.347-3.506 2.1-3.424 2.101 3.424 2.265 3.506h6.384l-7.084-10.437Z",
                            fill: "#fff"
                        })), n || (n = l6.createElement("path", {
                            d: "m305.069 31.393-3.254 7.962-2.348 6.23-2.142-6.23-3.006-7.962h-5.89l7.99 20.132-4.036 9.364h5.891L311 31.393h-5.931ZM37.659 5.9H24.258v2.864h5.097V22.07h3.206V8.764h5.098V5.899ZM45.028 10.427c-1.5 0-2.699.531-3.575 1.525V5.899h-3.068V22.07h3.068v-6.006c0-1.756 1.13-2.957 2.814-2.957 1.522 0 2.422 1.016 2.422 2.772v6.191h3.067v-6.376c0-3.211-1.822-5.267-4.728-5.267ZM56.935 10.427c-3.575 0-5.997 2.403-5.997 5.96 0 3.65 2.445 5.983 6.297 5.983 1.984 0 3.806-.716 5.005-1.94l-1.706-1.756c-.739.67-1.96 1.086-3.183 1.086-1.846 0-3.091-.947-3.299-2.38h8.788c.508-4.227-1.776-6.953-5.905-6.953Zm.093 2.518c1.707 0 2.814.924 2.929 2.403h-5.858c.23-1.525 1.314-2.403 2.929-2.403Z",
                            fill: "#fff"
                        })))
                    }, {
                        height: 55,
                        width: 200
                    }),
                    iconB: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", ni({
                            width: 278,
                            height: 55,
                            viewBox: "0 0 311 61",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, e), h || (h = l6.createElement("path", {
                            d: "M69.38 8.604c1.662-6.13 7.956-9.74 14.074-8.077 6.117 1.663 9.725 7.966 8.064 14.095-1.66 6.127-7.953 9.739-14.073 8.075-6.117-1.663-9.725-7.966-8.064-14.093Z",
                            fill: "#69ff52"
                        })), i || (i = l6.createElement("path", {
                            d: "M75.966 8.225a.57.57 0 0 1 0-.833.64.64 0 0 1 .874 0l3.707 3.536a.57.57 0 0 1 .019.815l-3.398 3.536a.639.639 0 0 1-.873.036.57.57 0 0 1-.038-.833l2.998-3.12-3.289-3.137Z",
                            fill: "#000"
                        })), _ || (_ = l6.createElement("path", {
                            opacity: .6,
                            d: "M84.847 13.82h-4.12a.824.824 0 0 0 0 1.65h4.12a.824.824 0 0 0 0-1.65Z",
                            fill: "#3C3C3C"
                        })), o || (o = l6.createElement("path", {
                            d: "M15.322 52.39c4.366 0 8.073-1.443 11.038-4.372l-3.46-3.795c-1.977 1.939-4.654 3.011-7.496 3.011-5.725 0-9.638-4.001-9.638-9.9 0-5.9 3.913-9.901 9.638-9.901 2.801 0 5.108.949 7.002 2.846l3.666-3.506c-2.924-2.97-6.59-4.497-10.832-4.497C6.301 22.276 0 28.382 0 37.334 0 46.203 6.178 52.39 15.322 52.39ZM39.015 30.98c-2.224 0-4.16.867-5.725 2.97l-.453-2.557H28.1v20.379h5.478V41.83c0-3.712 1.936-5.816 4.942-5.816 1.154 0 2.142.288 3.295 1.072l2.39-4.249c-1.319-1.237-3.295-1.856-5.19-1.856ZM54.026 30.98c-6.384 0-10.709 4.291-10.709 10.644 0 6.518 4.366 10.684 11.244 10.684 3.542 0 6.796-1.279 8.938-3.465l-3.048-3.135c-1.318 1.196-3.5 1.939-5.684 1.939-3.295 0-5.519-1.691-5.89-4.25H64.57c.906-7.548-3.172-12.416-10.544-12.416Zm.165 4.497c3.047 0 5.024 1.65 5.23 4.29H48.96c.411-2.722 2.347-4.29 5.23-4.29ZM82.981 31.393l-.37 2.434c-1.648-1.856-4.16-2.887-7.044-2.887-5.848 0-9.885 4.372-9.885 10.643 0 6.27 4.037 10.643 9.885 10.643 2.883 0 5.355-1.032 7.043-2.93l.371 2.476h4.737V31.393H82.98ZM76.68 47.44c-3.254 0-5.56-2.433-5.56-5.857 0-3.424 2.306-5.858 5.56-5.858 3.295 0 5.602 2.434 5.602 5.858 0 3.424-2.307 5.858-5.602 5.858ZM103.897 46.78c-.7.33-1.648.578-2.43.578-1.648 0-2.595-.949-2.595-2.805V35.89h5.478v-4.497h-5.478v-5.775l-5.437.578v5.197h-3.666v4.497h3.666v8.663c0 5.321 2.76 7.549 6.92 7.549 1.812 0 3.295-.289 4.983-1.072l-1.441-4.25ZM116.543 52.226c6.714 0 10.997-4.414 10.997-10.643 0-6.23-4.283-10.643-10.997-10.643-6.714 0-10.997 4.413-10.997 10.643 0 6.229 4.283 10.643 10.997 10.643Zm0-4.785c-3.377 0-5.56-2.6-5.56-5.858 0-3.26 2.183-5.858 5.56-5.858s5.56 2.599 5.56 5.858c0 3.259-2.183 5.858-5.56 5.858ZM140.826 30.98c-2.225 0-4.16.867-5.725 2.97l-.454-2.557h-4.736v20.379h5.478V41.83c0-3.712 1.936-5.816 4.942-5.816 1.153 0 2.142.288 3.295 1.072l2.39-4.249c-1.318-1.237-3.296-1.856-5.19-1.856ZM149.934 22.607c-1.73 0-2.924 1.196-2.924 2.805 0 1.237.701 2.186 1.813 2.516l-1.031 4.373h2.761c1.729-3.837 2.306-5.28 2.306-6.807 0-1.691-1.195-2.887-2.925-2.887ZM163.722 52.308c5.602 0 9.103-2.599 9.103-6.559 0-3.919-2.883-5.94-8.773-6.518-2.512-.247-3.542-.825-3.542-1.939 0-1.237 1.318-1.897 3.872-1.897 2.1 0 3.995.495 5.683 1.567l2.225-3.795c-2.142-1.444-4.984-2.31-8.156-2.31-5.436 0-8.979 2.599-8.979 6.435 0 3.672 3.131 5.982 8.361 6.395 2.802.247 3.913.825 3.913 2.062 0 1.197-1.276 1.898-3.459 1.898-2.595 0-5.355-.784-7.249-2.104l-2.265 3.878c2.594 1.856 5.725 2.887 9.266 2.887ZM196.431 35.065v4.744h7.949v5.198c-1.811 1.526-4.118 2.31-6.96 2.31-5.683 0-9.432-3.92-9.432-9.983 0-6.023 3.872-9.984 9.72-9.984 2.719 0 5.479 1.114 7.373 3.012l3.542-3.548c-2.924-3.052-6.631-4.538-10.874-4.538-9.143 0-15.445 6.188-15.445 15.058 0 9.116 5.973 15.057 15.075 15.057 4.901 0 8.937-1.609 12.026-4.827v-12.5h-12.974ZM228.519 31.393l-.371 2.434c-1.648-1.856-4.161-2.887-7.043-2.887-5.849 0-9.885 4.372-9.885 10.643 0 6.27 4.036 10.643 9.885 10.643 2.882 0 5.355-1.032 7.043-2.93l.371 2.476h4.736V31.393h-4.736Zm-6.302 16.047c-3.254 0-5.56-2.433-5.56-5.857 0-3.424 2.306-5.858 5.56-5.858 3.294 0 5.601 2.434 5.601 5.858 0 3.424-2.307 5.858-5.601 5.858ZM236.872 51.772h5.479V22.895h-5.479v28.877ZM262.027 31.393l-.371 2.434c-1.647-1.856-4.16-2.887-7.043-2.887-5.848 0-9.884 4.372-9.884 10.643 0 6.27 4.036 10.643 9.884 10.643 2.883 0 5.355-1.032 7.043-2.93l.371 2.476h4.737V31.393h-4.737Zm-6.302 16.047c-3.254 0-5.56-2.433-5.56-5.857 0-3.424 2.306-5.858 5.56-5.858 3.295 0 5.602 2.434 5.602 5.858 0 3.424-2.307 5.858-5.602 5.858ZM282.366 41.335l6.591-9.942h-6.22l-2.43 3.713-1.565 2.599-1.524-2.599-2.389-3.713h-6.343l6.631 9.942-7.126 10.437h6.262l2.347-3.506 2.1-3.424 2.101 3.424 2.265 3.506h6.384l-7.084-10.437Z",
                            fill: "#69ff52"
                        })), d || (d = l6.createElement("path", {
                            d: "m305.069 31.393-3.254 7.962-2.348 6.23-2.142-6.23-3.006-7.962h-5.89l7.99 20.132-4.036 9.364h5.891L311 31.393h-5.931ZM37.659 5.9H24.258v2.864h5.097V22.07h3.206V8.764h5.098V5.899ZM45.028 10.427c-1.5 0-2.699.531-3.575 1.525V5.899h-3.068V22.07h3.068v-6.006c0-1.756 1.13-2.957 2.814-2.957 1.522 0 2.422 1.016 2.422 2.772v6.191h3.067v-6.376c0-3.211-1.822-5.267-4.728-5.267ZM56.935 10.427c-3.575 0-5.997 2.403-5.997 5.96 0 3.65 2.445 5.983 6.297 5.983 1.984 0 3.806-.716 5.005-1.94l-1.706-1.756c-.739.67-1.96 1.086-3.183 1.086-1.846 0-3.091-.947-3.299-2.38h8.788c.508-4.227-1.776-6.953-5.905-6.953Zm.093 2.518c1.707 0 2.814.924 2.929 2.403h-5.858c.23-1.525 1.314-2.403 2.929-2.403Z",
                            fill: "#69ff52"
                        })))
                    }, {
                        height: 55,
                        width: 200
                    }),
                    link: "https://www.creatorsgalaxyfoundation.com/",
                    name: "Calaxy"
                }, {
                    iconA: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nR({
                            width: 241,
                            height: 39,
                            viewBox: "0 0 254 41",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, e), l2 || (l2 = l6.createElement("g", {
                            clipPath: "url(#tunefm_svg__a)",
                            fill: "#F2F2F2"
                        }, l6.createElement("path", {
                            d: "M235.343 37.013h-7.869c-.028-.533-.076-1.038-.076-1.543-.007-3.705 0-7.41-.009-11.116a14.815 14.815 0 0 0-.126-1.952c-.422-3.14-2.469-4.978-5.364-4.845-3.089.142-5.083 2.113-5.162 5.364-.099 4.138-.041 8.28-.058 12.422 0 .516-.043 1.03-.07 1.634h-7.74V11.106h7.775v3.351c2.583-2.734 5.531-4.22 9.218-3.952 3.65.264 6.431 1.967 8.256 5.358.267-.328.435-.507.576-.704 2.535-3.725 6.125-5.076 10.415-4.6 4.913.547 8.597 4.384 8.783 9.416.202 5.486.072 10.984.08 16.476a2.952 2.952 0 0 1-.115.55h-7.752c-.02-.449-.057-.908-.058-1.368-.008-4.226.052-8.457-.032-12.684-.077-3.915-3.206-6.188-6.919-5.154-2.248.626-3.703 2.643-3.73 5.347-.042 4.054-.015 8.108-.017 12.162l-.006 1.709ZM35.873 22.913C35.819 33 27.765 41.07 17.824 41 7.992 40.929-.099 32.653 0 22.765.103 12.734 8.23 4.674 18.164 4.752c9.798.077 17.762 8.245 17.709 18.162Zm-9.94 3.991c-.937-.912-1.95-1.155-3.104-.656-2.316 1-4.068 4.643-3.415 7.124.535 2.031 2.01 2.683 3.837 1.695 5.46-2.95 8.172-8.812 6.914-14.95-1.45-7.069-8.313-11.587-15.13-9.96-5.38 1.279-9.55 6.454-9.695 12.263-.141 5.586 2.267 9.805 7.063 12.58 2.074 1.203 3.929.184 4.053-2.267.106-2.06-.702-3.83-2.098-5.303-1.471-1.554-2.705-1.73-4.57-.733a6.1 6.1 0 0 1-.616-4.628c.922-3.483 4.458-5.98 8.584-6.05 4.083-.07 7.882 2.437 8.816 5.917.45 1.671.338 3.338-.638 4.963v.005ZM195.087 37.013h-7.934v-1.555c0-5.493-.031-10.988.024-16.48.013-1.159-.329-1.535-1.462-1.478-1.703.083-3.414.02-5.196.02v-6.499c1.728 0 3.478-.071 5.216.026 1.152.065 1.519-.324 1.441-1.473-.083-1.214-.103-2.456.061-3.657.479-3.505 2.989-5.751 6.675-5.855 3.956-.111 7.916-.023 11.869-.062.799-.007 1.063.312 1.046 1.075a70.525 70.525 0 0 0 0 3.793c.03.869-.331 1.116-1.152 1.101-2.366-.042-4.733-.023-7.098-.01-3.111.02-3.648 1.772-3.446 4.406.02.243.635.615.983.626 1.978.06 3.957.03 5.937.03h1.563c0 2.029.035 3.933-.045 5.832-.01.235-.624.624-.969.635-1.977.062-3.96.097-5.935.008-1.211-.054-1.636.288-1.62 1.588.07 5.407.03 10.814.03 16.22l.012 1.709ZM162.058 24.788h-1.571c-6.063 0-12.125.023-18.187-.021-1.119-.008-1.526.227-1.327 1.466.659 4.108 2.693 7.142 6.739 8.206 4.093 1.078 7.788.235 10.766-3.169.555-.633 1.881-.568 2.851-.822l.23.38c-.212.491-.365 1.02-.645 1.467-1.959 3.123-4.875 4.623-8.394 5.212-6.64 1.11-12.675-2.859-14.268-9.461-1.74-7.207 2.363-14.104 9.264-15.575 6.861-1.46 13.319 3.141 14.26 10.154.087.643.168 1.286.282 2.163Zm-20.809-2.602h17.289c-.284-3.874-3.953-7.195-8.021-7.335-4.865-.178-8.624 2.757-9.268 7.335ZM110.716 37.024h-2.78V12.942h2.714v4.49l.475.307c.078-.235.116-.487.238-.687 2.367-3.788 6.092-5.468 10.244-4.637 4.264.854 7.721 4.054 8.024 8.43.372 5.322.088 10.693.088 16.133h-2.659c-.021-.423-.065-.884-.066-1.343-.006-3.793.024-7.586-.02-11.379a13.975 13.975 0 0 0-.383-3.228c-1.047-4.136-4.297-6.295-8.778-5.923-3.513.291-6.654 3.358-6.881 7.172-.252 4.258-.159 8.536-.214 12.806-.009.602-.002 1.203-.002 1.941ZM47.785 12.849c2.19 0 4.248-.05 6.306.021 1.015.035 1.358-.297 1.34-1.326-.053-2.833-.018-5.667-.018-8.499V1.602c.23-.14.294-.216.368-.223 2.541-.22 2.541-.22 2.541 2.337v7.062c0 2.465-.02 2.05 1.982 2.066 2.746.02 5.493 0 8.181 0 .105.175.179.244.19.323.298 2.388.292 2.393-2.089 2.395-2.38 0-4.73.023-7.096-.013-.79-.013-1.187.18-1.175 1.075.06 4.226-.021 8.457.142 12.678.132 3.388 1.81 4.885 5.197 4.98 1.628.046 3.258.008 4.992.008v2.92c-2.72-.167-5.397-.108-7.99-.55-3.201-.547-5.061-2.921-5.153-6.275-.115-4.355-.07-8.716-.091-13.074-.008-1.748 0-1.748-1.78-1.75h-4.258c-1.801 0-1.822-.02-1.728-1.8.012-.25.075-.497.139-.912ZM94.999 12.92h2.873c.053.293.088.59.106.887 0 4.447.042 8.894-.01 13.34-.07 6.041-4.342 10.423-10.289 10.42-1.812 0-3.725-.234-5.415-.859-3.701-1.356-5.82-4.333-6.031-8.216-.28-5.133-.07-10.28-.07-15.532h2.803c.034.47.098.972.1 1.476.008 3.923.008 7.846 0 11.77 0 1.86.251 3.654 1.293 5.241 1.904 2.893 5.599 4.075 9.286 2.988 3.17-.94 5.26-3.728 5.326-7.36.074-4.14.024-8.283.028-12.424v-1.732ZM177.708 37.068c-2.804 0-5.503.024-8.2-.04-.271-.006-.753-.548-.76-.851-.061-2.653-.031-5.307-.039-7.961 0-.623.188-.956.89-.949 2.657.027 5.315.01 8.109.01v9.79Z"
                        }))), l3 || (l3 = l6.createElement("defs", null, l6.createElement("clipPath", {
                            id: "tunefm_svg__a"
                        }, l6.createElement("path", {
                            fill: "#fff",
                            d: "M0 0h254v41H0z"
                        })))))
                    }, {
                        height: 55,
                        width: 200
                    }),
                    iconB: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nY({
                            width: 241,
                            height: 39,
                            viewBox: "0 0 254 41",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, e), l5 || (l5 = l6.createElement("g", {
                            clipPath: "url(#tunefm_green_svg__a)",
                            fill: "#69ff52"
                        }, l6.createElement("path", {
                            d: "M235.343 37.013h-7.869c-.028-.533-.076-1.038-.076-1.543-.007-3.705 0-7.41-.009-11.116a14.815 14.815 0 0 0-.126-1.952c-.422-3.14-2.469-4.978-5.364-4.845-3.089.142-5.083 2.113-5.162 5.364-.099 4.138-.041 8.28-.058 12.422 0 .516-.043 1.03-.07 1.634h-7.74V11.106h7.775v3.351c2.583-2.734 5.531-4.22 9.218-3.952 3.65.264 6.431 1.967 8.256 5.358.267-.328.435-.507.576-.704 2.535-3.725 6.125-5.076 10.415-4.6 4.913.547 8.597 4.384 8.783 9.416.202 5.486.072 10.984.08 16.476a2.952 2.952 0 0 1-.115.55h-7.752c-.02-.449-.057-.908-.058-1.368-.008-4.226.052-8.457-.032-12.684-.077-3.915-3.206-6.188-6.919-5.154-2.248.626-3.703 2.643-3.73 5.347-.042 4.054-.015 8.108-.017 12.162l-.006 1.709ZM35.873 22.913C35.819 33 27.765 41.07 17.824 41 7.992 40.929-.099 32.653 0 22.765.103 12.734 8.23 4.674 18.164 4.752c9.798.077 17.762 8.245 17.709 18.162Zm-9.94 3.991c-.937-.912-1.95-1.155-3.104-.656-2.316 1-4.068 4.643-3.415 7.124.535 2.031 2.01 2.683 3.837 1.695 5.46-2.95 8.172-8.812 6.914-14.95-1.45-7.069-8.313-11.587-15.13-9.96-5.38 1.279-9.55 6.454-9.695 12.263-.141 5.586 2.267 9.805 7.063 12.58 2.074 1.203 3.929.184 4.053-2.267.106-2.06-.702-3.83-2.098-5.303-1.471-1.554-2.705-1.73-4.57-.733a6.1 6.1 0 0 1-.616-4.628c.922-3.483 4.458-5.98 8.584-6.05 4.083-.07 7.882 2.437 8.816 5.917.45 1.671.338 3.338-.638 4.963v.005ZM195.087 37.013h-7.934v-1.555c0-5.493-.031-10.988.024-16.48.013-1.159-.329-1.535-1.462-1.478-1.703.083-3.414.02-5.196.02v-6.499c1.728 0 3.478-.071 5.216.026 1.152.065 1.519-.324 1.441-1.473-.083-1.214-.103-2.456.061-3.657.479-3.505 2.989-5.751 6.675-5.855 3.956-.111 7.916-.023 11.869-.062.799-.007 1.063.312 1.046 1.075a70.525 70.525 0 0 0 0 3.793c.03.869-.331 1.116-1.152 1.101-2.366-.042-4.733-.023-7.098-.01-3.111.02-3.648 1.772-3.446 4.406.02.243.635.615.983.626 1.978.06 3.957.03 5.937.03h1.563c0 2.029.035 3.933-.045 5.832-.01.235-.624.624-.969.635-1.977.062-3.96.097-5.935.008-1.211-.054-1.636.288-1.62 1.588.07 5.407.03 10.814.03 16.22l.012 1.709ZM162.058 24.788h-1.571c-6.063 0-12.125.023-18.187-.021-1.119-.008-1.526.227-1.327 1.466.659 4.108 2.693 7.142 6.739 8.206 4.093 1.078 7.788.235 10.766-3.169.555-.633 1.881-.568 2.851-.822l.23.38c-.212.491-.365 1.02-.645 1.467-1.959 3.123-4.875 4.623-8.394 5.212-6.64 1.11-12.675-2.859-14.268-9.461-1.74-7.207 2.363-14.104 9.264-15.575 6.861-1.46 13.319 3.141 14.26 10.154.087.643.168 1.286.282 2.163Zm-20.809-2.602h17.289c-.284-3.874-3.953-7.195-8.021-7.335-4.865-.178-8.624 2.757-9.268 7.335ZM110.716 37.024h-2.78V12.942h2.714v4.49l.475.307c.078-.235.116-.487.238-.687 2.367-3.788 6.092-5.468 10.244-4.637 4.264.854 7.721 4.054 8.024 8.43.372 5.322.088 10.693.088 16.133h-2.659c-.021-.423-.065-.884-.066-1.343-.006-3.793.024-7.586-.02-11.379a13.975 13.975 0 0 0-.383-3.228c-1.047-4.136-4.297-6.295-8.778-5.923-3.513.291-6.654 3.358-6.881 7.172-.252 4.258-.159 8.536-.214 12.806-.009.602-.002 1.203-.002 1.941ZM47.785 12.849c2.19 0 4.248-.05 6.306.021 1.015.035 1.358-.297 1.34-1.326-.053-2.833-.018-5.667-.018-8.499V1.602c.23-.14.294-.216.368-.223 2.541-.22 2.541-.22 2.541 2.337v7.062c0 2.465-.02 2.05 1.982 2.066 2.746.02 5.493 0 8.181 0 .105.175.179.244.19.323.298 2.388.292 2.393-2.089 2.395-2.38 0-4.73.023-7.096-.013-.79-.013-1.187.18-1.175 1.075.06 4.226-.021 8.457.142 12.678.132 3.388 1.81 4.885 5.197 4.98 1.628.046 3.258.008 4.992.008v2.92c-2.72-.167-5.397-.108-7.99-.55-3.201-.547-5.061-2.921-5.153-6.275-.115-4.355-.07-8.716-.091-13.074-.008-1.748 0-1.748-1.78-1.75h-4.258c-1.801 0-1.822-.02-1.728-1.8.012-.25.075-.497.139-.912ZM94.999 12.92h2.873c.053.293.088.59.106.887 0 4.447.042 8.894-.01 13.34-.07 6.041-4.342 10.423-10.289 10.42-1.812 0-3.725-.234-5.415-.859-3.701-1.356-5.82-4.333-6.031-8.216-.28-5.133-.07-10.28-.07-15.532h2.803c.034.47.098.972.1 1.476.008 3.923.008 7.846 0 11.77 0 1.86.251 3.654 1.293 5.241 1.904 2.893 5.599 4.075 9.286 2.988 3.17-.94 5.26-3.728 5.326-7.36.074-4.14.024-8.283.028-12.424v-1.732ZM177.708 37.068c-2.804 0-5.503.024-8.2-.04-.271-.006-.753-.548-.76-.851-.061-2.653-.031-5.307-.039-7.961 0-.623.188-.956.89-.949 2.657.027 5.315.01 8.109.01v9.79Z"
                        }))), l4 || (l4 = l6.createElement("defs", null, l6.createElement("clipPath", {
                            id: "tunefm_green_svg__a"
                        }, l6.createElement("path", {
                            fill: "#fff",
                            d: "M0 0h254v41H0z"
                        })))))
                    }, {
                        height: 55,
                        width: 200
                    }),
                    link: "https://tune.fm/",
                    name: "Tune.FM"
                }, {
                    iconA: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nS({
                            id: "headstarter_svg__Layer_1",
                            "data-name": "Layer 1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1204.849 363.191"
                        }, e), e$ || (e$ = l6.createElement("defs", null, l6.createElement("style", null, ".headstarter_svg__cls-1,.headstarter_svg__cls-2{fill:#fff}.headstarter_svg__cls-3{fill:#b4b4b4}.headstarter_svg__cls-4{fill:#898989}.headstarter_svg__cls-5{fill:#fbfbfb}.headstarter_svg__cls-2{stroke:#ddd;stroke-miterlimit:10}.headstarter_svg__cls-6{fill:#7b7b7b}.headstarter_svg__cls-7{fill:#cecece}"))), e1 || (e1 = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M30.825 34.085H70.41v39.964H30.825z"
                        })), e2 || (e2 = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M38.685 42.02H62.55v24.093H38.685z"
                        })), e3 || (e3 = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m70.41 34.085-7.86 7.935H38.685l-7.86-7.935H70.41z"
                        })), e5 || (e5 = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m70.41 74.049-7.86-7.935V42.02l7.86-7.935V74.05z"
                        })), e4 || (e4 = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M30.825 74.049H70.41v39.964H30.825z"
                        })), e0 || (e0 = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M38.685 81.984H62.55v24.093H38.685z"
                        })), e6 || (e6 = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m70.41 74.049-7.86 7.935H38.685l-7.86-7.935H70.41z"
                        })), e7 || (e7 = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m70.41 114.012-7.86-7.935V81.984l7.86-7.935v39.963z"
                        })), e8 || (e8 = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M30.825 114.012H70.41v39.964H30.825z"
                        })), e9 || (e9 = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M38.685 121.947H62.55v24.093H38.685z"
                        })), te || (te = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m70.41 114.012-7.86 7.935H38.685l-7.86-7.935H70.41z"
                        })), tt || (tt = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m70.41 153.976-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), ta || (ta = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M30.825 153.976H70.41v39.964H30.825z"
                        })), ts || (ts = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M38.685 161.911H62.55v24.093H38.685z"
                        })), tr || (tr = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m70.41 153.976-7.86 7.935H38.685l-7.86-7.935H70.41z"
                        })), tl || (tl = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m70.41 193.94-7.86-7.936v-24.093l7.86-7.935v39.963z"
                        })), tc || (tc = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M30.825 193.939H70.41v39.964H30.825z"
                        })), tn || (tn = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M38.685 201.874H62.55v24.093H38.685z"
                        })), th || (th = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m70.41 193.94-7.86 7.934H38.685l-7.86-7.935H70.41z"
                        })), ti || (ti = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m70.41 233.903-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), t_ || (t_ = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M30.825 233.903H70.41v39.964H30.825z"
                        })), to || (to = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M38.685 241.838H62.55v24.093H38.685z"
                        })), td || (td = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m70.41 233.903-7.86 7.935H38.685l-7.86-7.935H70.41z"
                        })), tm || (tm = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m70.41 273.866-7.86-7.935v-24.093l7.86-7.935v39.963z"
                        })), tv || (tv = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M30.825 273.866H70.41v39.964H30.825z"
                        })), tg || (tg = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M38.685 281.801H62.55v24.093H38.685z"
                        })), tp || (tp = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m70.41 273.866-7.86 7.935H38.685l-7.86-7.935H70.41z"
                        })), tf || (tf = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m70.41 313.83-7.86-7.935V281.8l7.86-7.935v39.964z"
                        })), tu || (tu = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M228.751 34.085h39.585v39.964h-39.585z"
                        })), tE || (tE = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M236.611 42.02h23.865v24.093h-23.865z"
                        })), tx || (tx = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m268.336 34.085-7.86 7.935H236.61l-7.86-7.935h39.585z"
                        })), tM || (tM = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m268.336 74.049-7.86-7.935V42.02l7.86-7.935V74.05z"
                        })), tz || (tz = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M228.751 74.049h39.585v39.964h-39.585z"
                        })), tw || (tw = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M236.611 81.984h23.865v24.093h-23.865z"
                        })), tb || (tb = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m268.336 74.049-7.86 7.935H236.61l-7.86-7.935h39.585z"
                        })), tZ || (tZ = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m268.336 114.012-7.86-7.935V81.984l7.86-7.935v39.963z"
                        })), ty || (ty = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M228.751 114.012h39.585v39.964h-39.585z"
                        })), tV || (tV = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M236.611 121.947h23.865v24.093h-23.865z"
                        })), tN || (tN = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m268.336 114.012-7.86 7.935H236.61l-7.86-7.935h39.585z"
                        })), tj || (tj = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m268.336 153.976-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), tH || (tH = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M189.165 114.012h39.585v39.964h-39.585z"
                        })), tk || (tk = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M197.025 121.947h23.865v24.093h-23.865z"
                        })), tS || (tS = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m228.75 114.012-7.86 7.935h-23.865l-7.86-7.935h39.586z"
                        })), tD || (tD = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m228.75 153.976-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), tI || (tI = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M149.58 114.012h39.585v39.964H149.58z"
                        })), tA || (tA = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M157.44 121.947h23.865v24.093H157.44z"
                        })), tP || (tP = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m189.165 114.012-7.86 7.935H157.44l-7.86-7.935h39.585z"
                        })), tO || (tO = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m189.165 153.976-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), tC || (tC = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M109.995 114.012h39.585v39.964h-39.585z"
                        })), tG || (tG = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M117.855 121.947h23.865v24.093h-23.865z"
                        })), tB || (tB = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m149.58 114.012-7.86 7.935h-23.865l-7.86-7.935h39.585z"
                        })), tL || (tL = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m149.58 153.976-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), tT || (tT = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M228.751 153.976h39.585v39.964h-39.585z"
                        })), tF || (tF = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M236.611 161.911h23.865v24.093h-23.865z"
                        })), tW || (tW = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m268.336 153.976-7.86 7.935H236.61l-7.86-7.935h39.585z"
                        })), tU || (tU = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m268.336 193.94-7.86-7.936v-24.093l7.86-7.935v39.963z"
                        })), tQ || (tQ = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M228.751 193.939h39.585v39.964h-39.585z"
                        })), tq || (tq = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M236.611 201.874h23.865v24.093h-23.865z"
                        })), tR || (tR = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m268.336 193.94-7.86 7.934H236.61l-7.86-7.935h39.585z"
                        })), tY || (tY = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m268.336 233.903-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), tX || (tX = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M228.751 233.903h39.585v39.964h-39.585z"
                        })), tK || (tK = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M236.611 241.838h23.865v24.093h-23.865z"
                        })), tJ || (tJ = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m268.336 233.903-7.86 7.935H236.61l-7.86-7.935h39.585z"
                        })), t$ || (t$ = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m268.336 273.866-7.86-7.935v-24.093l7.86-7.935v39.963z"
                        })), t1 || (t1 = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M228.751 273.866h39.585v39.964h-39.585z"
                        })), t2 || (t2 = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M236.611 281.801h23.865v24.093h-23.865z"
                        })), t3 || (t3 = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m268.336 273.866-7.86 7.935H236.61l-7.86-7.935h39.585z"
                        })), t5 || (t5 = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m268.336 313.83-7.86-7.935V281.8l7.86-7.935v39.964z"
                        })), t4 || (t4 = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M70.41 193.939h39.585v39.964H70.41z"
                        })), t0 || (t0 = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M78.27 201.874h23.865v24.093H78.27z"
                        })), t6 || (t6 = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m109.995 193.94-7.86 7.934H78.27l-7.86-7.935h39.585z"
                        })), t7 || (t7 = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m109.995 233.903-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), t8 || (t8 = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M109.995 193.939h39.585v39.964h-39.585z"
                        })), t9 || (t9 = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M117.855 201.874h23.865v24.093h-23.865z"
                        })), ae || (ae = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m149.58 193.94-7.86 7.934h-23.865l-7.86-7.935h39.585z"
                        })), at || (at = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m149.58 233.903-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), aa || (aa = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M149.58 193.939h39.585v39.964H149.58z"
                        })), as || (as = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M157.44 201.874h23.865v24.093H157.44z"
                        })), ar || (ar = l6.createElement("path", {
                            className: "headstarter_svg__cls-7",
                            d: "m189.165 193.94-7.86 7.934H157.44l-7.86-7.935h39.585z"
                        })), al || (al = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            d: "m189.165 233.903-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), ac || (ac = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            transform: "rotate(90 208.958 213.921)",
                            d: "M188.976 194.128h39.964v39.585h-39.964z"
                        })), an || (an = l6.createElement("path", {
                            className: "headstarter_svg__cls-2",
                            transform: "rotate(90 208.958 213.921)",
                            d: "M196.911 201.988h24.093v23.865h-24.093z"
                        })), ah || (ah = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "m189.165 233.903 7.86-7.935v-24.094l-7.86-7.935v39.964z"
                        })), ai || (ai = l6.createElement("path", {
                            className: "headstarter_svg__cls-4",
                            d: "m228.75 233.903-7.86-7.935h-23.865l-7.86 7.935h39.586z"
                        })), a_ || (a_ = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            transform: "rotate(90 208.958 253.888)",
                            d: "M188.976 234.095h39.964v39.585h-39.964z"
                        })), ao || (ao = l6.createElement("path", {
                            className: "headstarter_svg__cls-2",
                            transform: "rotate(90 208.958 253.888)",
                            d: "M196.911 241.955h24.093v23.865h-24.093z"
                        })), ad || (ad = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "m189.165 273.87 7.86-7.935V241.84l-7.86-7.935v39.964z"
                        })), am || (am = l6.createElement("path", {
                            className: "headstarter_svg__cls-4",
                            d: "m228.75 273.87-7.86-7.935h-23.865l-7.86 7.935h39.586z"
                        })), av || (av = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            transform: "rotate(90 169.373 253.884)",
                            d: "M149.391 234.092h39.964v39.585h-39.964z"
                        })), ag || (ag = l6.createElement("path", {
                            className: "headstarter_svg__cls-2",
                            transform: "rotate(90 169.373 253.884)",
                            d: "M157.326 241.952h24.093v23.865h-24.093z"
                        })), ap || (ap = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "m149.58 273.866 7.86-7.935v-24.093l-7.86-7.935v39.963z"
                        })), af || (af = l6.createElement("path", {
                            className: "headstarter_svg__cls-4",
                            d: "m189.165 273.866-7.86-7.935H157.44l-7.86 7.935h39.585z"
                        })), au || (au = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            transform: "rotate(90 129.788 253.881)",
                            d: "M109.806 234.088h39.964v39.585h-39.964z"
                        })), aE || (aE = l6.createElement("path", {
                            className: "headstarter_svg__cls-2",
                            transform: "rotate(90 129.788 253.881)",
                            d: "M117.741 241.948h24.093v23.865h-24.093z"
                        })), ax || (ax = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "m109.995 273.863 7.86-7.935v-24.094l-7.86-7.935v39.964z"
                        })), aM || (aM = l6.createElement("path", {
                            className: "headstarter_svg__cls-4",
                            d: "m149.58 273.863-7.86-7.935h-23.865l-7.86 7.935h39.585z"
                        })), az || (az = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            transform: "rotate(90 90.203 253.877)",
                            d: "M70.221 234.085h39.964v39.585H70.221z"
                        })), aw || (aw = l6.createElement("path", {
                            className: "headstarter_svg__cls-2",
                            transform: "rotate(90 90.203 253.877)",
                            d: "M78.156 241.945h24.093v23.865H78.156z"
                        })), ab || (ab = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "m70.41 273.86 7.86-7.936v-24.093l-7.86-7.935v39.963z"
                        })), aZ || (aZ = l6.createElement("path", {
                            className: "headstarter_svg__cls-4",
                            d: "m109.995 273.86-7.86-7.936H78.27l-7.86 7.935h39.585z"
                        })), ay || (ay = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            transform: "rotate(90 208.958 173.954)",
                            d: "M188.976 154.161h39.964v39.585h-39.964z"
                        })), aV || (aV = l6.createElement("path", {
                            className: "headstarter_svg__cls-2",
                            transform: "rotate(90 208.958 173.954)",
                            d: "M196.911 162.021h24.093v23.865h-24.093z"
                        })), aN || (aN = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "m189.165 193.936 7.86-7.935v-24.094l-7.86-7.935v39.964z"
                        })), aj || (aj = l6.createElement("path", {
                            className: "headstarter_svg__cls-4",
                            d: "M228.75 193.936 220.89 186h-23.865l-7.86 7.935h39.586z"
                        })), aH || (aH = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            transform: "rotate(90 169.373 173.954)",
                            d: "M149.391 154.161h39.964v39.585h-39.964z"
                        })), ak || (ak = l6.createElement("path", {
                            className: "headstarter_svg__cls-2",
                            transform: "rotate(90 169.373 173.954)",
                            d: "M157.326 162.021h24.093v23.865h-24.093z"
                        })), aS || (aS = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "m149.58 193.936 7.86-7.935v-24.094l-7.86-7.935v39.964z"
                        })), aD || (aD = l6.createElement("path", {
                            className: "headstarter_svg__cls-4",
                            d: "m189.165 193.936-7.86-7.935H157.44l-7.86 7.935h39.585z"
                        })), aI || (aI = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            transform: "rotate(90 129.788 173.954)",
                            d: "M109.806 154.161h39.964v39.585h-39.964z"
                        })), aA || (aA = l6.createElement("path", {
                            className: "headstarter_svg__cls-2",
                            transform: "rotate(90 129.788 173.954)",
                            d: "M117.741 162.021h24.093v23.865h-24.093z"
                        })), aP || (aP = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "m109.995 193.936 7.86-7.935v-24.094l-7.86-7.935v39.964z"
                        })), aO || (aO = l6.createElement("path", {
                            className: "headstarter_svg__cls-4",
                            d: "M149.58 193.936 141.72 186h-23.865l-7.86 7.935h39.585z"
                        })), aC || (aC = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            transform: "rotate(90 90.203 173.954)",
                            d: "M70.221 154.161h39.964v39.585H70.221z"
                        })), aG || (aG = l6.createElement("path", {
                            className: "headstarter_svg__cls-2",
                            transform: "rotate(90 90.203 173.954)",
                            d: "M78.156 162.021h24.093v23.865H78.156z"
                        })), aB || (aB = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "M70.41 193.936 78.27 186v-24.094l-7.86-7.935v39.964z"
                        })), aL || (aL = l6.createElement("path", {
                            className: "headstarter_svg__cls-4",
                            d: "m109.995 193.936-7.86-7.935H78.27l-7.86 7.935h39.585z"
                        })), aT || (aT = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            transform: "rotate(90 90.203 133.994)",
                            d: "M70.221 114.201h39.964v39.585H70.221z"
                        })), aF || (aF = l6.createElement("path", {
                            className: "headstarter_svg__cls-2",
                            transform: "rotate(90 90.203 133.994)",
                            d: "M78.156 122.061h24.093v23.865H78.156z"
                        })), aW || (aW = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "m70.41 153.976 7.86-7.935v-24.094l-7.86-7.935v39.964z"
                        })), aU || (aU = l6.createElement("path", {
                            className: "headstarter_svg__cls-4",
                            d: "m109.995 153.976-7.86-7.935H78.27l-7.86 7.935h39.585z"
                        })), aQ || (aQ = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            transform: "rotate(90 90.203 94.034)",
                            d: "M70.221 74.241h39.964v39.585H70.221z"
                        })), aq || (aq = l6.createElement("path", {
                            className: "headstarter_svg__cls-2",
                            transform: "rotate(90 90.203 94.034)",
                            d: "M78.156 82.101h24.093v23.865H78.156z"
                        })), aR || (aR = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "m70.41 114.016 7.86-7.935V81.987l-7.86-7.935v39.964z"
                        })), aY || (aY = l6.createElement("path", {
                            className: "headstarter_svg__cls-4",
                            d: "m109.995 114.016-7.86-7.935H78.27l-7.86 7.935h39.585z"
                        })), aX || (aX = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            transform: "rotate(90 129.788 94.034)",
                            d: "M109.806 74.241h39.964v39.585h-39.964z"
                        })), aK || (aK = l6.createElement("path", {
                            className: "headstarter_svg__cls-2",
                            transform: "rotate(90 129.788 94.034)",
                            d: "M117.741 82.101h24.093v23.865h-24.093z"
                        })), aJ || (aJ = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "m109.995 114.016 7.86-7.935V81.987l-7.86-7.935v39.964z"
                        })), a$ || (a$ = l6.createElement("path", {
                            className: "headstarter_svg__cls-4",
                            d: "m149.58 114.016-7.86-7.935h-23.865l-7.86 7.935h39.585z"
                        })), a1 || (a1 = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            transform: "rotate(90 169.373 94.034)",
                            d: "M149.391 74.241h39.964v39.585h-39.964z"
                        })), a2 || (a2 = l6.createElement("path", {
                            className: "headstarter_svg__cls-2",
                            transform: "rotate(90 169.373 94.034)",
                            d: "M157.326 82.101h24.093v23.865h-24.093z"
                        })), a3 || (a3 = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "m149.58 114.016 7.86-7.935V81.987l-7.86-7.935v39.964z"
                        })), a5 || (a5 = l6.createElement("path", {
                            className: "headstarter_svg__cls-4",
                            d: "m189.165 114.016-7.86-7.935H157.44l-7.86 7.935h39.585z"
                        })), a4 || (a4 = l6.createElement("path", {
                            className: "headstarter_svg__cls-1",
                            transform: "rotate(90 208.958 94.034)",
                            d: "M188.976 74.241h39.964v39.585h-39.964z"
                        })), a0 || (a0 = l6.createElement("path", {
                            className: "headstarter_svg__cls-2",
                            transform: "rotate(90 208.958 94.034)",
                            d: "M196.911 82.101h24.093v23.865h-24.093z"
                        })), a6 || (a6 = l6.createElement("path", {
                            className: "headstarter_svg__cls-6",
                            d: "m189.165 114.016 7.86-7.935V81.987l-7.86-7.935v39.964z"
                        })), a7 || (a7 = l6.createElement("path", {
                            className: "headstarter_svg__cls-4",
                            d: "m228.75 114.016-7.86-7.935h-23.865l-7.86 7.935h39.586z"
                        })), a8 || (a8 = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M307.375 129.416h16.178v41.706h48.533v-41.706h16.177v100.67h-16.177V186.94h-48.533v43.144h-16.178v-100.67ZM531.578 230.085c-5.467 0-10.531-.977-15.194-2.927-4.664-1.95-8.739-4.7-12.22-8.243-3.485-3.544-6.219-7.831-8.2-12.865-1.986-5.032-2.975-10.631-2.975-16.794s.99-11.76 2.974-16.794c1.982-5.032 4.716-9.322 8.2-12.866 3.482-3.543 7.557-6.29 12.22-8.242 4.664-1.95 9.728-2.928 15.195-2.928 4.18 0 7.879.616 11.095 1.849 3.215 1.232 5.893 2.568 8.039 4.006 2.573 1.747 4.768 3.647 6.592 5.7h.804v-10.014h16.883v78.578h-16.883v-10.786h-.804c-1.824 2.261-4.02 4.314-6.592 6.164-2.146 1.54-4.824 2.953-8.04 4.236s-6.913 1.926-11.094 1.926Zm3.216-14.637c6.858 0 12.46-2.234 16.802-6.702 4.341-4.468 6.512-10.963 6.512-19.49 0-8.525-2.17-15.022-6.512-19.49-4.341-4.469-9.944-6.703-16.802-6.703-7.291 0-13.132 2.234-17.527 6.702-4.396 4.469-6.591 10.966-6.591 19.49 0 8.528 2.195 15.023 6.591 19.491 4.395 4.468 10.236 6.702 17.527 6.702Z"
                        })), a9 || (a9 = l6.createElement("path", {
                            className: "headstarter_svg__cls-5",
                            d: "M866.556 230.085c-5.466 0-10.53-.977-15.194-2.927-4.663-1.95-8.738-4.7-12.22-8.243-3.485-3.544-6.218-7.831-8.2-12.865-1.985-5.032-2.974-10.631-2.974-16.794s.989-11.76 2.974-16.794c1.982-5.032 4.715-9.322 8.2-12.866 3.482-3.543 7.557-6.29 12.22-8.242 4.663-1.95 9.728-2.928 15.194-2.928 4.181 0 7.88.616 11.095 1.849 3.216 1.232 5.894 2.568 8.04 4.006 2.572 1.747 4.768 3.647 6.592 5.7h.804v-10.014h16.882v78.578h-16.882v-10.786h-.804c-1.824 2.261-4.02 4.314-6.593 6.164-2.145 1.54-4.823 2.953-8.039 4.236s-6.914 1.926-11.095 1.926Zm3.216-14.637c6.859 0 12.461-2.234 16.803-6.702 4.34-4.468 6.512-10.963 6.512-19.49 0-8.525-2.171-15.022-6.512-19.49-4.342-4.469-9.944-6.703-16.803-6.703-7.29 0-13.132 2.234-17.526 6.702-4.397 4.469-6.592 10.966-6.592 19.49 0 8.528 2.195 15.023 6.592 19.491 4.394 4.468 10.235 6.702 17.526 6.702ZM932.326 149.113h14.727v11.908h.703a23.71 23.71 0 0 1 4.488-6.35c1.589-1.589 3.623-3.177 6.101-4.764 2.477-1.588 5.493-2.382 9.047-2.382h8.416v15.877h-9.117c-2.806 0-5.4.536-7.785 1.608a18.975 18.975 0 0 0-6.241 4.497c-1.778 1.93-3.156 4.287-4.138 7.07-.982 2.786-1.474 5.892-1.474 9.32v44.188h-14.727v-80.972ZM1129.943 149.113h14.728v11.908h.702a23.71 23.71 0 0 1 4.488-6.35c1.589-1.589 3.623-3.177 6.102-4.764 2.476-1.588 5.492-2.382 9.047-2.382h8.416v15.877h-9.118c-2.805 0-5.4.536-7.785 1.608a18.975 18.975 0 0 0-6.241 4.497c-1.777 1.93-3.156 4.287-4.138 7.07-.982 2.786-1.473 5.892-1.473 9.32v44.188h-14.728v-80.972Z"
                        })), se || (se = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M628.6 230.085c-5.467 0-10.532-.977-15.195-2.927-4.663-1.95-8.738-4.7-12.22-8.243-3.485-3.544-6.218-7.831-8.2-12.865-1.985-5.032-2.975-10.631-2.975-16.794s.99-11.76 2.974-16.794c1.983-5.032 4.716-9.322 8.2-12.866 3.483-3.543 7.558-6.29 12.221-8.242 4.663-1.95 9.728-2.928 15.194-2.928 4.181 0 7.88.616 11.095 1.849 3.216 1.232 5.894 2.568 8.04 4.006 2.572 1.747 4.768 3.647 6.592 5.7h.804v-39.288h16.882v107.852H655.13V218.53h-.804c-1.824 2.157-4.02 4.11-6.593 5.854-2.145 1.44-4.823 2.75-8.039 3.93s-6.914 1.771-11.095 1.771Zm3.215-14.637c6.859 0 12.461-2.234 16.803-6.702 4.34-4.468 6.512-10.963 6.512-19.49 0-8.525-2.171-15.022-6.512-19.49-4.342-4.469-9.944-6.703-16.803-6.703-7.29 0-13.132 2.234-17.526 6.702-4.397 4.469-6.592 10.966-6.592 19.49 0 8.528 2.195 15.023 6.592 19.491 4.394 4.468 10.235 6.702 17.526 6.702Z"
                        })), st || (st = l6.createElement("path", {
                            className: "headstarter_svg__cls-5",
                            d: "M726.9 230.085c-4.241 0-8.013-.474-11.32-1.417-3.306-.946-6.23-2.173-8.774-3.686-2.544-1.51-4.75-3.236-6.613-5.174-1.866-1.935-3.434-3.944-4.706-6.024-3.052-4.724-5.087-10.157-6.104-16.3h15.261c.677 3.4 1.908 6.378 3.688 8.93 1.526 2.174 3.752 4.18 6.677 6.024 2.925 1.842 6.887 2.764 11.891 2.764 7.036 0 12.082-1.418 15.134-4.253 3.053-2.835 4.578-6.379 4.578-10.631 0-2.645-.763-4.841-2.289-6.591-1.525-1.747-3.541-3.236-6.041-4.465-2.501-1.227-5.363-2.315-8.584-3.26a310.634 310.634 0 0 1-9.793-3.048 122.826 122.826 0 0 1-9.793-3.685c-3.223-1.369-6.084-3.119-8.584-5.245-2.502-2.126-4.515-4.724-6.04-7.796-1.527-3.07-2.29-6.826-2.29-11.269 0-3.874.763-7.606 2.29-11.198 1.525-3.59 3.729-6.755 6.612-9.497 2.882-2.74 6.36-4.937 10.429-6.591 4.07-1.653 8.648-2.481 13.735-2.481 3.899 0 7.376.425 10.43 1.276 3.05.85 5.764 1.962 8.138 3.331 2.373 1.37 4.43 2.93 6.168 4.677 1.737 1.75 3.199 3.522 4.387 5.316 2.798 4.253 4.748 9.072 5.851 14.458h-15.262c-.593-2.644-1.653-5.008-3.178-7.087-1.358-1.794-3.33-3.424-5.914-4.89-2.588-1.464-6.127-2.198-10.62-2.198-6.021 0-10.492 1.396-13.418 4.182-2.924 2.789-4.386 6.12-4.386 9.993 0 2.647.762 4.844 2.289 6.591 1.525 1.75 3.539 3.26 6.04 4.537 2.5 1.275 5.362 2.41 8.585 3.401 3.221.993 6.486 2.034 9.793 3.119a124.672 124.672 0 0 1 9.792 3.685c3.221 1.371 6.083 3.119 8.585 5.245 2.5 2.126 4.514 4.702 6.04 7.725 1.527 3.026 2.29 6.71 2.29 11.057 0 4.063-.785 7.937-2.353 11.623-1.57 3.685-3.838 6.923-6.804 9.71-2.97 2.788-6.613 5.01-10.937 6.662s-9.284 2.48-14.88 2.48ZM783.654 163.343h-8.657v-15.278h8.657v-17.69h15.151v17.69h22.366v15.278h-22.366v43.946a7.518 7.518 0 0 0 7.518 7.518h15.57v15.278h-18.485c-10.91 0-19.754-8.844-19.754-19.754v-46.988ZM988.93 163.343h-8.657v-15.278h8.658v-17.69h15.151v17.69h22.365v15.278h-22.365v43.946a7.518 7.518 0 0 0 7.518 7.518h15.569v15.278h-18.484c-10.91 0-19.754-8.844-19.754-19.754v-46.988Z"
                        })), sa || (sa = l6.createElement("path", {
                            className: "headstarter_svg__cls-3",
                            d: "M443.231 230.085c-5.451 0-10.576-1.054-15.37-3.158-4.797-2.104-8.987-4.981-12.57-8.629-3.585-3.644-6.386-7.958-8.405-12.941-2.02-4.981-3.028-10.348-3.028-16.101 0-5.751 1.008-11.118 3.028-16.101 2.019-4.981 4.82-9.295 8.405-12.942 3.583-3.645 7.773-6.522 12.57-8.628 4.794-2.104 9.919-3.16 15.37-3.16s10.575 1.056 15.371 3.16c4.794 2.106 8.985 4.983 12.57 8.628 3.582 3.647 6.383 7.961 8.404 12.942 2.018 4.983 3.029 10.35 3.029 16.1v5.393h-62.846c.605 3.289 1.613 6.216 3.028 8.782 1.413 2.57 3.18 4.753 5.3 6.549a22.627 22.627 0 0 0 7.043 4.083c2.574.924 5.274 1.386 8.101 1.386 3.938 0 7.319-.54 10.147-1.617 2.825-1.079 5.096-2.336 6.814-3.775 2.019-1.541 3.684-3.337 4.998-5.393h16.658c-1.92 4.83-4.595 9.09-8.026 12.788-1.515 1.54-3.233 3.082-5.15 4.622-1.918 1.541-4.14 2.904-6.662 4.083-2.525 1.183-5.353 2.133-8.481 2.851-3.13.717-6.564 1.078-10.298 1.078Zm22.716-48.533c-.405-2.258-1.162-4.519-2.272-6.78a19.148 19.148 0 0 0-4.543-5.931c-1.919-1.695-4.19-3.082-6.814-4.16-2.627-1.079-5.656-1.618-9.087-1.618-2.626 0-5.175.412-7.647 1.233a22.996 22.996 0 0 0-6.815 3.62c-2.07 1.594-3.812 3.544-5.224 5.855-1.415 2.311-2.424 4.906-3.03 7.78h45.432Z"
                        })), ss || (ss = l6.createElement("path", {
                            className: "headstarter_svg__cls-5",
                            d: "M1074.38 230.085c-5.452 0-10.577-1.054-15.37-3.158-4.797-2.104-8.988-4.981-12.57-8.629-3.585-3.644-6.387-7.958-8.405-12.941-2.02-4.981-3.028-10.348-3.028-16.101 0-5.751 1.007-11.118 3.028-16.101 2.018-4.981 4.82-9.295 8.405-12.942 3.582-3.645 7.773-6.522 12.57-8.628 4.793-2.104 9.918-3.16 15.37-3.16s10.575 1.056 15.37 3.16c4.795 2.106 8.985 4.983 12.57 8.628 3.582 3.647 6.384 7.961 8.404 12.942 2.019 4.983 3.03 10.35 3.03 16.1v5.393h-62.847c.606 3.289 1.614 6.216 3.03 8.782 1.411 2.57 3.179 4.753 5.3 6.549 2.12 1.798 4.467 3.158 7.041 4.083s5.274 1.386 8.102 1.386c3.937 0 7.319-.54 10.146-1.617 2.825-1.079 5.097-2.336 6.815-3.775 2.018-1.541 3.684-3.337 4.998-5.393h16.658c-1.92 4.83-4.596 9.09-8.027 12.788-1.514 1.54-3.232 3.082-5.149 4.622-1.919 1.541-4.14 2.904-6.663 4.083-2.524 1.183-5.353 2.133-8.48 2.851-3.13.717-6.564 1.078-10.298 1.078Zm22.715-48.533c-.404-2.258-1.162-4.519-2.271-6.78a19.163 19.163 0 0 0-4.543-5.931c-1.919-1.695-4.19-3.082-6.814-4.16-2.627-1.079-5.656-1.618-9.087-1.618-2.626 0-5.175.412-7.648 1.233a23.008 23.008 0 0 0-6.814 3.62c-2.07 1.594-3.812 3.544-5.225 5.855-1.415 2.311-2.423 4.906-3.028 7.78h45.43Z"
                        })))
                    }, {
                        height: 70,
                        width: 220
                    }),
                    iconB: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nD({
                            id: "headstarter_green_svg__Layer_1",
                            "data-name": "Layer 1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1204.849 363.191"
                        }, e), sr || (sr = l6.createElement("defs", null, l6.createElement("style", null, ".headstarter_green_svg__cls-1,.headstarter_green_svg__cls-2{fill:#69ff52}.headstarter_green_svg__cls-3{fill:#83b57c}.headstarter_green_svg__cls-4{fill:#688365}.headstarter_green_svg__cls-5{fill:#69ff52}.headstarter_green_svg__cls-2{stroke:#ddd;stroke-miterlimit:10}.headstarter_green_svg__cls-6{fill:#455544}.headstarter_green_svg__cls-7{fill:#bdedba}"))), sl || (sl = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M30.825 34.085H70.41v39.964H30.825z"
                        })), sc || (sc = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M38.685 42.02H62.55v24.093H38.685z"
                        })), sn || (sn = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m70.41 34.085-7.86 7.935H38.685l-7.86-7.935H70.41z"
                        })), sh || (sh = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m70.41 74.049-7.86-7.935V42.02l7.86-7.935V74.05z"
                        })), si || (si = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M30.825 74.049H70.41v39.964H30.825z"
                        })), s_ || (s_ = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M38.685 81.984H62.55v24.093H38.685z"
                        })), so || (so = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m70.41 74.049-7.86 7.935H38.685l-7.86-7.935H70.41z"
                        })), sd || (sd = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m70.41 114.012-7.86-7.935V81.984l7.86-7.935v39.963z"
                        })), sm || (sm = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M30.825 114.012H70.41v39.964H30.825z"
                        })), sv || (sv = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M38.685 121.947H62.55v24.093H38.685z"
                        })), sg || (sg = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m70.41 114.012-7.86 7.935H38.685l-7.86-7.935H70.41z"
                        })), sp || (sp = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m70.41 153.976-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), sf || (sf = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M30.825 153.976H70.41v39.964H30.825z"
                        })), su || (su = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M38.685 161.911H62.55v24.093H38.685z"
                        })), sE || (sE = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m70.41 153.976-7.86 7.935H38.685l-7.86-7.935H70.41z"
                        })), sx || (sx = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m70.41 193.94-7.86-7.936v-24.093l7.86-7.935v39.963z"
                        })), sM || (sM = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M30.825 193.939H70.41v39.964H30.825z"
                        })), sz || (sz = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M38.685 201.874H62.55v24.093H38.685z"
                        })), sw || (sw = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m70.41 193.94-7.86 7.934H38.685l-7.86-7.935H70.41z"
                        })), sb || (sb = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m70.41 233.903-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), sZ || (sZ = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M30.825 233.903H70.41v39.964H30.825z"
                        })), sy || (sy = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M38.685 241.838H62.55v24.093H38.685z"
                        })), sV || (sV = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m70.41 233.903-7.86 7.935H38.685l-7.86-7.935H70.41z"
                        })), sN || (sN = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m70.41 273.866-7.86-7.935v-24.093l7.86-7.935v39.963z"
                        })), sj || (sj = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M30.825 273.866H70.41v39.964H30.825z"
                        })), sH || (sH = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M38.685 281.801H62.55v24.093H38.685z"
                        })), sk || (sk = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m70.41 273.866-7.86 7.935H38.685l-7.86-7.935H70.41z"
                        })), sS || (sS = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m70.41 313.83-7.86-7.935V281.8l7.86-7.935v39.964z"
                        })), sD || (sD = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M228.751 34.085h39.585v39.964h-39.585z"
                        })), sI || (sI = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M236.611 42.02h23.865v24.093h-23.865z"
                        })), sA || (sA = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m268.336 34.085-7.86 7.935H236.61l-7.86-7.935h39.585z"
                        })), sP || (sP = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m268.336 74.049-7.86-7.935V42.02l7.86-7.935V74.05z"
                        })), sO || (sO = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M228.751 74.049h39.585v39.964h-39.585z"
                        })), sC || (sC = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M236.611 81.984h23.865v24.093h-23.865z"
                        })), sG || (sG = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m268.336 74.049-7.86 7.935H236.61l-7.86-7.935h39.585z"
                        })), sB || (sB = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m268.336 114.012-7.86-7.935V81.984l7.86-7.935v39.963z"
                        })), sL || (sL = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M228.751 114.012h39.585v39.964h-39.585z"
                        })), sT || (sT = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M236.611 121.947h23.865v24.093h-23.865z"
                        })), sF || (sF = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m268.336 114.012-7.86 7.935H236.61l-7.86-7.935h39.585z"
                        })), sW || (sW = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m268.336 153.976-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), sU || (sU = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M189.165 114.012h39.585v39.964h-39.585z"
                        })), sQ || (sQ = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M197.025 121.947h23.865v24.093h-23.865z"
                        })), sq || (sq = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m228.75 114.012-7.86 7.935h-23.865l-7.86-7.935h39.586z"
                        })), sR || (sR = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m228.75 153.976-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), sY || (sY = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M149.58 114.012h39.585v39.964H149.58z"
                        })), sX || (sX = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M157.44 121.947h23.865v24.093H157.44z"
                        })), sK || (sK = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m189.165 114.012-7.86 7.935H157.44l-7.86-7.935h39.585z"
                        })), sJ || (sJ = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m189.165 153.976-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), s$ || (s$ = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M109.995 114.012h39.585v39.964h-39.585z"
                        })), s1 || (s1 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M117.855 121.947h23.865v24.093h-23.865z"
                        })), s2 || (s2 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m149.58 114.012-7.86 7.935h-23.865l-7.86-7.935h39.585z"
                        })), s3 || (s3 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m149.58 153.976-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), s5 || (s5 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M228.751 153.976h39.585v39.964h-39.585z"
                        })), s4 || (s4 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M236.611 161.911h23.865v24.093h-23.865z"
                        })), s0 || (s0 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m268.336 153.976-7.86 7.935H236.61l-7.86-7.935h39.585z"
                        })), s6 || (s6 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m268.336 193.94-7.86-7.936v-24.093l7.86-7.935v39.963z"
                        })), s7 || (s7 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M228.751 193.939h39.585v39.964h-39.585z"
                        })), s8 || (s8 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M236.611 201.874h23.865v24.093h-23.865z"
                        })), s9 || (s9 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m268.336 193.94-7.86 7.934H236.61l-7.86-7.935h39.585z"
                        })), re || (re = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m268.336 233.903-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), rt || (rt = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M228.751 233.903h39.585v39.964h-39.585z"
                        })), ra || (ra = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M236.611 241.838h23.865v24.093h-23.865z"
                        })), rs || (rs = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m268.336 233.903-7.86 7.935H236.61l-7.86-7.935h39.585z"
                        })), rr || (rr = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m268.336 273.866-7.86-7.935v-24.093l7.86-7.935v39.963z"
                        })), rl || (rl = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M228.751 273.866h39.585v39.964h-39.585z"
                        })), rc || (rc = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M236.611 281.801h23.865v24.093h-23.865z"
                        })), rn || (rn = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m268.336 273.866-7.86 7.935H236.61l-7.86-7.935h39.585z"
                        })), rh || (rh = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m268.336 313.83-7.86-7.935V281.8l7.86-7.935v39.964z"
                        })), ri || (ri = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M70.41 193.939h39.585v39.964H70.41z"
                        })), r_ || (r_ = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M78.27 201.874h23.865v24.093H78.27z"
                        })), ro || (ro = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m109.995 193.94-7.86 7.934H78.27l-7.86-7.935h39.585z"
                        })), rd || (rd = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m109.995 233.903-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), rm || (rm = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M109.995 193.939h39.585v39.964h-39.585z"
                        })), rv || (rv = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M117.855 201.874h23.865v24.093h-23.865z"
                        })), rg || (rg = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m149.58 193.94-7.86 7.934h-23.865l-7.86-7.935h39.585z"
                        })), rp || (rp = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m149.58 233.903-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), rf || (rf = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M149.58 193.939h39.585v39.964H149.58z"
                        })), ru || (ru = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M157.44 201.874h23.865v24.093H157.44z"
                        })), rE || (rE = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-7",
                            d: "m189.165 193.94-7.86 7.934H157.44l-7.86-7.935h39.585z"
                        })), rx || (rx = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            d: "m189.165 233.903-7.86-7.935v-24.094l7.86-7.935v39.964z"
                        })), rM || (rM = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            transform: "rotate(90 208.958 213.921)",
                            d: "M188.976 194.128h39.964v39.585h-39.964z"
                        })), rz || (rz = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-2",
                            transform: "rotate(90 208.958 213.921)",
                            d: "M196.911 201.988h24.093v23.865h-24.093z"
                        })), rw || (rw = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "m189.165 233.903 7.86-7.935v-24.094l-7.86-7.935v39.964z"
                        })), rb || (rb = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-4",
                            d: "m228.75 233.903-7.86-7.935h-23.865l-7.86 7.935h39.586z"
                        })), rZ || (rZ = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            transform: "rotate(90 208.958 253.888)",
                            d: "M188.976 234.095h39.964v39.585h-39.964z"
                        })), ry || (ry = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-2",
                            transform: "rotate(90 208.958 253.888)",
                            d: "M196.911 241.955h24.093v23.865h-24.093z"
                        })), rV || (rV = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "m189.165 273.87 7.86-7.935V241.84l-7.86-7.935v39.964z"
                        })), rN || (rN = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-4",
                            d: "m228.75 273.87-7.86-7.935h-23.865l-7.86 7.935h39.586z"
                        })), rj || (rj = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            transform: "rotate(90 169.373 253.884)",
                            d: "M149.391 234.092h39.964v39.585h-39.964z"
                        })), rH || (rH = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-2",
                            transform: "rotate(90 169.373 253.884)",
                            d: "M157.326 241.952h24.093v23.865h-24.093z"
                        })), rk || (rk = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "m149.58 273.866 7.86-7.935v-24.093l-7.86-7.935v39.963z"
                        })), rS || (rS = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-4",
                            d: "m189.165 273.866-7.86-7.935H157.44l-7.86 7.935h39.585z"
                        })), rD || (rD = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            transform: "rotate(90 129.788 253.881)",
                            d: "M109.806 234.088h39.964v39.585h-39.964z"
                        })), rI || (rI = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-2",
                            transform: "rotate(90 129.788 253.881)",
                            d: "M117.741 241.948h24.093v23.865h-24.093z"
                        })), rA || (rA = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "m109.995 273.863 7.86-7.935v-24.094l-7.86-7.935v39.964z"
                        })), rP || (rP = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-4",
                            d: "m149.58 273.863-7.86-7.935h-23.865l-7.86 7.935h39.585z"
                        })), rO || (rO = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            transform: "rotate(90 90.203 253.877)",
                            d: "M70.221 234.085h39.964v39.585H70.221z"
                        })), rC || (rC = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-2",
                            transform: "rotate(90 90.203 253.877)",
                            d: "M78.156 241.945h24.093v23.865H78.156z"
                        })), rG || (rG = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "m70.41 273.86 7.86-7.936v-24.093l-7.86-7.935v39.963z"
                        })), rB || (rB = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-4",
                            d: "m109.995 273.86-7.86-7.936H78.27l-7.86 7.935h39.585z"
                        })), rL || (rL = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            transform: "rotate(90 208.958 173.954)",
                            d: "M188.976 154.161h39.964v39.585h-39.964z"
                        })), rT || (rT = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-2",
                            transform: "rotate(90 208.958 173.954)",
                            d: "M196.911 162.021h24.093v23.865h-24.093z"
                        })), rF || (rF = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "m189.165 193.936 7.86-7.935v-24.094l-7.86-7.935v39.964z"
                        })), rW || (rW = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-4",
                            d: "M228.75 193.936 220.89 186h-23.865l-7.86 7.935h39.586z"
                        })), rU || (rU = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            transform: "rotate(90 169.373 173.954)",
                            d: "M149.391 154.161h39.964v39.585h-39.964z"
                        })), rQ || (rQ = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-2",
                            transform: "rotate(90 169.373 173.954)",
                            d: "M157.326 162.021h24.093v23.865h-24.093z"
                        })), rq || (rq = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "m149.58 193.936 7.86-7.935v-24.094l-7.86-7.935v39.964z"
                        })), rR || (rR = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-4",
                            d: "m189.165 193.936-7.86-7.935H157.44l-7.86 7.935h39.585z"
                        })), rY || (rY = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            transform: "rotate(90 129.788 173.954)",
                            d: "M109.806 154.161h39.964v39.585h-39.964z"
                        })), rX || (rX = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-2",
                            transform: "rotate(90 129.788 173.954)",
                            d: "M117.741 162.021h24.093v23.865h-24.093z"
                        })), rK || (rK = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "m109.995 193.936 7.86-7.935v-24.094l-7.86-7.935v39.964z"
                        })), rJ || (rJ = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-4",
                            d: "M149.58 193.936 141.72 186h-23.865l-7.86 7.935h39.585z"
                        })), r$ || (r$ = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            transform: "rotate(90 90.203 173.954)",
                            d: "M70.221 154.161h39.964v39.585H70.221z"
                        })), r1 || (r1 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-2",
                            transform: "rotate(90 90.203 173.954)",
                            d: "M78.156 162.021h24.093v23.865H78.156z"
                        })), r2 || (r2 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "M70.41 193.936 78.27 186v-24.094l-7.86-7.935v39.964z"
                        })), r3 || (r3 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-4",
                            d: "m109.995 193.936-7.86-7.935H78.27l-7.86 7.935h39.585z"
                        })), r5 || (r5 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            transform: "rotate(90 90.203 133.994)",
                            d: "M70.221 114.201h39.964v39.585H70.221z"
                        })), r4 || (r4 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-2",
                            transform: "rotate(90 90.203 133.994)",
                            d: "M78.156 122.061h24.093v23.865H78.156z"
                        })), r0 || (r0 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "m70.41 153.976 7.86-7.935v-24.094l-7.86-7.935v39.964z"
                        })), r6 || (r6 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-4",
                            d: "m109.995 153.976-7.86-7.935H78.27l-7.86 7.935h39.585z"
                        })), r7 || (r7 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            transform: "rotate(90 90.203 94.034)",
                            d: "M70.221 74.241h39.964v39.585H70.221z"
                        })), r8 || (r8 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-2",
                            transform: "rotate(90 90.203 94.034)",
                            d: "M78.156 82.101h24.093v23.865H78.156z"
                        })), r9 || (r9 = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "m70.41 114.016 7.86-7.935V81.987l-7.86-7.935v39.964z"
                        })), le || (le = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-4",
                            d: "m109.995 114.016-7.86-7.935H78.27l-7.86 7.935h39.585z"
                        })), lt || (lt = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            transform: "rotate(90 129.788 94.034)",
                            d: "M109.806 74.241h39.964v39.585h-39.964z"
                        })), la || (la = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-2",
                            transform: "rotate(90 129.788 94.034)",
                            d: "M117.741 82.101h24.093v23.865h-24.093z"
                        })), ls || (ls = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "m109.995 114.016 7.86-7.935V81.987l-7.86-7.935v39.964z"
                        })), lr || (lr = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-4",
                            d: "m149.58 114.016-7.86-7.935h-23.865l-7.86 7.935h39.585z"
                        })), ll || (ll = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            transform: "rotate(90 169.373 94.034)",
                            d: "M149.391 74.241h39.964v39.585h-39.964z"
                        })), lc || (lc = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-2",
                            transform: "rotate(90 169.373 94.034)",
                            d: "M157.326 82.101h24.093v23.865h-24.093z"
                        })), ln || (ln = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "m149.58 114.016 7.86-7.935V81.987l-7.86-7.935v39.964z"
                        })), lh || (lh = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-4",
                            d: "m189.165 114.016-7.86-7.935H157.44l-7.86 7.935h39.585z"
                        })), li || (li = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-1",
                            transform: "rotate(90 208.958 94.034)",
                            d: "M188.976 74.241h39.964v39.585h-39.964z"
                        })), l_ || (l_ = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-2",
                            transform: "rotate(90 208.958 94.034)",
                            d: "M196.911 82.101h24.093v23.865h-24.093z"
                        })), lo || (lo = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-6",
                            d: "m189.165 114.016 7.86-7.935V81.987l-7.86-7.935v39.964z"
                        })), ld || (ld = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-4",
                            d: "m228.75 114.016-7.86-7.935h-23.865l-7.86 7.935h39.586z"
                        })), lm || (lm = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M307.375 129.416h16.178v41.706h48.533v-41.706h16.177v100.67h-16.177V186.94h-48.533v43.144h-16.178v-100.67ZM531.578 230.085c-5.467 0-10.531-.977-15.194-2.927-4.664-1.95-8.739-4.7-12.22-8.243-3.485-3.544-6.219-7.831-8.2-12.865-1.986-5.032-2.975-10.631-2.975-16.794s.99-11.76 2.974-16.794c1.982-5.032 4.716-9.322 8.2-12.866 3.482-3.543 7.557-6.29 12.22-8.242 4.664-1.95 9.728-2.928 15.195-2.928 4.18 0 7.879.616 11.095 1.849 3.215 1.232 5.893 2.568 8.039 4.006 2.573 1.747 4.768 3.647 6.592 5.7h.804v-10.014h16.883v78.578h-16.883v-10.786h-.804c-1.824 2.261-4.02 4.314-6.592 6.164-2.146 1.54-4.824 2.953-8.04 4.236s-6.913 1.926-11.094 1.926Zm3.216-14.637c6.858 0 12.46-2.234 16.802-6.702 4.341-4.468 6.512-10.963 6.512-19.49 0-8.525-2.17-15.022-6.512-19.49-4.341-4.469-9.944-6.703-16.802-6.703-7.291 0-13.132 2.234-17.527 6.702-4.396 4.469-6.591 10.966-6.591 19.49 0 8.528 2.195 15.023 6.591 19.491 4.395 4.468 10.236 6.702 17.527 6.702Z"
                        })), lv || (lv = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-5",
                            d: "M866.556 230.085c-5.466 0-10.53-.977-15.194-2.927-4.663-1.95-8.738-4.7-12.22-8.243-3.485-3.544-6.218-7.831-8.2-12.865-1.985-5.032-2.974-10.631-2.974-16.794s.989-11.76 2.974-16.794c1.982-5.032 4.715-9.322 8.2-12.866 3.482-3.543 7.557-6.29 12.22-8.242 4.663-1.95 9.728-2.928 15.194-2.928 4.181 0 7.88.616 11.095 1.849 3.216 1.232 5.894 2.568 8.04 4.006 2.572 1.747 4.768 3.647 6.592 5.7h.804v-10.014h16.882v78.578h-16.882v-10.786h-.804c-1.824 2.261-4.02 4.314-6.593 6.164-2.145 1.54-4.823 2.953-8.039 4.236s-6.914 1.926-11.095 1.926Zm3.216-14.637c6.859 0 12.461-2.234 16.803-6.702 4.34-4.468 6.512-10.963 6.512-19.49 0-8.525-2.171-15.022-6.512-19.49-4.342-4.469-9.944-6.703-16.803-6.703-7.29 0-13.132 2.234-17.526 6.702-4.397 4.469-6.592 10.966-6.592 19.49 0 8.528 2.195 15.023 6.592 19.491 4.394 4.468 10.235 6.702 17.526 6.702ZM932.326 149.113h14.727v11.908h.703a23.71 23.71 0 0 1 4.488-6.35c1.589-1.589 3.623-3.177 6.101-4.764 2.477-1.588 5.493-2.382 9.047-2.382h8.416v15.877h-9.117c-2.806 0-5.4.536-7.785 1.608a18.975 18.975 0 0 0-6.241 4.497c-1.778 1.93-3.156 4.287-4.138 7.07-.982 2.786-1.474 5.892-1.474 9.32v44.188h-14.727v-80.972ZM1129.943 149.113h14.728v11.908h.702a23.71 23.71 0 0 1 4.488-6.35c1.589-1.589 3.623-3.177 6.102-4.764 2.476-1.588 5.492-2.382 9.047-2.382h8.416v15.877h-9.118c-2.805 0-5.4.536-7.785 1.608a18.975 18.975 0 0 0-6.241 4.497c-1.777 1.93-3.156 4.287-4.138 7.07-.982 2.786-1.473 5.892-1.473 9.32v44.188h-14.728v-80.972Z"
                        })), lg || (lg = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M628.6 230.085c-5.467 0-10.532-.977-15.195-2.927-4.663-1.95-8.738-4.7-12.22-8.243-3.485-3.544-6.218-7.831-8.2-12.865-1.985-5.032-2.975-10.631-2.975-16.794s.99-11.76 2.974-16.794c1.983-5.032 4.716-9.322 8.2-12.866 3.483-3.543 7.558-6.29 12.221-8.242 4.663-1.95 9.728-2.928 15.194-2.928 4.181 0 7.88.616 11.095 1.849 3.216 1.232 5.894 2.568 8.04 4.006 2.572 1.747 4.768 3.647 6.592 5.7h.804v-39.288h16.882v107.852H655.13V218.53h-.804c-1.824 2.157-4.02 4.11-6.593 5.854-2.145 1.44-4.823 2.75-8.039 3.93s-6.914 1.771-11.095 1.771Zm3.215-14.637c6.859 0 12.461-2.234 16.803-6.702 4.34-4.468 6.512-10.963 6.512-19.49 0-8.525-2.171-15.022-6.512-19.49-4.342-4.469-9.944-6.703-16.803-6.703-7.29 0-13.132 2.234-17.526 6.702-4.397 4.469-6.592 10.966-6.592 19.49 0 8.528 2.195 15.023 6.592 19.491 4.394 4.468 10.235 6.702 17.526 6.702Z"
                        })), lp || (lp = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-5",
                            d: "M726.9 230.085c-4.241 0-8.013-.474-11.32-1.417-3.306-.946-6.23-2.173-8.774-3.686-2.544-1.51-4.75-3.236-6.613-5.174-1.866-1.935-3.434-3.944-4.706-6.024-3.052-4.724-5.087-10.157-6.104-16.3h15.261c.677 3.4 1.908 6.378 3.688 8.93 1.526 2.174 3.752 4.18 6.677 6.024 2.925 1.842 6.887 2.764 11.891 2.764 7.036 0 12.082-1.418 15.134-4.253 3.053-2.835 4.578-6.379 4.578-10.631 0-2.645-.763-4.841-2.289-6.591-1.525-1.747-3.541-3.236-6.041-4.465-2.501-1.227-5.363-2.315-8.584-3.26a310.634 310.634 0 0 1-9.793-3.048 122.826 122.826 0 0 1-9.793-3.685c-3.223-1.369-6.084-3.119-8.584-5.245-2.502-2.126-4.515-4.724-6.04-7.796-1.527-3.07-2.29-6.826-2.29-11.269 0-3.874.763-7.606 2.29-11.198 1.525-3.59 3.729-6.755 6.612-9.497 2.882-2.74 6.36-4.937 10.429-6.591 4.07-1.653 8.648-2.481 13.735-2.481 3.899 0 7.376.425 10.43 1.276 3.05.85 5.764 1.962 8.138 3.331 2.373 1.37 4.43 2.93 6.168 4.677 1.737 1.75 3.199 3.522 4.387 5.316 2.798 4.253 4.748 9.072 5.851 14.458h-15.262c-.593-2.644-1.653-5.008-3.178-7.087-1.358-1.794-3.33-3.424-5.914-4.89-2.588-1.464-6.127-2.198-10.62-2.198-6.021 0-10.492 1.396-13.418 4.182-2.924 2.789-4.386 6.12-4.386 9.993 0 2.647.762 4.844 2.289 6.591 1.525 1.75 3.539 3.26 6.04 4.537 2.5 1.275 5.362 2.41 8.585 3.401 3.221.993 6.486 2.034 9.793 3.119a124.672 124.672 0 0 1 9.792 3.685c3.221 1.371 6.083 3.119 8.585 5.245 2.5 2.126 4.514 4.702 6.04 7.725 1.527 3.026 2.29 6.71 2.29 11.057 0 4.063-.785 7.937-2.353 11.623-1.57 3.685-3.838 6.923-6.804 9.71-2.97 2.788-6.613 5.01-10.937 6.662s-9.284 2.48-14.88 2.48ZM783.654 163.343h-8.657v-15.278h8.657v-17.69h15.151v17.69h22.366v15.278h-22.366v43.946a7.518 7.518 0 0 0 7.518 7.518h15.57v15.278h-18.485c-10.91 0-19.754-8.844-19.754-19.754v-46.988ZM988.93 163.343h-8.657v-15.278h8.658v-17.69h15.151v17.69h22.365v15.278h-22.365v43.946a7.518 7.518 0 0 0 7.518 7.518h15.569v15.278h-18.484c-10.91 0-19.754-8.844-19.754-19.754v-46.988Z"
                        })), lf || (lf = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-3",
                            d: "M443.231 230.085c-5.451 0-10.576-1.054-15.37-3.158-4.797-2.104-8.987-4.981-12.57-8.629-3.585-3.644-6.386-7.958-8.405-12.941-2.02-4.981-3.028-10.348-3.028-16.101 0-5.751 1.008-11.118 3.028-16.101 2.019-4.981 4.82-9.295 8.405-12.942 3.583-3.645 7.773-6.522 12.57-8.628 4.794-2.104 9.919-3.16 15.37-3.16s10.575 1.056 15.371 3.16c4.794 2.106 8.985 4.983 12.57 8.628 3.582 3.647 6.383 7.961 8.404 12.942 2.018 4.983 3.029 10.35 3.029 16.1v5.393h-62.846c.605 3.289 1.613 6.216 3.028 8.782 1.413 2.57 3.18 4.753 5.3 6.549a22.627 22.627 0 0 0 7.043 4.083c2.574.924 5.274 1.386 8.101 1.386 3.938 0 7.319-.54 10.147-1.617 2.825-1.079 5.096-2.336 6.814-3.775 2.019-1.541 3.684-3.337 4.998-5.393h16.658c-1.92 4.83-4.595 9.09-8.026 12.788-1.515 1.54-3.233 3.082-5.15 4.622-1.918 1.541-4.14 2.904-6.662 4.083-2.525 1.183-5.353 2.133-8.481 2.851-3.13.717-6.564 1.078-10.298 1.078Zm22.716-48.533c-.405-2.258-1.162-4.519-2.272-6.78a19.148 19.148 0 0 0-4.543-5.931c-1.919-1.695-4.19-3.082-6.814-4.16-2.627-1.079-5.656-1.618-9.087-1.618-2.626 0-5.175.412-7.647 1.233a22.996 22.996 0 0 0-6.815 3.62c-2.07 1.594-3.812 3.544-5.224 5.855-1.415 2.311-2.424 4.906-3.03 7.78h45.432Z"
                        })), lu || (lu = l6.createElement("path", {
                            className: "headstarter_green_svg__cls-5",
                            d: "M1074.38 230.085c-5.452 0-10.577-1.054-15.37-3.158-4.797-2.104-8.988-4.981-12.57-8.629-3.585-3.644-6.387-7.958-8.405-12.941-2.02-4.981-3.028-10.348-3.028-16.101 0-5.751 1.007-11.118 3.028-16.101 2.018-4.981 4.82-9.295 8.405-12.942 3.582-3.645 7.773-6.522 12.57-8.628 4.793-2.104 9.918-3.16 15.37-3.16s10.575 1.056 15.37 3.16c4.795 2.106 8.985 4.983 12.57 8.628 3.582 3.647 6.384 7.961 8.404 12.942 2.019 4.983 3.03 10.35 3.03 16.1v5.393h-62.847c.606 3.289 1.614 6.216 3.03 8.782 1.411 2.57 3.179 4.753 5.3 6.549 2.12 1.798 4.467 3.158 7.041 4.083s5.274 1.386 8.102 1.386c3.937 0 7.319-.54 10.146-1.617 2.825-1.079 5.097-2.336 6.815-3.775 2.018-1.541 3.684-3.337 4.998-5.393h16.658c-1.92 4.83-4.596 9.09-8.027 12.788-1.514 1.54-3.232 3.082-5.149 4.622-1.919 1.541-4.14 2.904-6.663 4.083-2.524 1.183-5.353 2.133-8.48 2.851-3.13.717-6.564 1.078-10.298 1.078Zm22.715-48.533c-.404-2.258-1.162-4.519-2.271-6.78a19.163 19.163 0 0 0-4.543-5.931c-1.919-1.695-4.19-3.082-6.814-4.16-2.627-1.079-5.656-1.618-9.087-1.618-2.626 0-5.175.412-7.648 1.233a23.008 23.008 0 0 0-6.814 3.62c-2.07 1.594-3.812 3.544-5.225 5.855-1.415 2.311-2.423 4.906-3.028 7.78h45.43Z"
                        })))
                    }, {
                        height: 70,
                        width: 220
                    }),
                    link: "https://headstarter.org/",
                    name: "HeadStarter"
                }, {
                    iconA: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nI({
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 448.29 138.93"
                        }, e), lE || (lE = l6.createElement("defs", null, l6.createElement("style", null, ".hedera_svg__cls-1{fill:#fff}"))), lx || (lx = l6.createElement("g", {
                            id: "hedera_svg__Layer_2",
                            "data-name": "Layer 2"
                        }, l6.createElement("g", {
                            id: "hedera_svg__Layer_2-2",
                            "data-name": "Layer 2"
                        }, l6.createElement("path", {
                            className: "hedera_svg__cls-1",
                            d: "M52.08 64.51h35.53v8.85H52.08z"
                        }), l6.createElement("path", {
                            className: "hedera_svg__cls-1",
                            d: "M69.46 0a69.47 69.47 0 1 0 69.47 69.47A69.46 69.46 0 0 0 69.46 0Zm25.83 96.94h-8.06V79.79H51.7v17.15h-8.07V41.32h8.07v16.76h35.53V41.32h8.06ZM208.06 66.09h-30.92V43.77h-7.83v52.41h7.83V73.42h30.92v22.76h7.83V43.77h-7.83v22.32zM243 65.06c5.13 0 8.73 2.64 10.44 7.65h-21c1.48-4.87 5.32-7.65 10.6-7.65m0-6.46c-10.62 0-18.64 8.27-18.64 19.22a18.85 18.85 0 0 0 19.3 19.23c12.64 0 17.06-8.48 17.62-11.45l.08-.46h-7.26l-.11.22c-.09.19-2.48 4.8-10.33 4.8-6.46 0-11.26-4.56-11.8-11.14h29.8v-.4c0-11.79-7.7-20-18.72-20M286.82 90.16c-6.91 0-11.74-5.08-11.74-12.33s4.83-12.34 11.74-12.34 11.61 5.07 11.61 12.34-4.77 12.33-11.61 12.33m11.46-25.73c-1.81-2.5-5.94-5.83-12.69-5.83-10.68 0-18.13 7.91-18.13 19.23s7.45 19.22 18.13 19.22a15.26 15.26 0 0 0 12.69-6.12v5.25h7.4v-54.3h-7.4ZM333.07 65.06c5.12 0 8.73 2.64 10.43 7.65h-21c1.48-4.87 5.32-7.65 10.61-7.65m0-6.46c-10.63 0-18.65 8.27-18.65 19.22a18.85 18.85 0 0 0 19.3 19.23c12.64 0 17.06-8.48 17.62-11.45l.08-.46h-7.26l-.1.22c-.1.19-2.5 4.8-10.34 4.8-6.46 0-11.25-4.56-11.79-11.14h29.85v-.4c0-11.79-7.7-20-18.71-20M367.56 64.81v-5.34h-7.41v36.7h7.41V75.5c0-6.42 3.35-8.92 12-8.92h9.56v-7.4h-9.41c-7.33 0-10.66 3.25-12.11 5.63M422 77.82c0 7.15-4.73 12.34-11.24 12.34-6.79 0-11.53-5.07-11.53-12.34s4.77-12.33 11.56-12.33c6.51 0 11.24 5.19 11.24 12.33m-.15-13.37c-1.45-2-5.14-5.85-12.33-5.85-8.9 0-17.91 6.6-17.91 19.22 0 11.32 7.36 19.23 17.91 19.23A14.44 14.44 0 0 0 421.88 91v5.21h7.4V59.47h-7.4ZM436.45 60.56h2.03v4.59h.76v-4.59h2.03v-.7h-4.82v.7zM447.12 59.86l-1.75 4.18-1.75-4.18h-1.19v5.29h.72v-4.59l1.94 4.62h.52l1.92-4.58v4.55h.76v-5.29h-1.17z"
                        })))))
                    }, {
                        height: 55,
                        width: 200
                    }),
                    iconB: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nA({
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 448.29 138.93"
                        }, e), lM || (lM = l6.createElement("defs", null, l6.createElement("style", null, ".hedera_green_svg__cls-1{fill:#69ff52}"))), lz || (lz = l6.createElement("g", {
                            id: "hedera_green_svg__Layer_2",
                            "data-name": "Layer 2"
                        }, l6.createElement("g", {
                            id: "hedera_green_svg__Layer_2-2",
                            "data-name": "Layer 2"
                        }, l6.createElement("path", {
                            className: "hedera_green_svg__cls-1",
                            d: "M52.08 64.51h35.53v8.85H52.08z"
                        }), l6.createElement("path", {
                            className: "hedera_green_svg__cls-1",
                            d: "M69.46 0a69.47 69.47 0 1 0 69.47 69.47A69.46 69.46 0 0 0 69.46 0Zm25.83 96.94h-8.06V79.79H51.7v17.15h-8.07V41.32h8.07v16.76h35.53V41.32h8.06ZM208.06 66.09h-30.92V43.77h-7.83v52.41h7.83V73.42h30.92v22.76h7.83V43.77h-7.83v22.32zM243 65.06c5.13 0 8.73 2.64 10.44 7.65h-21c1.48-4.87 5.32-7.65 10.6-7.65m0-6.46c-10.62 0-18.64 8.27-18.64 19.22a18.85 18.85 0 0 0 19.3 19.23c12.64 0 17.06-8.48 17.62-11.45l.08-.46h-7.26l-.11.22c-.09.19-2.48 4.8-10.33 4.8-6.46 0-11.26-4.56-11.8-11.14h29.8v-.4c0-11.79-7.7-20-18.72-20M286.82 90.16c-6.91 0-11.74-5.08-11.74-12.33s4.83-12.34 11.74-12.34 11.61 5.07 11.61 12.34-4.77 12.33-11.61 12.33m11.46-25.73c-1.81-2.5-5.94-5.83-12.69-5.83-10.68 0-18.13 7.91-18.13 19.23s7.45 19.22 18.13 19.22a15.26 15.26 0 0 0 12.69-6.12v5.25h7.4v-54.3h-7.4ZM333.07 65.06c5.12 0 8.73 2.64 10.43 7.65h-21c1.48-4.87 5.32-7.65 10.61-7.65m0-6.46c-10.63 0-18.65 8.27-18.65 19.22a18.85 18.85 0 0 0 19.3 19.23c12.64 0 17.06-8.48 17.62-11.45l.08-.46h-7.26l-.1.22c-.1.19-2.5 4.8-10.34 4.8-6.46 0-11.25-4.56-11.79-11.14h29.85v-.4c0-11.79-7.7-20-18.71-20M367.56 64.81v-5.34h-7.41v36.7h7.41V75.5c0-6.42 3.35-8.92 12-8.92h9.56v-7.4h-9.41c-7.33 0-10.66 3.25-12.11 5.63M422 77.82c0 7.15-4.73 12.34-11.24 12.34-6.79 0-11.53-5.07-11.53-12.34s4.77-12.33 11.56-12.33c6.51 0 11.24 5.19 11.24 12.33m-.15-13.37c-1.45-2-5.14-5.85-12.33-5.85-8.9 0-17.91 6.6-17.91 19.22 0 11.32 7.36 19.23 17.91 19.23A14.44 14.44 0 0 0 421.88 91v5.21h7.4V59.47h-7.4ZM436.45 60.56h2.03v4.59h.76v-4.59h2.03v-.7h-4.82v.7zM447.12 59.86l-1.75 4.18-1.75-4.18h-1.19v5.29h.72v-4.59l1.94 4.62h.52l1.92-4.58v4.55h.76v-5.29h-1.17z"
                        })))))
                    }, {
                        height: 55,
                        width: 200
                    }),
                    link: "https://hedera.com/",
                    name: "Hedera"
                }, {
                    iconA: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nQ({
                            width: 249,
                            height: 88,
                            viewBox: "0 0 262 93",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, e), lK || (lK = l6.createElement("g", {
                            clipPath: "url(#stader_svg__a)"
                        }, l6.createElement("path", {
                            d: "M71.813 52.117h8.767c.3.754.753 1.436 1.33 2.004 1.29 1.295 3.062 1.943 5.32 1.943 3.424 0 5.137-1.012 5.138-3.037a1.653 1.653 0 0 0-.244-.88 2.236 2.236 0 0 0-.845-.731c-.405-.22-.786-.414-1.148-.576a10.58 10.58 0 0 0-1.605-.518 28.924 28.924 0 0 0-1.694-.394 67.537 67.537 0 0 1-1.994-.427 94.596 94.596 0 0 0-1.965-.426c-6.37-1.379-9.554-4.517-9.554-9.414 0-2.59 1.159-4.805 3.476-6.649 2.317-1.843 5.493-2.764 9.525-2.764 5.403 0 9.455 1.68 12.157 5.042a11.923 11.923 0 0 1 2.359 4.98h-8.478a4.71 4.71 0 0 0-1.089-1.521c-1.245-1.012-2.896-1.518-4.95-1.518-1.452 0-2.52.233-3.204.698-.683.465-1.027 1.042-1.03 1.73 0 .241.05.48.15.7.116.243.294.453.515.607.233.176.475.338.726.486.328.177.674.32 1.03.426.445.142.832.272 1.18.395.445.151.9.272 1.36.363.566.123 1.05.222 1.45.304.401.081.928.193 1.573.334.645.14 1.164.253 1.573.333 6.33 1.426 9.495 4.566 9.495 9.419 0 2.71-1.25 5.059-3.75 7.043-2.5 1.985-5.887 2.977-10.16 2.977-5.724 0-9.956-1.821-12.7-5.464a16.53 16.53 0 0 1-2.714-5.465ZM103.564 38.45v-7.284h3.931v-6.678h8.468v6.678h8.708v7.29h-8.713v16.398h9.07v7.287H107.49v-23.69h-3.926ZM132.435 58.525c-2.72-3.016-4.081-6.974-4.081-11.872 0-4.899 1.361-8.857 4.081-11.874 2.72-3.017 6.097-4.525 10.131-4.525 2.637-.02 5.208.834 7.314 2.428a14.812 14.812 0 0 1 2.359 2.429h.302v-3.948h8.468v30.975h-8.464V58.19h-.303a14.668 14.668 0 0 1-2.359 2.429 11.973 11.973 0 0 1-7.314 2.427c-4.035.004-7.413-1.504-10.134-4.521Zm6.804-18.554c-1.412 1.62-2.116 3.846-2.114 6.678.002 2.833.707 5.06 2.114 6.679 1.412 1.624 3.226 2.436 5.443 2.436 2.338 0 4.233-.8 5.683-2.401 1.451-1.6 2.178-3.839 2.18-6.714 0-2.875-.727-5.112-2.18-6.711-1.452-1.6-3.347-2.4-5.683-2.401-2.218.005-4.032.817-5.443 2.434ZM170.232 58.525c-2.722-3.016-4.082-6.974-4.081-11.872.001-4.899 1.362-8.857 4.081-11.874 2.72-3.017 6.096-4.525 10.13-4.525 2.638-.02 5.209.833 7.315 2.428a14.853 14.853 0 0 1 2.359 2.429h.302V19.624h8.478v42.514h-8.478V58.19h-.302a14.67 14.67 0 0 1-2.358 2.429 11.973 11.973 0 0 1-7.314 2.427c-4.034.004-7.411-1.504-10.132-4.521Zm6.807-18.554c-1.41 1.62-2.116 3.846-2.116 6.678 0 2.833.706 5.06 2.116 6.679 1.41 1.624 3.223 2.436 5.44 2.436 2.338 0 4.233-.8 5.685-2.401 1.452-1.6 2.176-3.84 2.174-6.715 0-2.875-.726-5.113-2.178-6.712-1.451-1.6-3.346-2.4-5.685-2.4-2.215.006-4.027.818-5.436 2.435ZM208.458 58.285c-3.214-3.18-4.821-7.056-4.821-11.632s1.607-8.454 4.821-11.634c3.205-3.179 7.145-4.767 11.822-4.765 4.757 0 8.667 1.58 11.731 4.738 3.065 3.16 4.596 7.046 4.595 11.66v1.82h-24.197a8.871 8.871 0 0 0 2.72 5.165c1.49 1.418 3.205 2.127 5.143 2.127 2.134 0 3.969-.608 5.504-1.822a6.2 6.2 0 0 0 1.449-1.82h9.07a16.503 16.503 0 0 1-3.022 5.465c-3.228 3.644-7.562 5.465-13.001 5.464-4.675 0-8.613-1.59-11.814-4.766Zm4.265-14.973h14.818a7.068 7.068 0 0 0-2.46-4.099c-1.308-1.113-2.91-1.67-4.807-1.67-1.898 0-3.509.547-4.835 1.639a8.202 8.202 0 0 0-2.724 4.13h.008ZM241.741 62.138V31.166h8.468v4.563h.306a7.137 7.137 0 0 1 1.632-2.551c1.652-1.742 3.727-2.612 6.227-2.61h3.629v8.201h-4.54c-2.297 0-4.081.617-5.351 1.852-1.27 1.234-1.905 2.942-1.906 5.125v16.399h-8.465v-.007Z",
                            fill: "#fff"
                        }), l6.createElement("path", {
                            d: "m28.787 86.287-.02-6.715 16.688-9.95-.058-19.979 6.01-3.204.237 26.682-22.857 13.166Z",
                            fill: "#494949"
                        }), l6.createElement("path", {
                            d: "m33.657 36.914 6.833-3.92 16.76 10.642.09 32.156-5.696-2.672-.236-26.68-17.75-9.526ZM28.527 0l28.644 16.529.02 6.882L28.557 7.216 28.527 0Z",
                            fill: "#fff"
                        }), l6.createElement("path", {
                            d: "M.098 50.443 0 16.863 28.526 0l.031 7.21L5.354 20.37 5.268 46.57l-5.17 3.872Z",
                            fill: "#494949"
                        }), l6.createElement("path", {
                            d: "M16.906 59.812.098 50.442l5.17-3.873 28.798 16.68-17.122 9.783-5.731 3.234 17.574 10.017 22.857-13.17 5.697 2.67-28.697 17.212L.166 76.633 22.86 63.145l-5.953-3.333ZM5.354 20.369 28.557 7.213l28.634 16.194-16.701 9.584-6.833 3.92 17.75 9.516-6.01 3.204-22.774-13.04 22.707-13.49-5.417-3.131-11.339-6.548-16.863 9.785-6.357-2.838Z",
                            fill: "#B3B3B3"
                        }), l6.createElement("path", {
                            d: "m11.213 76.266 5.731-3.234 11.823 6.54.02 6.715-17.575-10.021Z",
                            fill: "#fff"
                        }), l6.createElement("path", {
                            d: "m.166 76.633-.013-7.222 16.753-9.599 5.96 3.324-22.7 13.497ZM22.608 36.599l.066-6.874 17.224-9.749 5.417 3.13L22.608 36.6Z",
                            fill: "#494949"
                        }), l6.createElement("path", {
                            d: "m5.268 46.57.086-26.201 6.357 2.838.06 20.56 22.275 12.454.024 7.029L5.268 46.57Z",
                            fill: "#fff"
                        }))), lJ || (lJ = l6.createElement("defs", null, l6.createElement("clipPath", {
                            id: "stader_svg__a"
                        }, l6.createElement("path", {
                            fill: "#fff",
                            d: "M0 0h262v93H0z"
                        })))))
                    }, {
                        height: 55,
                        width: 160
                    }),
                    iconB: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nq({
                            width: 249,
                            height: 88,
                            viewBox: "0 0 262 93",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, e), l$ || (l$ = l6.createElement("g", {
                            clipPath: "url(#stader_green_svg__a)"
                        }, l6.createElement("path", {
                            d: "M71.813 52.117h8.767c.3.754.753 1.436 1.33 2.004 1.29 1.295 3.062 1.943 5.32 1.943 3.424 0 5.137-1.012 5.138-3.037a1.653 1.653 0 0 0-.244-.88 2.236 2.236 0 0 0-.845-.731c-.405-.22-.786-.414-1.148-.576a10.58 10.58 0 0 0-1.605-.518 28.924 28.924 0 0 0-1.694-.394 67.537 67.537 0 0 1-1.994-.427 94.596 94.596 0 0 0-1.965-.426c-6.37-1.379-9.554-4.517-9.554-9.414 0-2.59 1.159-4.805 3.476-6.649 2.317-1.843 5.493-2.764 9.525-2.764 5.403 0 9.455 1.68 12.157 5.042a11.923 11.923 0 0 1 2.359 4.98h-8.478a4.71 4.71 0 0 0-1.089-1.521c-1.245-1.012-2.896-1.518-4.95-1.518-1.452 0-2.52.233-3.204.698-.683.465-1.027 1.042-1.03 1.73 0 .241.05.48.15.7.116.243.294.453.515.607.233.176.475.338.726.486.328.177.674.32 1.03.426.445.142.832.272 1.18.395.445.151.9.272 1.36.363.566.123 1.05.222 1.45.304.401.081.928.193 1.573.334.645.14 1.164.253 1.573.333 6.33 1.426 9.495 4.566 9.495 9.419 0 2.71-1.25 5.059-3.75 7.043-2.5 1.985-5.887 2.977-10.16 2.977-5.724 0-9.956-1.821-12.7-5.464a16.53 16.53 0 0 1-2.714-5.465ZM103.564 38.45v-7.284h3.931v-6.678h8.468v6.678h8.708v7.29h-8.713v16.398h9.07v7.287H107.49v-23.69h-3.926ZM132.435 58.525c-2.72-3.016-4.081-6.974-4.081-11.872 0-4.899 1.361-8.857 4.081-11.874 2.72-3.017 6.097-4.525 10.131-4.525 2.637-.02 5.208.834 7.314 2.428a14.812 14.812 0 0 1 2.359 2.429h.302v-3.948h8.468v30.975h-8.464V58.19h-.303a14.668 14.668 0 0 1-2.359 2.429 11.973 11.973 0 0 1-7.314 2.427c-4.035.004-7.413-1.504-10.134-4.521Zm6.804-18.554c-1.412 1.62-2.116 3.846-2.114 6.678.002 2.833.707 5.06 2.114 6.679 1.412 1.624 3.226 2.436 5.443 2.436 2.338 0 4.233-.8 5.683-2.401 1.451-1.6 2.178-3.839 2.18-6.714 0-2.875-.727-5.112-2.18-6.711-1.452-1.6-3.347-2.4-5.683-2.401-2.218.005-4.032.817-5.443 2.434ZM170.232 58.525c-2.722-3.016-4.082-6.974-4.081-11.872.001-4.899 1.362-8.857 4.081-11.874 2.72-3.017 6.096-4.525 10.13-4.525 2.638-.02 5.209.833 7.315 2.428a14.853 14.853 0 0 1 2.359 2.429h.302V19.624h8.478v42.514h-8.478V58.19h-.302a14.67 14.67 0 0 1-2.358 2.429 11.973 11.973 0 0 1-7.314 2.427c-4.034.004-7.411-1.504-10.132-4.521Zm6.807-18.554c-1.41 1.62-2.116 3.846-2.116 6.678 0 2.833.706 5.06 2.116 6.679 1.41 1.624 3.223 2.436 5.44 2.436 2.338 0 4.233-.8 5.685-2.401 1.452-1.6 2.176-3.84 2.174-6.715 0-2.875-.726-5.113-2.178-6.712-1.451-1.6-3.346-2.4-5.685-2.4-2.215.006-4.027.818-5.436 2.435ZM208.458 58.285c-3.214-3.18-4.821-7.056-4.821-11.632s1.607-8.454 4.821-11.634c3.205-3.179 7.145-4.767 11.822-4.765 4.757 0 8.667 1.58 11.731 4.738 3.065 3.16 4.596 7.046 4.595 11.66v1.82h-24.197a8.871 8.871 0 0 0 2.72 5.165c1.49 1.418 3.205 2.127 5.143 2.127 2.134 0 3.969-.608 5.504-1.822a6.2 6.2 0 0 0 1.449-1.82h9.07a16.503 16.503 0 0 1-3.022 5.465c-3.228 3.644-7.562 5.465-13.001 5.464-4.675 0-8.613-1.59-11.814-4.766Zm4.265-14.973h14.818a7.068 7.068 0 0 0-2.46-4.099c-1.308-1.113-2.91-1.67-4.807-1.67-1.898 0-3.509.547-4.835 1.639a8.202 8.202 0 0 0-2.724 4.13h.008ZM241.741 62.138V31.166h8.468v4.563h.306a7.137 7.137 0 0 1 1.632-2.551c1.652-1.742 3.727-2.612 6.227-2.61h3.629v8.201h-4.54c-2.297 0-4.081.617-5.351 1.852-1.27 1.234-1.905 2.942-1.906 5.125v16.399h-8.465v-.007Z",
                            fill: "#69ff52"
                        }), l6.createElement("path", {
                            d: "m28.787 86.287-.02-6.715 16.688-9.95-.058-19.979 6.01-3.204.237 26.682-22.857 13.166Z",
                            fill: "#455544"
                        }), l6.createElement("path", {
                            d: "m33.657 36.914 6.833-3.92 16.76 10.642.09 32.156-5.696-2.672-.236-26.68-17.75-9.526ZM28.527 0l28.644 16.529.02 6.882L28.557 7.216 28.527 0Z",
                            fill: "#69ff52"
                        }), l6.createElement("path", {
                            d: "M.098 50.443 0 16.863 28.526 0l.031 7.21L5.354 20.37 5.268 46.57l-5.17 3.872Z",
                            fill: "#455544"
                        }), l6.createElement("path", {
                            d: "M16.906 59.812.098 50.442l5.17-3.873 28.798 16.68-17.122 9.783-5.731 3.234 17.574 10.017 22.857-13.17 5.697 2.67-28.697 17.212L.166 76.633 22.86 63.145l-5.953-3.333ZM5.354 20.369 28.557 7.213l28.634 16.194-16.701 9.584-6.833 3.92 17.75 9.516-6.01 3.204-22.774-13.04 22.707-13.49-5.417-3.131-11.339-6.548-16.863 9.785-6.357-2.838Z",
                            fill: "#83b57c"
                        }), l6.createElement("path", {
                            d: "m11.213 76.266 5.731-3.234 11.823 6.54.02 6.715-17.575-10.021Z",
                            fill: "#69ff52"
                        }), l6.createElement("path", {
                            d: "m.166 76.633-.013-7.222 16.753-9.599 5.96 3.324-22.7 13.497ZM22.608 36.599l.066-6.874 17.224-9.749 5.417 3.13L22.608 36.6Z",
                            fill: "#455544"
                        }), l6.createElement("path", {
                            d: "m5.268 46.57.086-26.201 6.357 2.838.06 20.56 22.275 12.454.024 7.029L5.268 46.57Z",
                            fill: "#69ff52"
                        }))), l1 || (l1 = l6.createElement("defs", null, l6.createElement("clipPath", {
                            id: "stader_green_svg__a"
                        }, l6.createElement("path", {
                            fill: "#69ff52",
                            d: "M0 0h262v93H0z"
                        })))))
                    }, {
                        height: 55,
                        width: 160
                    }),
                    link: "https://staderlabs.com/",
                    name: "Stader"
                }, {
                    iconA: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nb({
                            width: 441,
                            height: 86,
                            viewBox: "0 0 1800 352",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, e), e_ || (e_ = l6.createElement("path", {
                            d: "M1200.37 78.56c18.15 0 33.9 2.991 47.27 8.973 13.56 5.981 23.93 14.554 31.11 25.719 7.18 11.165 10.77 24.424 10.77 39.776 0 15.153-3.59 28.411-10.77 39.776-7.18 11.165-17.55 19.738-31.11 25.719-13.37 5.982-29.12 8.972-47.27 8.972h-47.27v60.412h-38.89V78.561h86.16Zm-1.8 116.038c16.96 0 29.82-3.589 38.6-10.766 8.77-7.178 13.16-17.446 13.16-30.804 0-13.358-4.39-23.626-13.16-30.804-8.78-7.177-21.64-10.766-38.6-10.766h-45.47v83.14h45.47ZM1369.37 126.411c23.54 0 41.49 5.682 53.85 17.047 12.57 11.165 18.85 28.112 18.85 50.841v93.608h-35.3v-19.44c-4.59 6.979-11.17 12.362-19.75 16.15-8.37 3.589-18.54 5.383-30.51 5.383-11.97 0-22.44-1.994-31.41-5.981-8.98-4.187-15.96-9.869-20.94-17.047-4.79-7.377-7.18-15.651-7.18-24.822 0-14.356 5.28-25.82 15.85-34.393 10.77-8.773 27.63-13.159 50.56-13.159h41.28v-2.392c0-11.165-3.39-19.739-10.17-25.72-6.58-5.981-16.45-8.972-29.61-8.972-8.98 0-17.85 1.396-26.63 4.187-8.57 2.791-15.85 6.679-21.84 11.663l-14.66-27.214c8.38-6.381 18.45-11.265 30.22-14.655 11.77-3.389 24.23-5.084 37.39-5.084Zm-5.08 136.374c9.37 0 17.65-2.093 24.83-6.28 7.38-4.387 12.56-10.567 15.55-18.542v-18.542h-38.59c-21.54 0-32.31 7.077-32.31 21.233 0 6.779 2.7 12.162 8.08 16.15 5.39 3.987 12.87 5.981 22.44 5.981ZM1549.86 290c-16.56 0-31.42-3.489-44.58-10.467-13.16-6.978-23.43-16.648-30.81-29.01-7.38-12.56-11.07-26.716-11.07-42.467 0-15.751 3.69-29.807 11.07-42.168 7.38-12.362 17.55-22.031 30.51-29.009 13.16-6.979 28.12-10.468 44.88-10.468 15.75 0 29.51 3.19 41.28 9.57 11.96 6.38 20.94 15.552 26.92 27.514l-28.72 16.748c-4.58-7.377-10.37-12.86-17.35-16.449-6.78-3.788-14.26-5.682-22.43-5.682-13.96 0-25.53 4.586-34.71 13.757-9.17 8.972-13.76 21.034-13.76 36.187 0 15.153 4.49 27.315 13.46 36.486 9.18 8.972 20.85 13.458 35.01 13.458 8.17 0 15.65-1.794 22.43-5.383 6.98-3.788 12.77-9.371 17.35-16.748l28.72 16.748c-6.18 11.962-15.25 21.233-27.22 27.813-11.77 6.38-25.43 9.57-40.98 9.57ZM1699.18 219.421l-27.82 26.317v42.169h-37.39V66h37.39v133.981l77.48-71.775h44.88l-66.71 66.99 72.99 92.711h-45.47l-55.35-68.486ZM586.074 78.56v209.347h-38.89v-89.72H438.89v89.72H400V78.561h38.89v86.43h108.294v-86.43h38.89ZM681.867 126.411c23.533 0 41.483 5.682 53.848 17.047 12.564 11.165 18.846 28.112 18.846 50.841v93.608h-35.3v-19.44c-4.587 6.979-11.168 12.362-19.744 16.15-8.376 3.589-18.548 5.383-30.514 5.383-11.966 0-22.436-1.994-31.411-5.981-8.975-4.187-15.955-9.869-20.941-17.047-4.786-7.377-7.18-15.651-7.18-24.822 0-14.356 5.285-25.82 15.856-34.393 10.769-8.773 27.622-13.159 50.557-13.159h41.283v-2.392c0-11.165-3.39-19.739-10.171-25.72-6.582-5.981-16.454-8.972-29.617-8.972-8.974 0-17.849 1.396-26.624 4.187-8.576 2.791-15.856 6.679-21.839 11.663l-14.658-27.214c8.376-6.381 18.448-11.265 30.214-14.655 11.767-3.389 24.232-5.084 37.395-5.084Zm-5.086 136.374c9.374 0 17.65-2.093 24.83-6.28 7.379-4.387 12.565-10.567 15.556-18.542v-18.542h-38.591c-21.539 0-32.309 7.077-32.309 21.233 0 6.779 2.693 12.162 8.078 16.15 5.384 3.987 12.863 5.981 22.436 5.981ZM839.755 290c-12.963 0-25.627-1.695-37.992-5.084-12.366-3.389-22.238-7.676-29.617-12.86l14.36-28.411c7.179 4.785 15.755 8.673 25.727 11.663 10.171 2.792 20.143 4.187 29.915 4.187 22.337 0 33.506-5.881 33.506-17.645 0-5.582-2.892-9.47-8.676-11.663-5.584-2.193-14.658-4.287-27.223-6.28-13.163-1.994-23.932-4.287-32.309-6.879-8.176-2.592-15.356-7.078-21.539-13.458-5.983-6.579-8.974-15.651-8.974-27.215 0-15.153 6.282-27.215 18.846-36.187 12.764-9.171 29.916-13.757 51.455-13.757 10.969 0 21.938 1.296 32.907 3.888 10.969 2.393 19.944 5.682 26.924 9.869l-14.359 28.411c-13.562-7.975-28.819-11.962-45.771-11.962-10.969 0-19.345 1.695-25.129 5.084-5.584 3.19-8.376 7.477-8.376 12.86 0 5.981 2.991 10.268 8.974 12.86 6.183 2.392 15.656 4.685 28.42 6.878 12.764 1.994 23.234 4.287 31.411 6.879 8.177 2.591 15.157 6.978 20.941 13.158 5.983 6.181 8.975 14.954 8.975 26.318 0 14.953-6.482 26.916-19.445 35.888C879.742 285.514 862.092 290 839.755 290ZM1020.04 126.411c20.14 0 36.3 5.882 48.46 17.645 12.17 11.763 18.25 29.209 18.25 52.337v91.514h-37.39v-86.729c0-13.957-3.29-24.424-9.87-31.402-6.59-7.178-15.96-10.767-28.13-10.767-13.756 0-24.626 4.187-32.603 12.561-7.978 8.175-11.966 20.037-11.966 35.589v80.748h-37.395V66h37.395v80.748c6.182-6.58 13.761-11.564 22.736-14.954 9.174-3.588 19.343-5.383 30.513-5.383Z",
                            fill: "#fff"
                        })), eo || (eo = l6.createElement("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M288 56c0 79.529-64.471 144-144 144S0 135.529 0 56C0 25.072 25.072 0 56 0s56 25.072 56 56v107.362c20.752 6.176 43.248 6.176 64 0V56c0-30.928 25.072-56 56-56s56 25.072 56 56ZM56 32c13.255 0 24 10.745 24 24v91.925C50.984 127.686 32 94.06 32 56c0-13.255 10.745-24 24-24Zm152 24v91.925C237.016 127.686 256 94.06 256 56c0-13.255-10.745-24-24-24s-24 10.745-24 24Z",
                            fill: "#fff"
                        })), ed || (ed = l6.createElement("path", {
                            d: "M208 296v-75.998c-40.79 15.932-87.243 15.92-128 0V296c0 13.255-10.745 24-24 24s-24-10.745-24-24V191.771a177.027 177.027 0 0 1-32-34.552V296c0 30.928 25.072 56 56 56s56-25.072 56-56v-34.446a210.183 210.183 0 0 0 64 0V296c0 30.928 25.072 56 56 56s56-25.072 56-56V157.219a177.011 177.011 0 0 1-32 34.552V296c0 13.255-10.745 24-24 24s-24-10.745-24-24Z",
                            fill: "#fff"
                        })))
                    }, {
                        height: 55,
                        width: 200
                    }),
                    iconB: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nZ({
                            width: 441,
                            height: 86,
                            viewBox: "0 0 1800 352",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, e), em || (em = l6.createElement("path", {
                            d: "M1200.37 78.56c18.15 0 33.9 2.991 47.27 8.973 13.56 5.981 23.93 14.554 31.11 25.719 7.18 11.165 10.77 24.424 10.77 39.776 0 15.153-3.59 28.411-10.77 39.776-7.18 11.165-17.55 19.738-31.11 25.719-13.37 5.982-29.12 8.972-47.27 8.972h-47.27v60.412h-38.89V78.561h86.16Zm-1.8 116.038c16.96 0 29.82-3.589 38.6-10.766 8.77-7.178 13.16-17.446 13.16-30.804 0-13.358-4.39-23.626-13.16-30.804-8.78-7.177-21.64-10.766-38.6-10.766h-45.47v83.14h45.47ZM1369.37 126.411c23.54 0 41.49 5.682 53.85 17.047 12.57 11.165 18.85 28.112 18.85 50.841v93.608h-35.3v-19.44c-4.59 6.979-11.17 12.362-19.75 16.15-8.37 3.589-18.54 5.383-30.51 5.383-11.97 0-22.44-1.994-31.41-5.981-8.98-4.187-15.96-9.869-20.94-17.047-4.79-7.377-7.18-15.651-7.18-24.822 0-14.356 5.28-25.82 15.85-34.393 10.77-8.773 27.63-13.159 50.56-13.159h41.28v-2.392c0-11.165-3.39-19.739-10.17-25.72-6.58-5.981-16.45-8.972-29.61-8.972-8.98 0-17.85 1.396-26.63 4.187-8.57 2.791-15.85 6.679-21.84 11.663l-14.66-27.214c8.38-6.381 18.45-11.265 30.22-14.655 11.77-3.389 24.23-5.084 37.39-5.084Zm-5.08 136.374c9.37 0 17.65-2.093 24.83-6.28 7.38-4.387 12.56-10.567 15.55-18.542v-18.542h-38.59c-21.54 0-32.31 7.077-32.31 21.233 0 6.779 2.7 12.162 8.08 16.15 5.39 3.987 12.87 5.981 22.44 5.981ZM1549.86 290c-16.56 0-31.42-3.489-44.58-10.467-13.16-6.978-23.43-16.648-30.81-29.01-7.38-12.56-11.07-26.716-11.07-42.467 0-15.751 3.69-29.807 11.07-42.168 7.38-12.362 17.55-22.031 30.51-29.009 13.16-6.979 28.12-10.468 44.88-10.468 15.75 0 29.51 3.19 41.28 9.57 11.96 6.38 20.94 15.552 26.92 27.514l-28.72 16.748c-4.58-7.377-10.37-12.86-17.35-16.449-6.78-3.788-14.26-5.682-22.43-5.682-13.96 0-25.53 4.586-34.71 13.757-9.17 8.972-13.76 21.034-13.76 36.187 0 15.153 4.49 27.315 13.46 36.486 9.18 8.972 20.85 13.458 35.01 13.458 8.17 0 15.65-1.794 22.43-5.383 6.98-3.788 12.77-9.371 17.35-16.748l28.72 16.748c-6.18 11.962-15.25 21.233-27.22 27.813-11.77 6.38-25.43 9.57-40.98 9.57ZM1699.18 219.421l-27.82 26.317v42.169h-37.39V66h37.39v133.981l77.48-71.775h44.88l-66.71 66.99 72.99 92.711h-45.47l-55.35-68.486ZM586.074 78.56v209.347h-38.89v-89.72H438.89v89.72H400V78.561h38.89v86.43h108.294v-86.43h38.89ZM681.867 126.411c23.533 0 41.483 5.682 53.848 17.047 12.564 11.165 18.846 28.112 18.846 50.841v93.608h-35.3v-19.44c-4.587 6.979-11.168 12.362-19.744 16.15-8.376 3.589-18.548 5.383-30.514 5.383-11.966 0-22.436-1.994-31.411-5.981-8.975-4.187-15.955-9.869-20.941-17.047-4.786-7.377-7.18-15.651-7.18-24.822 0-14.356 5.285-25.82 15.856-34.393 10.769-8.773 27.622-13.159 50.557-13.159h41.283v-2.392c0-11.165-3.39-19.739-10.171-25.72-6.582-5.981-16.454-8.972-29.617-8.972-8.974 0-17.849 1.396-26.624 4.187-8.576 2.791-15.856 6.679-21.839 11.663l-14.658-27.214c8.376-6.381 18.448-11.265 30.214-14.655 11.767-3.389 24.232-5.084 37.395-5.084Zm-5.086 136.374c9.374 0 17.65-2.093 24.83-6.28 7.379-4.387 12.565-10.567 15.556-18.542v-18.542h-38.591c-21.539 0-32.309 7.077-32.309 21.233 0 6.779 2.693 12.162 8.078 16.15 5.384 3.987 12.863 5.981 22.436 5.981ZM839.755 290c-12.963 0-25.627-1.695-37.992-5.084-12.366-3.389-22.238-7.676-29.617-12.86l14.36-28.411c7.179 4.785 15.755 8.673 25.727 11.663 10.171 2.792 20.143 4.187 29.915 4.187 22.337 0 33.506-5.881 33.506-17.645 0-5.582-2.892-9.47-8.676-11.663-5.584-2.193-14.658-4.287-27.223-6.28-13.163-1.994-23.932-4.287-32.309-6.879-8.176-2.592-15.356-7.078-21.539-13.458-5.983-6.579-8.974-15.651-8.974-27.215 0-15.153 6.282-27.215 18.846-36.187 12.764-9.171 29.916-13.757 51.455-13.757 10.969 0 21.938 1.296 32.907 3.888 10.969 2.393 19.944 5.682 26.924 9.869l-14.359 28.411c-13.562-7.975-28.819-11.962-45.771-11.962-10.969 0-19.345 1.695-25.129 5.084-5.584 3.19-8.376 7.477-8.376 12.86 0 5.981 2.991 10.268 8.974 12.86 6.183 2.392 15.656 4.685 28.42 6.878 12.764 1.994 23.234 4.287 31.411 6.879 8.177 2.591 15.157 6.978 20.941 13.158 5.983 6.181 8.975 14.954 8.975 26.318 0 14.953-6.482 26.916-19.445 35.888C879.742 285.514 862.092 290 839.755 290ZM1020.04 126.411c20.14 0 36.3 5.882 48.46 17.645 12.17 11.763 18.25 29.209 18.25 52.337v91.514h-37.39v-86.729c0-13.957-3.29-24.424-9.87-31.402-6.59-7.178-15.96-10.767-28.13-10.767-13.756 0-24.626 4.187-32.603 12.561-7.978 8.175-11.966 20.037-11.966 35.589v80.748h-37.395V66h37.395v80.748c6.182-6.58 13.761-11.564 22.736-14.954 9.174-3.588 19.343-5.383 30.513-5.383Z",
                            fill: "#69ff52"
                        })), ev || (ev = l6.createElement("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M288 56c0 79.529-64.471 144-144 144S0 135.529 0 56C0 25.072 25.072 0 56 0s56 25.072 56 56v107.362c20.752 6.176 43.248 6.176 64 0V56c0-30.928 25.072-56 56-56s56 25.072 56 56ZM56 32c13.255 0 24 10.745 24 24v91.925C50.984 127.686 32 94.06 32 56c0-13.255 10.745-24 24-24Zm152 24v91.925C237.016 127.686 256 94.06 256 56c0-13.255-10.745-24-24-24s-24 10.745-24 24Z",
                            fill: "#69ff52"
                        })), eg || (eg = l6.createElement("path", {
                            d: "M208 296v-75.998c-40.79 15.932-87.243 15.92-128 0V296c0 13.255-10.745 24-24 24s-24-10.745-24-24V191.771a177.027 177.027 0 0 1-32-34.552V296c0 30.928 25.072 56 56 56s56-25.072 56-56v-34.446a210.183 210.183 0 0 0 64 0V296c0 30.928 25.072 56 56 56s56-25.072 56-56V157.219a177.011 177.011 0 0 1-32 34.552V296c0 13.255-10.745 24-24 24s-24-10.745-24-24Z",
                            fill: "#69ff52"
                        })))
                    }, {
                        height: 55,
                        width: 200
                    }),
                    link: "https://www.hashpack.app/",
                    name: "HashPack"
                }, {
                    iconA: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", np({
                            id: "dovu_svg__Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            x: 0,
                            y: 0,
                            viewBox: "0 0 252.5 40",
                            style: {
                                enableBackground: "new 0 0 252.5 40"
                            },
                            xmlSpace: "preserve"
                        }, e), V || (V = l6.createElement("style", null, ".dovu_svg__st0{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}")), N || (N = l6.createElement("path", {
                            className: "dovu_svg__st0",
                            d: "M227.6.1v24.2c0 3.7 1.7 6.5 4.9 8.2 1.5.8 3.1 1.2 4.6 1.2h.3c1.7-.1 3.4-.7 5.1-1.9 2.5-1.8 3.7-4.4 3.8-7.4V.2h6.2v24.6c0 3.9-1.4 7.3-4 10.2-2.6 2.8-5.8 4.5-9.6 5-.5.1-1 .1-1.5.1h-.5c-4 0-7.5-1.4-10.6-4.2-2.6-2.4-4.2-5.5-4.8-9-.1-.7-.2-1.5-.2-2.3V.1h6.3zm-51.7 0c.1 0 .1 0 0 0h.2s0 .1.1.1V.1v.1c3.4 7.8 6.8 15.6 10.1 23.4l-.1-.2c0 .1.1.2.1.2 0 .1.1.2.1.3v.1c.1-.1.1-.2.1-.2l.9-2.2 7-16.2c.4-.9.8-1.7 1.1-2.6l1.1-2.6c.1-.1.1-.2.3-.2h-.1 6.7c-4.3 9.9-8.6 19.8-12.9 29.8l-4.3 10c-5.7-13.3-11.5-26.5-17.2-39.8h3.4l3.4.1zM76.4.1c4.8 0 9.1 1.6 12.8 4.8 3.4 3 5.6 6.7 6.5 11.1 1.3 6.6-.4 12.5-4.9 17.5-2.8 3.1-6.3 5.1-10.5 5.9-1.2.3-2.5.4-3.8.4H60.7V.1H76.4zM149 10c.6 0 1.2.2 1.6.5.5.3.8.7 1.1 1.3v-.1.1c.9 1.9 1.5 4 1.7 6.1 0 .4.1.9.1 1.3v.8c-.1 5.4-1.8 9.9-5.3 13.7-3.2 3.4-7.2 5.4-11.9 6-3.8.5-7.4-.1-10.9-1.7-.5-.2-.9-.5-1.1-.9l-.1-.2c-.1-.2-.2-.4-.3-.5l-.1-.2c-.2-.7-.2-1.5.1-2.3.2-.5.6-.9 1-1.2.5-.4 1.2-.6 1.8-.6h.2c.3 0 .7.1 1 .3.6.3 1.3.5 2 .7.6.2 1.2.3 1.8.4.6.1 1.3.1 1.9.2h.5c2.1 0 4.1-.6 6-1.6.2-.1.5-.3.7-.4.3-.2.7-.4 1-.7.3-.2.5-.4.7-.6 2.6-2.2 4.1-5.1 4.6-8.5 0-.4.1-.7.1-1.1.1-2.2-.3-4.3-1.2-6.3-.8-2.2.7-4.6 3-4.5zM67.3 6.4H67v27.2h9.5c.6 0 1.2-.1 1.8-.1 3.1-.5 5.8-1.9 7.9-4.3 3.1-3.5 4.2-7.6 3.3-12.2-.6-2.7-1.9-4.9-3.8-6.8-2.6-2.5-5.6-3.8-9.2-3.8h-9.2zM131.9.3c3.5-.3 6.9.3 10.1 1.8.5.2.9.5 1.1.9l.1.2c.6.9.7 2 .2 3-.1.3-.3.5-.5.7V7c-.2.2-.4.3-.6.5 0 0-.1 0-.1.1l-.2.1c-.3.2-.6.3-1 .3h-.4c-.4 0-.8-.1-1.2-.3-1.6-.8-3.4-1.2-5.2-1.3h-.5c-5.3.1-9.3 2.5-12 7.1-1.1 2-1.6 4.1-1.6 6.4 0 .5 0 1 .1 1.5.2 1.4.6 2.8 1.2 4.1.9 1.9-.3 4.1-2.4 4.4h-.4c-.6 0-1.2-.2-1.7-.5s-.8-.7-1.1-1.3l-.6-1.5c-.8-2.1-1.2-4.3-1.2-6.6v-1.2c.3-4.9 2-9.1 5.4-12.7 3.4-3.4 7.6-5.4 12.5-5.8zM34 19.8v-1c-.2-2-.7-3.9-1.7-5.7-.4-.7-1.1-.9-1.7-.6-.6.3-.8 1.1-.4 1.8 1.3 2.4 1.8 4.9 1.3 7.6-.8 4.1-3.1 6.9-6.9 8.6-1.9.8-3.8 1.1-5.8.8-1.5-.2-2.9-.6-4.2-1.4-.3-.2-.6-.2-.9-.1-.5.1-.9.5-1 1.1-.1.5.2 1 .7 1.3 3.2 1.8 6.6 2.3 10.2 1.4C29.6 32 34 26.4 34 19.8zm-13.3 6.6c0-.1 0-.2.2-.2 1.4-.2 2.6-.9 3.5-2.1 1.5-2 1.7-4.2.6-6.5-.7-1.5-1.6-2.9-2.6-4.2-.8-1.1-1.6-2.2-2.5-3.3-.1.1-.2.2-.2.3-.9 1.4-1.9 2.8-2.8 4.2-.6 1-1.3 2-1.8 3-.6 1.1-1 2.3-.8 3.6.3 2.1 1.5 3.6 3.4 4.5.5.2 1 .3 1.5.5v2.6c0 .1 0 .3.1.4.2.3.5.4.8.3s.5-.3.5-.7c.2-.7.2-1.6.1-2.4zM8.7 18c.6-3.3 2.3-5.8 5.1-7.7 2.3-1.5 4.9-2.1 7.6-1.8 1.6.2 3.1.7 4.5 1.5.3.2.6.2.9.1.5-.1.9-.5 1-1.1.1-.5-.2-1-.6-1.2-2.2-1.3-4.6-1.9-7.3-2-.3 0-.8 0-1.3.1-.3 0-.5.1-.8.1-3.4.6-6.2 2.1-8.4 4.8-3.1 3.8-4 8.1-2.7 12.9.3 1.1.8 2.2 1.4 3.2.3.4.6.6 1.1.6s.9-.3 1.1-.7c.2-.4.1-.8-.1-1.2-1.5-2.2-2-4.8-1.5-7.6zM40 20c0 11-9 20-20 20S0 31 0 20 9 0 20 0s20 9 20 20zm-15.9 1.7c.4-1.3.1-2.6-.5-3.7-.8-1.5-1.7-2.9-2.7-4.3l-.1-.1v11.1h.2c1.6-.4 2.6-1.4 3.1-3zm-4.8-7.9-1.4 2.1 1.4 1.4v-3.5zm-.1 9.6c-.7-.8-1.4-1.6-2.2-2.4-.4-.4-.7-.8-1.1-1.2-.5 2.6 1.6 4.7 3.4 4.8v-.9c0-.1-.1-.2-.1-.3zm.1-2c-1-1.1-1.9-2.1-2.9-3.1.2-.4.4-.7.7-1.1l.2.2 1.9 1.9c.1.1.1.2.1.3v1.8z"
                        })))
                    }, {
                        height: 55,
                        width: 200
                    }),
                    iconB: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nf({
                            id: "dovu_green_svg__Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            x: 0,
                            y: 0,
                            viewBox: "0 0 252.5 40",
                            style: {
                                enableBackground: "new 0 0 252.5 40"
                            },
                            xmlSpace: "preserve"
                        }, e), j || (j = l6.createElement("style", null, ".dovu_green_svg__st0{fill-rule:evenodd;clip-rule:evenodd;fill:#69ff52}")), H || (H = l6.createElement("path", {
                            className: "dovu_green_svg__st0",
                            d: "M227.6.1v24.2c0 3.7 1.7 6.5 4.9 8.2 1.5.8 3.1 1.2 4.6 1.2h.3c1.7-.1 3.4-.7 5.1-1.9 2.5-1.8 3.7-4.4 3.8-7.4V.2h6.2v24.6c0 3.9-1.4 7.3-4 10.2-2.6 2.8-5.8 4.5-9.6 5-.5.1-1 .1-1.5.1h-.5c-4 0-7.5-1.4-10.6-4.2-2.6-2.4-4.2-5.5-4.8-9-.1-.7-.2-1.5-.2-2.3V.1h6.3zm-51.7 0c.1 0 .1 0 0 0h.2s0 .1.1.1V.1v.1c3.4 7.8 6.8 15.6 10.1 23.4l-.1-.2c0 .1.1.2.1.2 0 .1.1.2.1.3v.1c.1-.1.1-.2.1-.2l.9-2.2 7-16.2c.4-.9.8-1.7 1.1-2.6l1.1-2.6c.1-.1.1-.2.3-.2h-.1 6.7c-4.3 9.9-8.6 19.8-12.9 29.8l-4.3 10c-5.7-13.3-11.5-26.5-17.2-39.8h3.4l3.4.1zM76.4.1c4.8 0 9.1 1.6 12.8 4.8 3.4 3 5.6 6.7 6.5 11.1 1.3 6.6-.4 12.5-4.9 17.5-2.8 3.1-6.3 5.1-10.5 5.9-1.2.3-2.5.4-3.8.4H60.7V.1H76.4zM149 10c.6 0 1.2.2 1.6.5.5.3.8.7 1.1 1.3v-.1.1c.9 1.9 1.5 4 1.7 6.1 0 .4.1.9.1 1.3v.8c-.1 5.4-1.8 9.9-5.3 13.7-3.2 3.4-7.2 5.4-11.9 6-3.8.5-7.4-.1-10.9-1.7-.5-.2-.9-.5-1.1-.9l-.1-.2c-.1-.2-.2-.4-.3-.5l-.1-.2c-.2-.7-.2-1.5.1-2.3.2-.5.6-.9 1-1.2.5-.4 1.2-.6 1.8-.6h.2c.3 0 .7.1 1 .3.6.3 1.3.5 2 .7.6.2 1.2.3 1.8.4.6.1 1.3.1 1.9.2h.5c2.1 0 4.1-.6 6-1.6.2-.1.5-.3.7-.4.3-.2.7-.4 1-.7.3-.2.5-.4.7-.6 2.6-2.2 4.1-5.1 4.6-8.5 0-.4.1-.7.1-1.1.1-2.2-.3-4.3-1.2-6.3-.8-2.2.7-4.6 3-4.5zM67.3 6.4H67v27.2h9.5c.6 0 1.2-.1 1.8-.1 3.1-.5 5.8-1.9 7.9-4.3 3.1-3.5 4.2-7.6 3.3-12.2-.6-2.7-1.9-4.9-3.8-6.8-2.6-2.5-5.6-3.8-9.2-3.8h-9.2zM131.9.3c3.5-.3 6.9.3 10.1 1.8.5.2.9.5 1.1.9l.1.2c.6.9.7 2 .2 3-.1.3-.3.5-.5.7V7c-.2.2-.4.3-.6.5 0 0-.1 0-.1.1l-.2.1c-.3.2-.6.3-1 .3h-.4c-.4 0-.8-.1-1.2-.3-1.6-.8-3.4-1.2-5.2-1.3h-.5c-5.3.1-9.3 2.5-12 7.1-1.1 2-1.6 4.1-1.6 6.4 0 .5 0 1 .1 1.5.2 1.4.6 2.8 1.2 4.1.9 1.9-.3 4.1-2.4 4.4h-.4c-.6 0-1.2-.2-1.7-.5s-.8-.7-1.1-1.3l-.6-1.5c-.8-2.1-1.2-4.3-1.2-6.6v-1.2c.3-4.9 2-9.1 5.4-12.7 3.4-3.4 7.6-5.4 12.5-5.8zM34 19.8v-1c-.2-2-.7-3.9-1.7-5.7-.4-.7-1.1-.9-1.7-.6-.6.3-.8 1.1-.4 1.8 1.3 2.4 1.8 4.9 1.3 7.6-.8 4.1-3.1 6.9-6.9 8.6-1.9.8-3.8 1.1-5.8.8-1.5-.2-2.9-.6-4.2-1.4-.3-.2-.6-.2-.9-.1-.5.1-.9.5-1 1.1-.1.5.2 1 .7 1.3 3.2 1.8 6.6 2.3 10.2 1.4C29.6 32 34 26.4 34 19.8zm-13.3 6.6c0-.1 0-.2.2-.2 1.4-.2 2.6-.9 3.5-2.1 1.5-2 1.7-4.2.6-6.5-.7-1.5-1.6-2.9-2.6-4.2-.8-1.1-1.6-2.2-2.5-3.3-.1.1-.2.2-.2.3-.9 1.4-1.9 2.8-2.8 4.2-.6 1-1.3 2-1.8 3-.6 1.1-1 2.3-.8 3.6.3 2.1 1.5 3.6 3.4 4.5.5.2 1 .3 1.5.5v2.6c0 .1 0 .3.1.4.2.3.5.4.8.3s.5-.3.5-.7c.2-.7.2-1.6.1-2.4zM8.7 18c.6-3.3 2.3-5.8 5.1-7.7 2.3-1.5 4.9-2.1 7.6-1.8 1.6.2 3.1.7 4.5 1.5.3.2.6.2.9.1.5-.1.9-.5 1-1.1.1-.5-.2-1-.6-1.2-2.2-1.3-4.6-1.9-7.3-2-.3 0-.8 0-1.3.1-.3 0-.5.1-.8.1-3.4.6-6.2 2.1-8.4 4.8-3.1 3.8-4 8.1-2.7 12.9.3 1.1.8 2.2 1.4 3.2.3.4.6.6 1.1.6s.9-.3 1.1-.7c.2-.4.1-.8-.1-1.2-1.5-2.2-2-4.8-1.5-7.6zM40 20c0 11-9 20-20 20S0 31 0 20 9 0 20 0s20 9 20 20zm-15.9 1.7c.4-1.3.1-2.6-.5-3.7-.8-1.5-1.7-2.9-2.7-4.3l-.1-.1v11.1h.2c1.6-.4 2.6-1.4 3.1-3zm-4.8-7.9-1.4 2.1 1.4 1.4v-3.5zm-.1 9.6c-.7-.8-1.4-1.6-2.2-2.4-.4-.4-.7-.8-1.1-1.2-.5 2.6 1.6 4.7 3.4 4.8v-.9c0-.1-.1-.2-.1-.3zm.1-2c-1-1.1-1.9-2.1-2.9-3.1.2-.4.4-.7.7-1.1l.2.2 1.9 1.9c.1.1.1.2.1.3v1.8z"
                        })))
                    }, {
                        height: 55,
                        width: 200
                    }),
                    link: "https://dovu.earth/en/",
                    name: "DOVU"
                }, {
                    iconA: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nP({
                            viewBox: "0 0 300 89",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, e), lw || (lw = l6.createElement("path", {
                            d: "M103.663 1.038c.473.472.799 1.98.923 4.22.079 1.599-.022 2.533-.529 4.503-.326 1.272-.349 1.305-1.002 1.97-.394.393-.675.776-.675.911s.158.518.338.867c.607 1.137.495 1.553-.811 3.253-.653.832-.664.878-.754 1.767-.09.855-.146.99-.822 2.116-.405.675-.9 1.508-1.103 1.868-.439.8-.968 1.16-2.802 1.936-2.893 1.204-4.277 1.53-6.765 1.576-1.114.023-1.823.09-2.251.214-.428.124-1.35.214-2.926.281-1.925.079-2.42.135-2.983.338-.372.135-1.779.574-3.14.98-1.351.404-2.995.978-3.659 1.271-1.913.878-2.532 1.103-4.153 1.53-1.89.507-4.615 1.498-5.875 2.162-.53.27-1.542.923-2.251 1.44-1.295.957-3.253 2.038-3.884 2.15-.281.045-.45-.033-1.035-.506-.383-.315-.743-.574-.8-.574-.056 0-.393.225-.742.506-.36.282-.732.507-.81.507-.08 0-.36-.079-.608-.18-.563-.225-.912-.113-1.238.428-.394.663-.406 1.226-.023 2.442.326 1.013.349 1.227.405 3.275.056 2.24.214 3.186.574 3.49.09.067.214.427.293.787.18.946.191.957.945.72l.642-.202.214.27c.416.53 1.778 3.433 2.183 4.66l.417 1.227-.237 2.6c-.202 2.217-.292 2.803-.63 3.95-.214.732-.495 1.442-.619 1.577-.225.236-.236.371-.214 2.768.023 3.04.023 3.017-1.294 4.379-1.53 1.587-1.475 1.44-1.475 3.545 0 1.576-.033 1.88-.247 2.477-.44 1.193-.484 1.902-.484 8.295 0 5.346-.023 6.168-.169 6.168-.09 0-.214-.101-.281-.225-.35-.653-.653-3.624-.788-7.676-.124-3.805-.304-5.065-.968-6.517-.552-1.227-.586-1.689-.214-2.612l.293-.754-.293-1.215c-.158-.665-.315-1.329-.35-1.486-.033-.158-.112-.473-.168-.71-.112-.416-.112-.416-.416-.258-.17.09-.597.394-.968.675-1.08.856-1.025 1.013-1.025-2.78l-.01-3.298-.642-1.294-.642-1.283v-1.328c0-1.081-.034-1.407-.214-1.745-.248-.495-.461-1.53-.461-2.285 0-.675.551-1.778 1.666-3.343.945-1.328.9-1.238 1.485-2.893.26-.731.71-1.778.99-2.307.507-.934.53-1.013.845-3.152.405-2.825.518-5.436.259-5.943-.102-.19-.27-.393-.383-.45-.101-.056-.8-.135-1.542-.169-.9-.033-1.508-.123-1.823-.258-.45-.18-.507-.18-.99 0-.631.247-.856.18-2.027-.608-1.182-.8-3.714-2.038-5.74-2.814-.923-.36-2.386-.99-3.23-1.396-.845-.405-1.925-.867-2.387-1.024-1.486-.495-2.544-.912-4.513-1.756-1.767-.754-1.981-.822-2.814-.855-2.116-.09-4.255-.27-4.964-.417-.428-.09-1.508-.248-2.397-.349-.9-.09-1.981-.247-2.42-.338-.44-.1-1.812-.382-3.05-.63-3.14-.63-5.493-1.272-6.067-1.654-.248-.17-.608-.552-.8-.833-1.373-2.139-2.003-3.23-2.476-4.255-.304-.653-.889-1.79-1.317-2.544-.416-.742-.765-1.452-.765-1.575 0-.124.18-.496.394-.833.214-.338.394-.732.394-.878 0-.18-.248-.53-.72-1.013-.676-.72-.72-.8-.845-1.542C.978 9.052.54 7.453.224 6.868c-.27-.54-.281-.585-.112-.98.09-.224.213-.404.27-.404.202 0 .247-.518.112-1.633C.36 2.602.438 1.758.72 1.477c.147-.158.338-.18 1.115-.124 2.622.191 6.393 2.25 9.995 5.481.439.394 1.677 1.362 2.757 2.173 1.08.81 2.477 1.88 3.096 2.386.619.506 1.643 1.305 2.273 1.79.642.472 1.61 1.26 2.15 1.733.54.484 1.44 1.204 2.004 1.598.551.394 1.632 1.238 2.408 1.857 2.082 1.689 3.86 2.983 5.425 3.95.755.474 2.173 1.374 3.13 2.016 3.658 2.408 5.774 3.579 6.55 3.59l.462.011.427-.866c.44-.89.867-1.34 1.014-1.07.044.068.213.642.37 1.261.496 1.88.766 2.319 2.477 3.962.833.8 1.688 1.553 1.914 1.666.393.214.416.214 1.024.011.337-.124.878-.36 1.193-.54 1.227-.698 1.463-2.105 1.227-7.125-.09-1.8-.158-3.568-.17-3.94v-.675h.507c.473 0 .518.023.732.45.203.417.225.788.293 4.638.09 4.378.157 5.009.653 5.965.382.743.63.934 1.226.934 1.723-.01 3.152-.472 4.075-1.305.259-.236.867-1.013 1.362-1.733 1.047-1.543 1.913-2.432 2.206-2.263.113.056.484.394.822.732.337.349.697.63.799.63.101 0 .439-.169.731-.371.304-.214 2.42-1.633 4.717-3.174 4.141-2.78 6.787-4.672 8.61-6.191.529-.428 1.868-1.418 2.983-2.184a200.984 200.984 0 0 0 4.457-3.23 124.355 124.355 0 0 1 3.545-2.589c1.419-.957 2.814-2.082 4.379-3.545 1.576-1.464 2.589-2.263 3.714-2.96 1.013-.63 1.475-.969 2.533-1.869 1.587-1.35 3.253-2.026 3.759-1.52Zm-94.22 25.64c.202.09.832.473 1.407.844 1.226.81 1.767.99 3.387 1.148a47.01 47.01 0 0 1 2.207.281c.562.09 2.532.214 4.39.282 1.856.056 3.702.124 4.108.157.922.068 5.56.89 6.978 1.238 2.634.653 6.326 2.42 6.99 3.343.292.428.416.327-2.049 1.666-4.851 2.634-7.17 3.748-10.175 4.908-.89.337-2.105.855-2.712 1.136a57.18 57.18 0 0 1-2.916 1.194c-.99.36-2.352.866-3.039 1.125-1.508.552-2.487 1.047-3.714 1.835-.507.326-1.036.63-1.17.675-.203.056-.485-.169-1.734-1.43-1.25-1.26-1.587-1.676-2.105-2.61-.495-.89-.855-1.34-1.812-2.308-1.835-1.823-2.431-3.22-1.722-3.962.214-.225.315-.473.36-.867.045-.529.034-.562-.641-1.362-.383-.461-.687-.877-.687-.934 0-.056.101-.337.214-.63.124-.293.27-.923.337-1.418.102-.8.17-.968.755-1.858.855-1.294 1.339-1.88 1.88-2.273.495-.36.911-.405 1.463-.18Zm99.915-.034c1.295.135 3.895.765 5.11 1.238 1.407.552 3.501 1.655 4.491 2.398 1.002.742 2.33 2.003 2.33 2.217 0 .27-5.312 5.29-5.594 5.29-.101 0-.54-.293-.979-.653-1.677-1.373-3.084-2.116-5.189-2.735-1.092-.326-1.44-.371-2.881-.416-1.407-.034-1.779-.012-2.578.191-2.048.518-3.59 1.565-4.198 2.848-.338.709-.754 2.273-.754 2.814 0 .878.968 2.25 2.082 2.96 1.114.72 2.353 1.024 8.014 1.97 5.369.9 8.622 2.363 11.188 5.03 1.328 1.397 2.319 3.062 2.769 4.706.259.956.371 2.757.259 4.097-.428 4.772-4.041 8.892-9.534 10.884-2.341.844-5.639 1.193-9.049.956-2.544-.168-3.512-.337-5.223-.855-1.677-.506-2.51-.844-3.883-1.52-1.89-.956-4.367-2.734-5.031-3.624-.236-.337-.248-.371-.079-.63.27-.416 3.58-4.266 4.345-5.054l.675-.709.473.36c.248.203.844.664 1.305 1.036 2.567 2.026 5.234 3.219 7.677 3.455 1.553.158 4.074.057 4.986-.18 1.441-.383 2.972-1.508 3.579-2.634.541-.979.619-2.566.192-3.669-.383-.99-1.767-2.206-3.096-2.735-.619-.248-2.566-.687-4.558-1.024-4.829-.833-6.562-1.25-8.33-2.015-1.992-.844-3.365-1.745-4.986-3.287-.596-.551-1.136-1.013-1.204-1.013-.067 0-.248.08-.394.18-.315.214-.214.26-1.868-.979-.72-.551-2.037-1.407-2.927-1.913a89.239 89.239 0 0 1-2.375-1.407c-1.125-.72-1.688-.98-3.41-1.565-2.566-.866-5.864-2.352-10.141-4.558-.496-.26-1.452-.653-2.139-.878-1.058-.36-1.227-.462-1.26-.687-.057-.394.303-.698 2.003-1.7 2.521-1.474 3.512-1.857 5.965-2.307.833-.157 2.15-.439 2.927-.63 1.17-.281 1.778-.36 3.602-.44 3.32-.157 3.478-.18 6.134-.843 2.386-.608 2.544-.63 4.22-.676 1.813-.045 2.004-.078 2.477-.416.428-.304 1.733-.552 2.352-.428.665.124.867.203 1.385.53.506.314.788.326 1.407.044.675-.315 2.836-.911 3.669-1.013 1.013-.135 4.795-.135 6.044-.011Zm138.388.777c.608.281.979.652 3.118 3.196a480.006 480.006 0 0 0 2.363 2.77c.574.652.777 1.237.541 1.53-.124.146-1.137.169-7.665.169h-7.53v17.097c0 9.41-.045 17.131-.09 17.165-.259.157-1.903.202-5.02.124l-3.445-.08V35.098l-6.348-.034c-3.489-.022-6.393-.079-6.449-.124-.102-.112-.192-6.708-.09-7.248.056-.304.124-.36.427-.405.203-.023 6.968-.045 15.049-.057 14.047-.022 14.711-.01 15.139.192Zm16.883-.057c.799.338 1.283.878 10.13 11.425 1.306 1.542 2.42 2.814 2.477 2.814.067.011.675-.664 1.361-1.486 4.784-5.752 9.838-11.706 10.322-12.156.326-.293.765-.585.979-.642.484-.135 9.781-.146 10.006-.01.304.19-.101.877-1.429 2.453-1.295 1.508-6.101 7.203-10.198 12.066l-3.748 4.423c-.945 1.115-1.722 2.049-1.722 2.105 0 .045.417.552.934 1.137.946 1.092 1.531 1.778 8.915 10.524 2.296 2.712 4.862 5.752 5.706 6.742 1.385 1.62 1.554 1.857 1.554 2.229 0 .382-.034.427-.361.472-.202.034-2.42.057-4.93.034-5.053-.034-4.761.011-5.717-.822-.271-.225-1.137-1.181-1.914-2.116-.788-.934-2.893-3.444-4.693-5.582-1.79-2.139-3.636-4.323-4.086-4.874-.45-.54-.889-.98-.979-.98-.079 0-.8.777-1.587 1.712a3198.13 3198.13 0 0 1-8.498 10.05c-.788.924-1.633 1.835-1.858 2.015-.799.63-.866.642-5.965.575-2.566-.023-4.716-.08-4.784-.113-.169-.113-.124-.54.09-.844.113-.158 1.441-1.756 2.961-3.546 1.519-1.8 4.941-5.841 7.597-9.004 2.668-3.152 5.211-6.135 5.662-6.63.439-.495.81-.934.81-.968 0-.033-.293-.394-.653-.81-.349-.405-1.598-1.88-2.769-3.264-1.181-1.385-2.498-2.938-2.949-3.467-.45-.529-2.543-3.005-4.659-5.515-2.116-2.51-4.233-5.009-4.705-5.56-1.317-1.52-1.351-1.565-1.43-2.004-.067-.371-.056-.416.192-.461.135-.023 2.352-.057 4.907-.068 3.793-.011 4.716.023 5.031.146Zm-104.632.023.349.067v3.805c0 3.365-.022 3.816-.18 3.872-.101.033-4.964.067-10.805.067h-10.625v9.455h17.221v3.77c0 2.072-.012 3.782-.023 3.794-.022.022-3.883.056-8.588.09l-8.554.056v9.297l11.03.011c6.067 0 11.335.034 11.706.068.653.079.675.09.709.416.045.417.068.383-2.814 3.805-2.273 2.69-2.825 3.275-3.32 3.467-.158.056-5.437.1-13.102.1h-12.82V27.444l.315-.045c.507-.079 29.119-.09 29.501-.011Zm16.895.236c.574.36 1.519 1.373 3.624 3.86 1.013 1.205 2.555 3.029 3.411 4.053a1918.16 1918.16 0 0 0 3.433 4.052c1.024 1.204 2.69 3.185 3.714 4.39 1.013 1.204 2.971 3.511 4.333 5.12 1.362 1.61 3.231 3.817 4.142 4.908.912 1.103 1.734 2.049 1.824 2.128.146.123.169-1.565.169-14.272V27.454l.371-.067c.417-.09 7.159-.079 7.71.011l.36.056v20.79c0 11.424-.033 20.89-.067 21.025l-.068.259h-3.928c-2.206 0-4.041-.045-4.198-.113-.405-.146-1.52-1.283-3.073-3.151-.754-.9-2.116-2.521-3.028-3.602-.923-1.08-2.611-3.084-3.759-4.446-1.148-1.362-2.893-3.433-3.883-4.604-2.803-3.309-4.908-5.808-7.834-9.297-1.475-1.767-2.825-3.309-2.983-3.421l-.304-.214.09.27c.124.36.203 27.497.09 28.071l-.101.45-4.165.034-4.175.023-.068-1.869c-.101-2.43-.101-37.84-.011-39.192.079-.99.09-1.024.371-1.069.158-.034 1.936-.045 3.951-.034 3.557.012 3.669.023 4.052.26ZM65.63 36.481c2.128.664 2.5.8 4.66 1.745a71.217 71.217 0 0 0 3.118 1.294 23.69 23.69 0 0 1 2.645 1.261c.71.405 1.711.99 2.24 1.294.529.293 2.127 1.092 3.545 1.768 2.848 1.339 3.681 1.834 5.122 3.039 1.125.934 1.89 1.834 2.364 2.769.393.776.382.821-.563 1.812-.484.517-.8 1.013-1.283 2.014-.54 1.126-.766 1.452-1.396 2.083-.754.742-3.422 2.881-3.962 3.162-.158.09-.62.158-1.07.158-.675 0-.911-.068-1.665-.428-.946-.45-1.666-.563-1.936-.281-.09.09-.282.743-.428 1.452-.146.709-.383 1.508-.518 1.778-.326.63-1.26 1.599-1.542 1.599-.371 0-.754-.507-1.857-2.42-1.035-1.824-1.812-2.994-2.195-3.343-.124-.102-.63-.44-1.125-.743a17.246 17.246 0 0 1-1.509-1.024c-.315-.248-.99-.676-1.485-.935-1.182-.607-2.071-1.52-3.073-3.14a39.61 39.61 0 0 0-1.598-2.375c-.98-1.35-1.216-1.812-1.441-2.904-.09-.461-.45-1.666-.8-2.679l-.63-1.845.046-1.711c.022-1.419.067-1.767.236-2.015.248-.372 1.497-1.317 2.273-1.722.8-.405 1.655-.327 3.827.337Zm-24.39-.168c.472.202 1.136.371 1.767.45.574.079 1.227.236 1.52.383l.506.247-.012 1.204c-.01.957-.067 1.34-.27 1.88l-.259.687.282.428c.709 1.102.731 1.643.079 2.51-.248.337-.608.911-.8 1.271-.292.574-.337.777-.326 1.531 0 .54.09 1.092.236 1.508.27.81.293.777-1.215 1.993-1.013.799-1.26 1.08-1.992 2.172-.462.687-1.036 1.508-1.295 1.823-.349.44-.495.754-.619 1.34-.079.416-.203.81-.248.855-.168.169-.799-.326-1.249-.99-.574-.844-.776-1.013-1.013-.867-.36.225-.585.675-.743 1.497-.236 1.114-.529 1.565-1.902 2.904-.642.619-1.362 1.384-1.598 1.688-.574.72-1.531 1.711-1.767 1.846-.518.282-1.115-.619-1.452-2.16-.282-1.318-.687-2.184-1.16-2.477-.191-.113-.427-.214-.517-.214-.462 0-1.126.304-2.094.968-.574.394-1.148.72-1.25.72-.292 0-3.466-3.286-4.457-4.614-.483-.653-1.058-1.543-1.26-1.97-.372-.766-.844-2.724-.844-3.478 0-.766 1.305-2.195 2.836-3.13 2.217-1.35 3.67-2.16 5.155-2.87.9-.427 2.544-1.294 3.658-1.913 2.465-1.373 3.523-1.913 6.326-3.196 1.193-.54 2.758-1.295 3.49-1.666.73-.383 1.417-.687 1.53-.687.112 0 .551.147.957.327Z",
                            fill: "#fff"
                        })))
                    }, {
                        height: 55,
                        width: 200
                    }),
                    iconB: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nO({
                            viewBox: "0 0 300 89",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, e), lb || (lb = l6.createElement("path", {
                            d: "M103.663 1.038c.473.472.799 1.98.923 4.22.079 1.599-.022 2.533-.529 4.503-.326 1.272-.349 1.305-1.002 1.97-.394.393-.675.776-.675.911s.158.518.338.867c.607 1.137.495 1.553-.811 3.253-.653.832-.664.878-.754 1.767-.09.855-.146.99-.822 2.116-.405.675-.9 1.508-1.103 1.868-.439.8-.968 1.16-2.802 1.936-2.893 1.204-4.277 1.53-6.765 1.576-1.114.023-1.823.09-2.251.214-.428.124-1.35.214-2.926.281-1.925.079-2.42.135-2.983.338-.372.135-1.779.574-3.14.98-1.351.404-2.995.978-3.659 1.271-1.913.878-2.532 1.103-4.153 1.53-1.89.507-4.615 1.498-5.875 2.162-.53.27-1.542.923-2.251 1.44-1.295.957-3.253 2.038-3.884 2.15-.281.045-.45-.033-1.035-.506-.383-.315-.743-.574-.8-.574-.056 0-.393.225-.742.506-.36.282-.732.507-.81.507-.08 0-.36-.079-.608-.18-.563-.225-.912-.113-1.238.428-.394.663-.406 1.226-.023 2.442.326 1.013.349 1.227.405 3.275.056 2.24.214 3.186.574 3.49.09.067.214.427.293.787.18.946.191.957.945.72l.642-.202.214.27c.416.53 1.778 3.433 2.183 4.66l.417 1.227-.237 2.6c-.202 2.217-.292 2.803-.63 3.95-.214.732-.495 1.442-.619 1.577-.225.236-.236.371-.214 2.768.023 3.04.023 3.017-1.294 4.379-1.53 1.587-1.475 1.44-1.475 3.545 0 1.576-.033 1.88-.247 2.477-.44 1.193-.484 1.902-.484 8.295 0 5.346-.023 6.168-.169 6.168-.09 0-.214-.101-.281-.225-.35-.653-.653-3.624-.788-7.676-.124-3.805-.304-5.065-.968-6.517-.552-1.227-.586-1.689-.214-2.612l.293-.754-.293-1.215c-.158-.665-.315-1.329-.35-1.486-.033-.158-.112-.473-.168-.71-.112-.416-.112-.416-.416-.258-.17.09-.597.394-.968.675-1.08.856-1.025 1.013-1.025-2.78l-.01-3.298-.642-1.294-.642-1.283v-1.328c0-1.081-.034-1.407-.214-1.745-.248-.495-.461-1.53-.461-2.285 0-.675.551-1.778 1.666-3.343.945-1.328.9-1.238 1.485-2.893.26-.731.71-1.778.99-2.307.507-.934.53-1.013.845-3.152.405-2.825.518-5.436.259-5.943-.102-.19-.27-.393-.383-.45-.101-.056-.8-.135-1.542-.169-.9-.033-1.508-.123-1.823-.258-.45-.18-.507-.18-.99 0-.631.247-.856.18-2.027-.608-1.182-.8-3.714-2.038-5.74-2.814-.923-.36-2.386-.99-3.23-1.396-.845-.405-1.925-.867-2.387-1.024-1.486-.495-2.544-.912-4.513-1.756-1.767-.754-1.981-.822-2.814-.855-2.116-.09-4.255-.27-4.964-.417-.428-.09-1.508-.248-2.397-.349-.9-.09-1.981-.247-2.42-.338-.44-.1-1.812-.382-3.05-.63-3.14-.63-5.493-1.272-6.067-1.654-.248-.17-.608-.552-.8-.833-1.373-2.139-2.003-3.23-2.476-4.255-.304-.653-.889-1.79-1.317-2.544-.416-.742-.765-1.452-.765-1.575 0-.124.18-.496.394-.833.214-.338.394-.732.394-.878 0-.18-.248-.53-.72-1.013-.676-.72-.72-.8-.845-1.542C.978 9.052.54 7.453.224 6.868c-.27-.54-.281-.585-.112-.98.09-.224.213-.404.27-.404.202 0 .247-.518.112-1.633C.36 2.602.438 1.758.72 1.477c.147-.158.338-.18 1.115-.124 2.622.191 6.393 2.25 9.995 5.481.439.394 1.677 1.362 2.757 2.173 1.08.81 2.477 1.88 3.096 2.386.619.506 1.643 1.305 2.273 1.79.642.472 1.61 1.26 2.15 1.733.54.484 1.44 1.204 2.004 1.598.551.394 1.632 1.238 2.408 1.857 2.082 1.689 3.86 2.983 5.425 3.95.755.474 2.173 1.374 3.13 2.016 3.658 2.408 5.774 3.579 6.55 3.59l.462.011.427-.866c.44-.89.867-1.34 1.014-1.07.044.068.213.642.37 1.261.496 1.88.766 2.319 2.477 3.962.833.8 1.688 1.553 1.914 1.666.393.214.416.214 1.024.011.337-.124.878-.36 1.193-.54 1.227-.698 1.463-2.105 1.227-7.125-.09-1.8-.158-3.568-.17-3.94v-.675h.507c.473 0 .518.023.732.45.203.417.225.788.293 4.638.09 4.378.157 5.009.653 5.965.382.743.63.934 1.226.934 1.723-.01 3.152-.472 4.075-1.305.259-.236.867-1.013 1.362-1.733 1.047-1.543 1.913-2.432 2.206-2.263.113.056.484.394.822.732.337.349.697.63.799.63.101 0 .439-.169.731-.371.304-.214 2.42-1.633 4.717-3.174 4.141-2.78 6.787-4.672 8.61-6.191.529-.428 1.868-1.418 2.983-2.184a200.984 200.984 0 0 0 4.457-3.23 124.355 124.355 0 0 1 3.545-2.589c1.419-.957 2.814-2.082 4.379-3.545 1.576-1.464 2.589-2.263 3.714-2.96 1.013-.63 1.475-.969 2.533-1.869 1.587-1.35 3.253-2.026 3.759-1.52Zm-94.22 25.64c.202.09.832.473 1.407.844 1.226.81 1.767.99 3.387 1.148a47.01 47.01 0 0 1 2.207.281c.562.09 2.532.214 4.39.282 1.856.056 3.702.124 4.108.157.922.068 5.56.89 6.978 1.238 2.634.653 6.326 2.42 6.99 3.343.292.428.416.327-2.049 1.666-4.851 2.634-7.17 3.748-10.175 4.908-.89.337-2.105.855-2.712 1.136a57.18 57.18 0 0 1-2.916 1.194c-.99.36-2.352.866-3.039 1.125-1.508.552-2.487 1.047-3.714 1.835-.507.326-1.036.63-1.17.675-.203.056-.485-.169-1.734-1.43-1.25-1.26-1.587-1.676-2.105-2.61-.495-.89-.855-1.34-1.812-2.308-1.835-1.823-2.431-3.22-1.722-3.962.214-.225.315-.473.36-.867.045-.529.034-.562-.641-1.362-.383-.461-.687-.877-.687-.934 0-.056.101-.337.214-.63.124-.293.27-.923.337-1.418.102-.8.17-.968.755-1.858.855-1.294 1.339-1.88 1.88-2.273.495-.36.911-.405 1.463-.18Zm99.915-.034c1.295.135 3.895.765 5.11 1.238 1.407.552 3.501 1.655 4.491 2.398 1.002.742 2.33 2.003 2.33 2.217 0 .27-5.312 5.29-5.594 5.29-.101 0-.54-.293-.979-.653-1.677-1.373-3.084-2.116-5.189-2.735-1.092-.326-1.44-.371-2.881-.416-1.407-.034-1.779-.012-2.578.191-2.048.518-3.59 1.565-4.198 2.848-.338.709-.754 2.273-.754 2.814 0 .878.968 2.25 2.082 2.96 1.114.72 2.353 1.024 8.014 1.97 5.369.9 8.622 2.363 11.188 5.03 1.328 1.397 2.319 3.062 2.769 4.706.259.956.371 2.757.259 4.097-.428 4.772-4.041 8.892-9.534 10.884-2.341.844-5.639 1.193-9.049.956-2.544-.168-3.512-.337-5.223-.855-1.677-.506-2.51-.844-3.883-1.52-1.89-.956-4.367-2.734-5.031-3.624-.236-.337-.248-.371-.079-.63.27-.416 3.58-4.266 4.345-5.054l.675-.709.473.36c.248.203.844.664 1.305 1.036 2.567 2.026 5.234 3.219 7.677 3.455 1.553.158 4.074.057 4.986-.18 1.441-.383 2.972-1.508 3.579-2.634.541-.979.619-2.566.192-3.669-.383-.99-1.767-2.206-3.096-2.735-.619-.248-2.566-.687-4.558-1.024-4.829-.833-6.562-1.25-8.33-2.015-1.992-.844-3.365-1.745-4.986-3.287-.596-.551-1.136-1.013-1.204-1.013-.067 0-.248.08-.394.18-.315.214-.214.26-1.868-.979-.72-.551-2.037-1.407-2.927-1.913a89.239 89.239 0 0 1-2.375-1.407c-1.125-.72-1.688-.98-3.41-1.565-2.566-.866-5.864-2.352-10.141-4.558-.496-.26-1.452-.653-2.139-.878-1.058-.36-1.227-.462-1.26-.687-.057-.394.303-.698 2.003-1.7 2.521-1.474 3.512-1.857 5.965-2.307.833-.157 2.15-.439 2.927-.63 1.17-.281 1.778-.36 3.602-.44 3.32-.157 3.478-.18 6.134-.843 2.386-.608 2.544-.63 4.22-.676 1.813-.045 2.004-.078 2.477-.416.428-.304 1.733-.552 2.352-.428.665.124.867.203 1.385.53.506.314.788.326 1.407.044.675-.315 2.836-.911 3.669-1.013 1.013-.135 4.795-.135 6.044-.011Zm138.388.777c.608.281.979.652 3.118 3.196a480.006 480.006 0 0 0 2.363 2.77c.574.652.777 1.237.541 1.53-.124.146-1.137.169-7.665.169h-7.53v17.097c0 9.41-.045 17.131-.09 17.165-.259.157-1.903.202-5.02.124l-3.445-.08V35.098l-6.348-.034c-3.489-.022-6.393-.079-6.449-.124-.102-.112-.192-6.708-.09-7.248.056-.304.124-.36.427-.405.203-.023 6.968-.045 15.049-.057 14.047-.022 14.711-.01 15.139.192Zm16.883-.057c.799.338 1.283.878 10.13 11.425 1.306 1.542 2.42 2.814 2.477 2.814.067.011.675-.664 1.361-1.486 4.784-5.752 9.838-11.706 10.322-12.156.326-.293.765-.585.979-.642.484-.135 9.781-.146 10.006-.01.304.19-.101.877-1.429 2.453-1.295 1.508-6.101 7.203-10.198 12.066l-3.748 4.423c-.945 1.115-1.722 2.049-1.722 2.105 0 .045.417.552.934 1.137.946 1.092 1.531 1.778 8.915 10.524 2.296 2.712 4.862 5.752 5.706 6.742 1.385 1.62 1.554 1.857 1.554 2.229 0 .382-.034.427-.361.472-.202.034-2.42.057-4.93.034-5.053-.034-4.761.011-5.717-.822-.271-.225-1.137-1.181-1.914-2.116-.788-.934-2.893-3.444-4.693-5.582-1.79-2.139-3.636-4.323-4.086-4.874-.45-.54-.889-.98-.979-.98-.079 0-.8.777-1.587 1.712a3198.13 3198.13 0 0 1-8.498 10.05c-.788.924-1.633 1.835-1.858 2.015-.799.63-.866.642-5.965.575-2.566-.023-4.716-.08-4.784-.113-.169-.113-.124-.54.09-.844.113-.158 1.441-1.756 2.961-3.546 1.519-1.8 4.941-5.841 7.597-9.004 2.668-3.152 5.211-6.135 5.662-6.63.439-.495.81-.934.81-.968 0-.033-.293-.394-.653-.81-.349-.405-1.598-1.88-2.769-3.264-1.181-1.385-2.498-2.938-2.949-3.467-.45-.529-2.543-3.005-4.659-5.515-2.116-2.51-4.233-5.009-4.705-5.56-1.317-1.52-1.351-1.565-1.43-2.004-.067-.371-.056-.416.192-.461.135-.023 2.352-.057 4.907-.068 3.793-.011 4.716.023 5.031.146Zm-104.632.023.349.067v3.805c0 3.365-.022 3.816-.18 3.872-.101.033-4.964.067-10.805.067h-10.625v9.455h17.221v3.77c0 2.072-.012 3.782-.023 3.794-.022.022-3.883.056-8.588.09l-8.554.056v9.297l11.03.011c6.067 0 11.335.034 11.706.068.653.079.675.09.709.416.045.417.068.383-2.814 3.805-2.273 2.69-2.825 3.275-3.32 3.467-.158.056-5.437.1-13.102.1h-12.82V27.444l.315-.045c.507-.079 29.119-.09 29.501-.011Zm16.895.236c.574.36 1.519 1.373 3.624 3.86 1.013 1.205 2.555 3.029 3.411 4.053a1918.16 1918.16 0 0 0 3.433 4.052c1.024 1.204 2.69 3.185 3.714 4.39 1.013 1.204 2.971 3.511 4.333 5.12 1.362 1.61 3.231 3.817 4.142 4.908.912 1.103 1.734 2.049 1.824 2.128.146.123.169-1.565.169-14.272V27.454l.371-.067c.417-.09 7.159-.079 7.71.011l.36.056v20.79c0 11.424-.033 20.89-.067 21.025l-.068.259h-3.928c-2.206 0-4.041-.045-4.198-.113-.405-.146-1.52-1.283-3.073-3.151-.754-.9-2.116-2.521-3.028-3.602-.923-1.08-2.611-3.084-3.759-4.446-1.148-1.362-2.893-3.433-3.883-4.604-2.803-3.309-4.908-5.808-7.834-9.297-1.475-1.767-2.825-3.309-2.983-3.421l-.304-.214.09.27c.124.36.203 27.497.09 28.071l-.101.45-4.165.034-4.175.023-.068-1.869c-.101-2.43-.101-37.84-.011-39.192.079-.99.09-1.024.371-1.069.158-.034 1.936-.045 3.951-.034 3.557.012 3.669.023 4.052.26ZM65.63 36.481c2.128.664 2.5.8 4.66 1.745a71.217 71.217 0 0 0 3.118 1.294 23.69 23.69 0 0 1 2.645 1.261c.71.405 1.711.99 2.24 1.294.529.293 2.127 1.092 3.545 1.768 2.848 1.339 3.681 1.834 5.122 3.039 1.125.934 1.89 1.834 2.364 2.769.393.776.382.821-.563 1.812-.484.517-.8 1.013-1.283 2.014-.54 1.126-.766 1.452-1.396 2.083-.754.742-3.422 2.881-3.962 3.162-.158.09-.62.158-1.07.158-.675 0-.911-.068-1.665-.428-.946-.45-1.666-.563-1.936-.281-.09.09-.282.743-.428 1.452-.146.709-.383 1.508-.518 1.778-.326.63-1.26 1.599-1.542 1.599-.371 0-.754-.507-1.857-2.42-1.035-1.824-1.812-2.994-2.195-3.343-.124-.102-.63-.44-1.125-.743a17.246 17.246 0 0 1-1.509-1.024c-.315-.248-.99-.676-1.485-.935-1.182-.607-2.071-1.52-3.073-3.14a39.61 39.61 0 0 0-1.598-2.375c-.98-1.35-1.216-1.812-1.441-2.904-.09-.461-.45-1.666-.8-2.679l-.63-1.845.046-1.711c.022-1.419.067-1.767.236-2.015.248-.372 1.497-1.317 2.273-1.722.8-.405 1.655-.327 3.827.337Zm-24.39-.168c.472.202 1.136.371 1.767.45.574.079 1.227.236 1.52.383l.506.247-.012 1.204c-.01.957-.067 1.34-.27 1.88l-.259.687.282.428c.709 1.102.731 1.643.079 2.51-.248.337-.608.911-.8 1.271-.292.574-.337.777-.326 1.531 0 .54.09 1.092.236 1.508.27.81.293.777-1.215 1.993-1.013.799-1.26 1.08-1.992 2.172-.462.687-1.036 1.508-1.295 1.823-.349.44-.495.754-.619 1.34-.079.416-.203.81-.248.855-.168.169-.799-.326-1.249-.99-.574-.844-.776-1.013-1.013-.867-.36.225-.585.675-.743 1.497-.236 1.114-.529 1.565-1.902 2.904-.642.619-1.362 1.384-1.598 1.688-.574.72-1.531 1.711-1.767 1.846-.518.282-1.115-.619-1.452-2.16-.282-1.318-.687-2.184-1.16-2.477-.191-.113-.427-.214-.517-.214-.462 0-1.126.304-2.094.968-.574.394-1.148.72-1.25.72-.292 0-3.466-3.286-4.457-4.614-.483-.653-1.058-1.543-1.26-1.97-.372-.766-.844-2.724-.844-3.478 0-.766 1.305-2.195 2.836-3.13 2.217-1.35 3.67-2.16 5.155-2.87.9-.427 2.544-1.294 3.658-1.913 2.465-1.373 3.523-1.913 6.326-3.196 1.193-.54 2.758-1.295 3.49-1.666.73-.383 1.417-.687 1.53-.687.112 0 .551.147.957.327Z",
                            fill: "#69ff52"
                        })))
                    }, {
                        height: 55,
                        width: 200
                    }),
                    link: "https://hederasentient.com/",
                    name: "Hedera Sentient"
                }, {
                    iconA: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nB({
                            id: "ledgerworks_svg__Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            x: 0,
                            y: 0,
                            viewBox: "0 0 1564 384",
                            style: {
                                enableBackground: "new 0 0 1564 384"
                            },
                            xmlSpace: "preserve"
                        }, e), lV || (lV = l6.createElement("style", null, ".ledgerworks_svg__st0{fill:#fff}")), lN || (lN = l6.createElement("path", {
                            className: "ledgerworks_svg__st0",
                            d: "M1564 253.89v6.33c-.99 7.57-4.18 13.39-9.55 17.46-12.52 9.51-30.2 9.33-45.39 5.26-7.89-2.11-15.1-5.8-21.64-11.05-.32-.25-.37-.55-.16-.9l7.09-11.5c.19-.3.42-.34.71-.13 10.24 7.57 22.09 12.62 35 11.84 7.12-.43 14.93-4 15.32-12.11.21-4.37-1.62-7.43-5.47-9.18-3.38-1.53-7.18-3.08-10.75-4.05-8.58-2.34-16.3-4.69-23.15-7.04-7-2.4-13.75-7.66-14.83-15.58-2.32-16.87 8.16-29.63 24.36-32.78 16.6-3.23 31.59.37 44.97 10.79.28.21.33.61.13.9l-7.56 10.89c-.22.32-.48.36-.77.11-7.04-5.88-15.24-9.17-24.6-9.87-9.81-.73-20.51 3.46-18.56 15.31.93 5.6 8.12 7.96 13.14 9.2 10.03 2.47 18.15 4.84 24.37 7.09 2.75.99 5.71 2.51 8.86 4.56 4.79 3.1 7.61 7.92 8.48 14.45zM220.9 210.41l87.88-154.26c.05-.09.15-.15.26-.15h87.58c.17 0 .3.13.3.3 0 .05-.01.1-.04.15L242.91 326.5c-.08.14-.27.19-.41.11a.29.29 0 0 1-.11-.11L132.32 133.62a.306.306 0 0 1 .11-.41c.05-.03.1-.04.15-.04l87.51.38c.17 0 .3.13.3.3 0 .05-.01.1-.04.15l-21.67 38.04c-.05.09-.05.21 0 .3l21.7 38.07c.08.14.27.19.41.11a.29.29 0 0 0 .11-.11zM88.31 133.6l66.05 115.86c.06.11.06.23 0 .34l-43.69 76.7c-.1.17-.31.22-.48.12a.345.345 0 0 1-.12-.12L.29 134.02a.36.36 0 0 1 .14-.48c.05-.03.11-.04.16-.04l87.42-.08c.12 0 .24.07.3.18zM709.19 267.65c-.05-.55-.21-.59-.5-.12-5.96 9.7-16.04 16.19-27.14 17.61-22.17 2.85-41.39-12.65-46.4-34.05-3.38-14.42-1.74-27.86 4.92-40.32 14.09-26.34 49.49-29.98 65.62-3.37.36.59.54.54.54-.15V154.5c0-.17.09-.26.27-.26l18.24-.01c.35 0 .52.18.52.53.01 35.98.01 71.58 0 106.79 0 3.08 1.58 4.95 4.74 5.6.33.07.5.27.5.61v15.31c0 .42-.21.67-.62.76-9.03 1.92-20.31.2-20.47-11.41-.02-1.61-.09-3.2-.22-4.77zm-47.25-7.35c12.81 13.63 32.66 10 42.16-4.96 1.43-2.25 2.14-4.52 2.13-6.82-.01-6.43 0-13.17.04-20.21.01-1.71-.35-3.3-1.08-4.76-4.18-8.28-10.35-13.69-18.5-16.24-13.72-4.28-25.36 4.07-30.57 16.49-5.17 12.3-3.43 26.67 5.82 36.5zM1460.16 191.07h20.03a.312.312 0 0 1 .23.52l-34.59 38.18c-.1.1-.11.26-.03.38l36.84 53.11c.1.14.07.33-.07.43a.28.28 0 0 1-.18.06h-19.68c-.1 0-.19-.06-.25-.14l-28.68-42.3a.317.317 0 0 0-.43-.09c-.02.01-.04.03-.05.04l-14.69 14.18a.31.31 0 0 0-.09.22l-.01 27.78c0 .17-.14.31-.31.31h-18.5c-.17 0-.31-.14-.31-.31l.01-128.89c0-.17.14-.31.31-.31l18.53-.01c.17 0 .31.14.31.31l-.01 80.89c0 .17.14.31.31.31.09 0 .17-.04.23-.1l40.85-44.47c.06-.06.14-.1.23-.1zM521.12 266.33l7.07 16.95c.07.17-.01.37-.18.44-.04.02-.08.03-.13.03h-84.55c-.19 0-.34-.15-.34-.34V158.08c0-.19.15-.34.34-.34H462c.19 0 .34.15.34.34l.02 107.71c0 .19.15.34.34.34l58.1-.01c.14 0 .27.08.32.21zM1208.21 157.74h20.47c.17 0 .31.13.31.31 0 .04-.01.08-.02.12l-50.55 125.39c-.05.12-.16.19-.29.19h-16.21c-.13 0-.24-.07-.29-.19l-22.53-55.52a.31.31 0 0 0-.58 0l-22.53 55.52c-.05.12-.16.19-.29.19h-16.25c-.13 0-.24-.07-.29-.19l-50.55-125.39c-.07-.16.01-.34.17-.41.04-.02.08-.02.12-.02h20.51c.13 0 .25.08.3.2l38.11 101.9a.31.31 0 0 0 .58 0l18.02-45.38a.28.28 0 0 0 0-.22l-20.98-55.57a.31.31 0 0 1 .18-.4c.04-.01.07-.02.11-.02h66.26a.312.312 0 0 1 .29.42l-20.77 55.57a.28.28 0 0 0 0 .22l18.01 45.38c.06.16.24.24.4.17.08-.03.15-.1.18-.18l37.81-101.89c.05-.12.17-.2.3-.2zm-58.89 13.89a.33.33 0 0 0-.31-.44l-20.22-.03c-.18 0-.33.15-.33.33 0 .04.01.07.02.11l10.06 28.54c.06.17.25.26.42.2.09-.03.16-.11.2-.2l10.16-28.51zM550.8 244.28c2.38 19.18 18.39 31.12 37.44 24.74 5.91-1.97 10.43-5.91 13.55-11.82.19-.37.49-.49.89-.37l15.1 4.45c.26.08.41.36.33.63-.01.03-.02.05-.03.07-10.06 20.65-35.31 27.68-55.89 21.15-27.63-8.77-38.63-40.08-27.89-65.85 7.04-16.91 22.49-27.24 40.9-28.1 30.82-1.45 51.14 24.05 48.19 53.76-.04.38-.25.57-.63.57h-71.28c-.51 0-.74.26-.68.77zm53.8-14.71c-4.74-34.5-50.83-34.4-54.61.1-.04.39.14.58.53.58h53.49c.33 0 .6-.27.6-.6 0-.03-.01-.06-.01-.08zM818.75 207.05v-15.81c0-.33.17-.5.51-.5h15.77c.43 0 .65.21.64.64-.09 26.53-.08 53.55.04 81.08.04 9.15-.42 15.51-1.38 19.08-6.34 23.59-28.95 32.4-51.31 31.28-15.83-.79-28.25-7.26-37.25-19.41-.21-.29-.19-.56.07-.81l9.98-9.53c.29-.28.56-.26.79.07 7.56 10.42 20.05 15.34 32.88 14.72 11.72-.57 21.74-6.1 25.51-17.66 2.23-6.84 1.23-15.52 1.44-23.02 0-.11-.09-.2-.19-.2-.07 0-.13.03-.17.09-5.63 9.41-13.91 15.07-24.86 16.98-19.2 3.34-36.65-9.08-43.42-26.65-5.29-13.73-5.2-27.52.27-41.39 6.52-16.53 22.15-27.82 40.27-26.88 12.27.64 22.69 7.49 29.82 18.1.39.59.59.53.59-.18zm-24.81 61.71c9.07-.73 22.77-9.87 22.68-20.65-.07-7.48-.06-14.46.01-20.95.01-.51-.09-1.03-.29-1.51-8.43-20.2-34.49-28.12-47.68-6.64-6.49 10.57-7.28 24.3-1.29 35.05 5.48 9.83 15.24 15.6 26.57 14.7zM873.12 244.26c.65 6.31 2.65 11.55 5.99 15.72 8.09 10.1 18.48 13.15 31.16 9.14 5.86-1.85 10.43-5.82 13.72-11.89.21-.39.53-.53.96-.4l15.23 4.51c.18.06.28.24.23.42 0 .01-.01.03-.02.04-8.33 17.39-27.86 25.46-46.28 23.37-28.19-3.2-45-28.81-40.66-56.11 3.89-24.49 23.79-40.79 48.57-39.9 28.77 1.03 47.17 26.45 43.65 53.77-.05.39-.27.58-.66.58H873.8c-.51 0-.73.25-.68.75zm53.9-14.61c-1.51-19.23-21.18-31.6-38.68-23.45-9 4.19-14.31 11.97-15.93 23.35-.07.47.14.7.61.7h53.45c.4 0 .58-.2.55-.6zM1315.81 224.2c8.43 33.77-15.74 65.07-51.31 60.88-11.07-1.31-20.45-6.22-28.12-14.73-15.32-17-16-45.68-1.87-63.58 12.53-15.87 34.01-21.52 53.05-14.49 14.16 5.23 24.57 17.18 28.25 31.92zm-45.25 44.72c14.96.24 27.31-13.65 27.58-31.02.27-17.37-11.63-31.64-26.59-31.87-14.96-.24-27.31 13.65-27.58 31.02-.28 17.36 11.63 31.63 26.59 31.87zM979.78 210.6c6.77-12.34 17.34-21.53 32.4-20.55.29.02.44.18.44.47v16.72c0 .36-.18.55-.54.56-12.43.56-24.26 5.54-30.28 16.73-.7 1.3-1.05 2.57-1.05 3.82-.01 16.67-.01 34.95 0 54.84 0 .31-.25.56-.55.56h-18.03c-.39 0-.59-.19-.59-.58v-91.64c0-.43.21-.64.64-.64l16.47-.01c.38-.01.57.18.57.57v19.02c0 .72.17.76.52.13zM1352.78 210.58c6.48-12.43 17.61-21.38 32.27-20.57.42.02.63.24.63.66l-.08 16.56c0 .38-.19.57-.57.58-12.05.31-24.33 5.68-30.22 16.61a8.803 8.803 0 0 0-1.08 4.22c.02 18.3.03 36.44.02 54.43 0 .45-.23.68-.68.68h-17.78c-.47 0-.71-.24-.71-.71v-91.51c0-.42.21-.63.64-.63l16.47-.03c.38 0 .57.19.57.57v19.01c0 .74.17.78.52.13z"
                        })))
                    }, {
                        height: 55,
                        width: 200
                    }),
                    iconB: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nL({
                            id: "ledgerworks_green_svg__Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            x: 0,
                            y: 0,
                            viewBox: "0 0 1564 384",
                            style: {
                                enableBackground: "new 0 0 1564 384"
                            },
                            xmlSpace: "preserve"
                        }, e), lj || (lj = l6.createElement("style", null, ".ledgerworks_green_svg__st0{fill:#69ff52}")), lH || (lH = l6.createElement("path", {
                            className: "ledgerworks_green_svg__st0",
                            d: "M1564 253.89v6.33c-.99 7.57-4.18 13.39-9.55 17.46-12.52 9.51-30.2 9.33-45.39 5.26-7.89-2.11-15.1-5.8-21.64-11.05-.32-.25-.37-.55-.16-.9l7.09-11.5c.19-.3.42-.34.71-.13 10.24 7.57 22.09 12.62 35 11.84 7.12-.43 14.93-4 15.32-12.11.21-4.37-1.62-7.43-5.47-9.18-3.38-1.53-7.18-3.08-10.75-4.05-8.58-2.34-16.3-4.69-23.15-7.04-7-2.4-13.75-7.66-14.83-15.58-2.32-16.87 8.16-29.63 24.36-32.78 16.6-3.23 31.59.37 44.97 10.79.28.21.33.61.13.9l-7.56 10.89c-.22.32-.48.36-.77.11-7.04-5.88-15.24-9.17-24.6-9.87-9.81-.73-20.51 3.46-18.56 15.31.93 5.6 8.12 7.96 13.14 9.2 10.03 2.47 18.15 4.84 24.37 7.09 2.75.99 5.71 2.51 8.86 4.56 4.79 3.1 7.61 7.92 8.48 14.45zM220.9 210.41l87.88-154.26c.05-.09.15-.15.26-.15h87.58c.17 0 .3.13.3.3 0 .05-.01.1-.04.15L242.91 326.5c-.08.14-.27.19-.41.11a.29.29 0 0 1-.11-.11L132.32 133.62a.306.306 0 0 1 .11-.41c.05-.03.1-.04.15-.04l87.51.38c.17 0 .3.13.3.3 0 .05-.01.1-.04.15l-21.67 38.04c-.05.09-.05.21 0 .3l21.7 38.07c.08.14.27.19.41.11a.29.29 0 0 0 .11-.11zM88.31 133.6l66.05 115.86c.06.11.06.23 0 .34l-43.69 76.7c-.1.17-.31.22-.48.12a.345.345 0 0 1-.12-.12L.29 134.02a.36.36 0 0 1 .14-.48c.05-.03.11-.04.16-.04l87.42-.08c.12 0 .24.07.3.18zM709.19 267.65c-.05-.55-.21-.59-.5-.12-5.96 9.7-16.04 16.19-27.14 17.61-22.17 2.85-41.39-12.65-46.4-34.05-3.38-14.42-1.74-27.86 4.92-40.32 14.09-26.34 49.49-29.98 65.62-3.37.36.59.54.54.54-.15V154.5c0-.17.09-.26.27-.26l18.24-.01c.35 0 .52.18.52.53.01 35.98.01 71.58 0 106.79 0 3.08 1.58 4.95 4.74 5.6.33.07.5.27.5.61v15.31c0 .42-.21.67-.62.76-9.03 1.92-20.31.2-20.47-11.41-.02-1.61-.09-3.2-.22-4.77zm-47.25-7.35c12.81 13.63 32.66 10 42.16-4.96 1.43-2.25 2.14-4.52 2.13-6.82-.01-6.43 0-13.17.04-20.21.01-1.71-.35-3.3-1.08-4.76-4.18-8.28-10.35-13.69-18.5-16.24-13.72-4.28-25.36 4.07-30.57 16.49-5.17 12.3-3.43 26.67 5.82 36.5zM1460.16 191.07h20.03a.312.312 0 0 1 .23.52l-34.59 38.18c-.1.1-.11.26-.03.38l36.84 53.11c.1.14.07.33-.07.43a.28.28 0 0 1-.18.06h-19.68c-.1 0-.19-.06-.25-.14l-28.68-42.3a.317.317 0 0 0-.43-.09c-.02.01-.04.03-.05.04l-14.69 14.18a.31.31 0 0 0-.09.22l-.01 27.78c0 .17-.14.31-.31.31h-18.5c-.17 0-.31-.14-.31-.31l.01-128.89c0-.17.14-.31.31-.31l18.53-.01c.17 0 .31.14.31.31l-.01 80.89c0 .17.14.31.31.31.09 0 .17-.04.23-.1l40.85-44.47c.06-.06.14-.1.23-.1zM521.12 266.33l7.07 16.95c.07.17-.01.37-.18.44-.04.02-.08.03-.13.03h-84.55c-.19 0-.34-.15-.34-.34V158.08c0-.19.15-.34.34-.34H462c.19 0 .34.15.34.34l.02 107.71c0 .19.15.34.34.34l58.1-.01c.14 0 .27.08.32.21zM1208.21 157.74h20.47c.17 0 .31.13.31.31 0 .04-.01.08-.02.12l-50.55 125.39c-.05.12-.16.19-.29.19h-16.21c-.13 0-.24-.07-.29-.19l-22.53-55.52a.31.31 0 0 0-.58 0l-22.53 55.52c-.05.12-.16.19-.29.19h-16.25c-.13 0-.24-.07-.29-.19l-50.55-125.39c-.07-.16.01-.34.17-.41.04-.02.08-.02.12-.02h20.51c.13 0 .25.08.3.2l38.11 101.9a.31.31 0 0 0 .58 0l18.02-45.38a.28.28 0 0 0 0-.22l-20.98-55.57a.31.31 0 0 1 .18-.4c.04-.01.07-.02.11-.02h66.26a.312.312 0 0 1 .29.42l-20.77 55.57a.28.28 0 0 0 0 .22l18.01 45.38c.06.16.24.24.4.17.08-.03.15-.1.18-.18l37.81-101.89c.05-.12.17-.2.3-.2zm-58.89 13.89a.33.33 0 0 0-.31-.44l-20.22-.03c-.18 0-.33.15-.33.33 0 .04.01.07.02.11l10.06 28.54c.06.17.25.26.42.2.09-.03.16-.11.2-.2l10.16-28.51zM550.8 244.28c2.38 19.18 18.39 31.12 37.44 24.74 5.91-1.97 10.43-5.91 13.55-11.82.19-.37.49-.49.89-.37l15.1 4.45c.26.08.41.36.33.63-.01.03-.02.05-.03.07-10.06 20.65-35.31 27.68-55.89 21.15-27.63-8.77-38.63-40.08-27.89-65.85 7.04-16.91 22.49-27.24 40.9-28.1 30.82-1.45 51.14 24.05 48.19 53.76-.04.38-.25.57-.63.57h-71.28c-.51 0-.74.26-.68.77zm53.8-14.71c-4.74-34.5-50.83-34.4-54.61.1-.04.39.14.58.53.58h53.49c.33 0 .6-.27.6-.6 0-.03-.01-.06-.01-.08zM818.75 207.05v-15.81c0-.33.17-.5.51-.5h15.77c.43 0 .65.21.64.64-.09 26.53-.08 53.55.04 81.08.04 9.15-.42 15.51-1.38 19.08-6.34 23.59-28.95 32.4-51.31 31.28-15.83-.79-28.25-7.26-37.25-19.41-.21-.29-.19-.56.07-.81l9.98-9.53c.29-.28.56-.26.79.07 7.56 10.42 20.05 15.34 32.88 14.72 11.72-.57 21.74-6.1 25.51-17.66 2.23-6.84 1.23-15.52 1.44-23.02 0-.11-.09-.2-.19-.2-.07 0-.13.03-.17.09-5.63 9.41-13.91 15.07-24.86 16.98-19.2 3.34-36.65-9.08-43.42-26.65-5.29-13.73-5.2-27.52.27-41.39 6.52-16.53 22.15-27.82 40.27-26.88 12.27.64 22.69 7.49 29.82 18.1.39.59.59.53.59-.18zm-24.81 61.71c9.07-.73 22.77-9.87 22.68-20.65-.07-7.48-.06-14.46.01-20.95.01-.51-.09-1.03-.29-1.51-8.43-20.2-34.49-28.12-47.68-6.64-6.49 10.57-7.28 24.3-1.29 35.05 5.48 9.83 15.24 15.6 26.57 14.7zM873.12 244.26c.65 6.31 2.65 11.55 5.99 15.72 8.09 10.1 18.48 13.15 31.16 9.14 5.86-1.85 10.43-5.82 13.72-11.89.21-.39.53-.53.96-.4l15.23 4.51c.18.06.28.24.23.42 0 .01-.01.03-.02.04-8.33 17.39-27.86 25.46-46.28 23.37-28.19-3.2-45-28.81-40.66-56.11 3.89-24.49 23.79-40.79 48.57-39.9 28.77 1.03 47.17 26.45 43.65 53.77-.05.39-.27.58-.66.58H873.8c-.51 0-.73.25-.68.75zm53.9-14.61c-1.51-19.23-21.18-31.6-38.68-23.45-9 4.19-14.31 11.97-15.93 23.35-.07.47.14.7.61.7h53.45c.4 0 .58-.2.55-.6zM1315.81 224.2c8.43 33.77-15.74 65.07-51.31 60.88-11.07-1.31-20.45-6.22-28.12-14.73-15.32-17-16-45.68-1.87-63.58 12.53-15.87 34.01-21.52 53.05-14.49 14.16 5.23 24.57 17.18 28.25 31.92zm-45.25 44.72c14.96.24 27.31-13.65 27.58-31.02.27-17.37-11.63-31.64-26.59-31.87-14.96-.24-27.31 13.65-27.58 31.02-.28 17.36 11.63 31.63 26.59 31.87zM979.78 210.6c6.77-12.34 17.34-21.53 32.4-20.55.29.02.44.18.44.47v16.72c0 .36-.18.55-.54.56-12.43.56-24.26 5.54-30.28 16.73-.7 1.3-1.05 2.57-1.05 3.82-.01 16.67-.01 34.95 0 54.84 0 .31-.25.56-.55.56h-18.03c-.39 0-.59-.19-.59-.58v-91.64c0-.43.21-.64.64-.64l16.47-.01c.38-.01.57.18.57.57v19.02c0 .72.17.76.52.13zM1352.78 210.58c6.48-12.43 17.61-21.38 32.27-20.57.42.02.63.24.63.66l-.08 16.56c0 .38-.19.57-.57.58-12.05.31-24.33 5.68-30.22 16.61a8.803 8.803 0 0 0-1.08 4.22c.02 18.3.03 36.44.02 54.43 0 .45-.23.68-.68.68h-17.78c-.47 0-.71-.24-.71-.71v-91.51c0-.42.21-.63.64-.63l16.47-.03c.38 0 .57.19.57.57v19.01c0 .74.17.78.52.13z"
                        })))
                    }, {
                        height: 55,
                        width: 200
                    }),
                    link: "https://www.lworks.io/",
                    name: "Ledger Works"
                }, {
                    iconA: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", n_({
                            id: "citadel_svg__Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            x: 0,
                            y: 0,
                            viewBox: "0 0 1540 251",
                            style: {
                                enableBackground: "new 0 0 1540 251"
                            },
                            xmlSpace: "preserve"
                        }, e), m || (m = l6.createElement("style", null, ".citadel_svg__st0{fill:#fff}")), v || (v = l6.createElement("path", {
                            className: "citadel_svg__st0",
                            d: "M250.98 125.74c0 69.12-56.03 125.15-125.15 125.15S.68 194.86.68 125.74 56.71.59 125.83.59s125.15 56.03 125.15 125.15zm-70.41 53.2c2.12 1.94 6 4.85 6.71 7.69.73 2.93 1.44 5.73 2.12 8.4.11.41.37.68.78.79l9.12 2.62c.5.14.93.02 1.29-.35 18.49-19.58 28.23-42.61 29.2-69.1 1.66-45.24-26.62-85.67-68.55-101.11-17.01-6.27-36.39-7.82-53.93-4.56C59.83 32.15 24.74 71.7 21.96 120c-2.24 38.84 17.46 74.97 50.55 95.06.27.17.55.16.82-.01l7.52-4.91c.33-.21.52-.51.59-.88l4.53-25.22c.06-.32.23-.56.52-.72l8.03-4.33c.16-.08.36-.02.44.13.02.05.04.1.04.15v45.59c0 .23.11.38.34.43l8.83 2.28c.22.05.33-.03.33-.26v-33.64c0-.39.17-.76.46-1.02l10.01-8.91c.5-.44.78-1.07.78-1.73v-31.48c0-.32.12-.62.33-.86l9.04-10c.43-.47.64-1.02.64-1.65-.01-12.37-.01-24.32-.02-35.84 0-1.17.26-2.22.77-3.17 2.21-4.07 4.37-8.04 6.49-11.91.53-.95.79-2.01.78-3.16-.04-13.26-.04-26.48-.01-39.66 0-.16.06-.29.17-.39a335.9 335.9 0 0 1 7.45-6.57c.01-.02.04-.02.06 0 .01.01.01.02.01.03.08 15.52.07 30.86-.03 46.01-.01 1.5.28 2.78.86 3.85 2.09 3.87 4.22 7.78 6.4 11.74.54.97.81 1.98.81 3.02.01 12.19 0 24.36-.01 36.51 0 .36.12.67.36.94l9.08 10.04c.21.23.32.52.32.83v32.05c0 .35.13.65.39.88l10.25 9.09c.57.51.86 1.14.86 1.91v25.24c0 .07.06.13.14.12.02 0 .04-.01.05-.01l8.97-4.86c.08-.05.12-.12.12-.21l-.03-35.3c0-.52.19-.61.57-.26z"
                        })), g || (g = l6.createElement("ellipse", {
                            transform: "matrix(1 -.0035 .0035 1 -.169 1.572)",
                            className: "citadel_svg__st0",
                            cx: 450.34,
                            cy: 49.14,
                            rx: 15.09,
                            ry: 13.83
                        })), p || (p = l6.createElement("path", {
                            className: "citadel_svg__st0",
                            d: "M734.02 88.17c-.47-7.48-1.03-15.09-1.02-22.71 0-10.57 0-20.3.01-29.17 0-.36.18-.54.54-.54H757c.17 0 .25.08.25.25v146.5c0 .33-.17.5-.5.5H738c-.35 0-.56-.17-.62-.52l-1.63-10.02a.484.484 0 0 0-.55-.4c-.1.02-.2.07-.27.14-4.75 4.84-10.21 8.49-16.37 10.94-5.61 2.24-11.73 2.95-18.34 2.12-29.68-3.72-38.12-34.68-36.03-59.75 1.68-20.23 12.5-40.13 32.5-45.89 10.28-2.96 19.91-1.89 28.89 3.22 2.79 1.58 5.3 3.65 7.77 5.67.48.39.7.27.67-.34zm-44.46 54.2c2.11 14.26 10.88 25.67 26.74 22.78 6.78-1.24 11.87-5.52 16.48-10.6.14-.15.22-.36.22-.58v-46.92c0-.36-.13-.66-.4-.89-5.48-4.85-11.49-7.49-18.03-7.94-14.96-1.04-23.15 11.56-25.15 24.83-.91 6.05-.87 12.49.14 19.32zM918.25 155.93c0 5.3.93 11.69 8.34 9.52.45-.13.72.03.79.49l2.82 16.88c.08.49-.22.96-.7 1.1-6.37 1.83-12.62 2.16-18.76 1-11.76-2.22-16.24-13.58-16.44-24.18-.05-2.42-.31-4.81-.3-7.22.01-37.05 0-76.12-.01-117.22 0-.37.18-.55.55-.55h23.17c.37 0 .55.18.55.55-.01 39.21-.01 79.08-.01 119.63zM1287.27 156.4c.01 5.29 1.26 11.2 8.32 9.05.45-.14.72.02.79.49l2.81 16.84c.1.58-.13.96-.7 1.13-3.84 1.17-7.98 1.73-12.42 1.67-11.01-.14-18.49-4.76-21.47-15.98-.73-2.75-1.15-5.38-1.24-7.87-.11-2.71-.36-5.55-.36-8.32V36.29c0-.36.18-.54.54-.54h23.42c.19 0 .29.1.29.3-.01 41.64-.01 81.76.02 120.35zM1343.28 156.41c0 5.3 1.25 11.18 8.32 9.04.45-.13.71.03.78.49l2.82 16.88c.07.45-.19.88-.63 1.02-5.87 1.89-13.05 2.26-18.75 1.14-14.78-2.92-16.69-17.87-16.72-30.06-.12-37.23-.15-76.73-.08-118.51 0-.44.22-.66.66-.66h23.28c.19 0 .29.1.29.3-.01 38.84 0 78.96.03 120.36zM370.17 163.98c14.23 1.84 24.59-3.46 33.99-13.24.29-.3.57-.29.84.02l12.21 14.32c.3.35.29.88-.02 1.23-13.02 14.56-29.28 20.88-48.77 18.97-32.84-3.22-51.51-27.74-54.8-59.02-1.37-13.1-.37-25.37 3.01-36.82 7.37-24.93 26.43-42.44 52.81-45 17.19-1.67 32.22 3.81 45.09 16.42.37.37.39.76.06 1.17l-12.24 14.78c-.28.34-.58.35-.89.04-8.78-8.8-19.31-13.08-31.8-10.87-20.83 3.68-30.35 23.81-31.36 43.84-.82 16.35 2.01 35.13 14.92 46.51 4.85 4.27 10.5 6.82 16.95 7.65zM1024.03 157.44c.33 2.22.72 2.23 1.15.02 3.38-17.17 6.77-34.62 10.98-51.95 4.81-19.82 9.54-39.25 14.18-58.29.07-.28.32-.47.6-.47h20.35c.26 0 .49.18.55.44 4.52 18.81 9.11 37.67 13.77 56.56 4.48 18.2 8.04 36.52 11.72 54.83.05.25.2.35.45.3.09-.02.17-.05.25-.1.03-.01.05-.04.06-.08 1.69-11.19 3.27-21.63 4.73-31.31 1.03-6.83 2.09-13.42 3.18-19.77 3.36-19.59 6.83-39.78 10.41-60.55.03-.18.19-.32.38-.32h22.64c.29 0 .41.15.36.44l-25.99 135.33a.59.59 0 0 1-.58.48h-29.43c-.14 0-.25-.1-.28-.23-5.97-25.05-11.53-48.68-16.67-70.87-2.27-9.78-4.2-19.77-5.81-29.97-.42-2.69-.87-2.69-1.35-.02-1.93 10.77-3.92 20.73-5.99 29.88a8227.1 8227.1 0 0 1-16.32 70.96.33.33 0 0 1-.32.25h-29.1c-.14 0-.26-.1-.29-.24L980.74 47.31c-.08-.37.07-.56.45-.56h24.26c.11.01.17.06.19.17 6.84 37.89 12.97 74.73 18.39 110.52zM520.5 80.5h25c.33 0 .5.17.5.5v18.5c0 .33-.17.5-.5.5h-25.22c-.15 0-.27.13-.27.28-.04 17.16-.04 33.92.01 50.27.04 15.33 12.28 18.64 24.62 13.49.21-.09.45.01.54.22.01.02.02.05.02.07l3.9 16.94c.08.35-.05.59-.39.71-13.32 4.64-31.81 6.26-42.88-3.61-7.14-6.36-9.99-17.52-10.03-27-.08-16.94-.09-33.88-.02-50.82 0-.37-.18-.55-.55-.55H481.5c-.33 0-.5-.17-.5-.5V82.19c0-.37.19-.57.56-.6l14.89-.98c.3-.02.55-.25.58-.55l2.72-26.84c.03-.31.21-.47.52-.47h19.48c.14 0 .25.11.25.25v27c0 .33.17.5.5.5zM1507.5 80.5h25.25c.17 0 .25.08.25.25V99.5c0 .33-.17.5-.5.5h-25.22c-.14 0-.26.12-.26.27-.05 17.2-.05 34.07.02 50.61.02 4.86 1.77 10.72 6.48 13.55 5.24 3.14 12.68 1.88 18.12-.39.21-.09.45.01.54.22.01.02.02.04.02.06l3.9 16.95c.08.37-.05.61-.4.73-8.53 2.93-16.97 4.05-25.31 3.37-19.37-1.58-27.52-16.39-27.59-34.14-.07-16.8-.08-33.69-.02-50.68 0-.36-.18-.54-.55-.55l-13.84-.01c-.22 0-.39-.17-.39-.39V82.19c0-.37.19-.57.56-.6l14.89-.98c.3-.02.54-.25.57-.55l2.73-26.84c.03-.31.21-.47.52-.47h19.48c.14 0 .25.11.25.25v27c0 .33.17.5.5.5zM619.77 171.88c-7.62 6.45-16.42 11.83-26.05 13.28-16.19 2.44-31.63-5.24-35.2-21.96-4.4-20.57 7.54-33.03 26.01-39.02 10.25-3.33 21.11-5.48 32.57-6.46.35-.04.62-.34.61-.69-.11-9.48-4.53-17.95-14.66-19.12-11.4-1.31-22.06 3.43-31.86 9.48-.35.21-.81.1-1.02-.25-.01-.01-.01-.02-.02-.03l-8.29-15.04c-.19-.34-.12-.62.21-.83 11.72-7.42 25.22-12.55 38.96-13.14 19.88-.85 34.8 7.45 39.41 28.42 1.03 4.69 1.55 9.29 1.55 13.78.01 21.15.01 41.87.01 62.15 0 .3-.25.55-.55.55H622.7c-.38 0-.6-.19-.66-.56l-1.66-10.34c-.07-.43-.28-.51-.61-.22zm-21.01-5.54c7.13-.93 13.39-5.47 18.63-10.53.24-.23.36-.52.36-.86v-21.66c0-.34-.17-.49-.51-.46-8.69.96-16.38 2.73-23.05 5.3-7.5 2.9-13.93 8.2-13.1 17.11.88 9.49 9.57 12.17 17.67 11.1zM805.26 139.02c.05 2.26.43 4.43 1.12 6.51 4.99 15.05 15.56 22.09 31.71 21.1 6.92-.42 13.71-2.77 20.38-7.06.27-.17.49-.12.64.16l7.81 14.24c.16.29.07.65-.21.83-11 7.2-22.71 10.79-35.12 10.77-20.98-.05-38.57-11.08-46.24-30.87-2.96-7.64-4.26-16.24-3.9-25.81 1.13-29.73 23.79-55.33 55.39-50.21 29.1 4.71 37.08 33.92 33.34 59.04-.06.45-.45.78-.91.78h-63.5c-.35 0-.52.17-.51.52zm44.79-17.61c-.29-12.04-4.75-23.23-18.34-24.39-15.28-1.3-24.66 10.08-26.86 24.31-.07.45.13.67.58.67h44.04c.39 0 .59-.2.58-.59zM1211.77 171.88c-7.8 6.65-16.92 12.11-26.86 13.38-16.7 2.14-31.79-6.3-34.69-23.59-3.32-19.78 8.3-31.62 25.82-37.34 10.47-3.41 21.47-5.61 33-6.6.38-.04.66-.35.66-.72.02-9.21-4.4-17.66-14.26-19.04-11.25-1.57-22.66 3.35-32.23 9.45a.722.722 0 0 1-1.03-.26l-8.32-15.09c-.2-.35-.13-.64.22-.85 7.17-4.49 14.47-7.87 21.9-10.14 10.93-3.35 23.6-4.37 34.19-.99 17.71 5.64 23.81 23 23.82 40.72.02 22.62.02 43.12.01 61.51 0 .38-.3.68-.68.68h-18.62c-.38 0-.6-.19-.66-.56l-1.66-10.34c-.07-.43-.28-.51-.61-.22zm-38.72-17.07c.95 13.31 16.63 13.73 25.48 9.05 3.83-2.03 7.46-4.72 10.87-8.08.23-.23.35-.5.35-.83v-21.68c0-.35-.17-.5-.51-.46-4.67.51-9.76 1.44-15.27 2.8-9.53 2.35-21.77 7.34-20.92 19.2zM1393.26 139c.01 1.89.31 3.83.92 5.81 4.76 15.42 15.35 22.72 31.77 21.89 6.41-.32 13.24-2.7 20.5-7.14.29-.17.51-.11.66.18l7.81 14.22c.16.3.06.67-.22.85-11.06 7.21-22.77 10.8-35.13 10.76-21.05-.07-38.62-11.12-46.28-31.03-2.92-7.59-4.19-16.19-3.8-25.82 1.21-29.93 24.11-55.38 55.82-49.95 18.25 3.12 29.13 16.45 32.43 34.03 1.59 8.48 1.73 16.78.42 24.91-.09.53-.4.79-.93.79h-63.47c-.33 0-.5.17-.5.5zm44.79-17.59c-.36-12.06-4.65-23.08-18.15-24.36-15.43-1.46-24.86 10.04-27.07 24.42-.05.35.1.53.46.53h44.18c.39 0 .59-.2.58-.59zM438.36 80.5h23.52c.2 0 .36.16.36.36v101.78c0 .2-.16.36-.36.36h-23.52c-.2 0-.36-.16-.36-.36V80.86c0-.2.16-.36.36-.36z"
                        })), f || (f = l6.createElement("circle", {
                            className: "citadel_svg__st0",
                            cx: 76.77,
                            cy: 107.65,
                            r: 18.23
                        })))
                    }, {
                        height: 55,
                        width: 200
                    }),
                    iconB: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", no({
                            id: "citadel_green_svg__Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            x: 0,
                            y: 0,
                            viewBox: "0 0 1540 251",
                            style: {
                                enableBackground: "new 0 0 1540 251"
                            },
                            xmlSpace: "preserve"
                        }, e), u || (u = l6.createElement("style", null, ".citadel_green_svg__st0{fill:#69ff52}")), E || (E = l6.createElement("path", {
                            className: "citadel_green_svg__st0",
                            d: "M250.98 125.74c0 69.12-56.03 125.15-125.15 125.15S.68 194.86.68 125.74 56.71.59 125.83.59s125.15 56.03 125.15 125.15zm-70.41 53.2c2.12 1.94 6 4.85 6.71 7.69.73 2.93 1.44 5.73 2.12 8.4.11.41.37.68.78.79l9.12 2.62c.5.14.93.02 1.29-.35 18.49-19.58 28.23-42.61 29.2-69.1 1.66-45.24-26.62-85.67-68.55-101.11-17.01-6.27-36.39-7.82-53.93-4.56C59.83 32.15 24.74 71.7 21.96 120c-2.24 38.84 17.46 74.97 50.55 95.06.27.17.55.16.82-.01l7.52-4.91c.33-.21.52-.51.59-.88l4.53-25.22c.06-.32.23-.56.52-.72l8.03-4.33c.16-.08.36-.02.44.13.02.05.04.1.04.15v45.59c0 .23.11.38.34.43l8.83 2.28c.22.05.33-.03.33-.26v-33.64c0-.39.17-.76.46-1.02l10.01-8.91c.5-.44.78-1.07.78-1.73v-31.48c0-.32.12-.62.33-.86l9.04-10c.43-.47.64-1.02.64-1.65-.01-12.37-.01-24.32-.02-35.84 0-1.17.26-2.22.77-3.17 2.21-4.07 4.37-8.04 6.49-11.91.53-.95.79-2.01.78-3.16-.04-13.26-.04-26.48-.01-39.66 0-.16.06-.29.17-.39a335.9 335.9 0 0 1 7.45-6.57c.01-.02.04-.02.06 0 .01.01.01.02.01.03.08 15.52.07 30.86-.03 46.01-.01 1.5.28 2.78.86 3.85 2.09 3.87 4.22 7.78 6.4 11.74.54.97.81 1.98.81 3.02.01 12.19 0 24.36-.01 36.51 0 .36.12.67.36.94l9.08 10.04c.21.23.32.52.32.83v32.05c0 .35.13.65.39.88l10.25 9.09c.57.51.86 1.14.86 1.91v25.24c0 .07.06.13.14.12.02 0 .04-.01.05-.01l8.97-4.86c.08-.05.12-.12.12-.21l-.03-35.3c0-.52.19-.61.57-.26z"
                        })), x || (x = l6.createElement("ellipse", {
                            transform: "matrix(1 -.0035 .0035 1 -.169 1.572)",
                            className: "citadel_green_svg__st0",
                            cx: 450.34,
                            cy: 49.14,
                            rx: 15.09,
                            ry: 13.83
                        })), M || (M = l6.createElement("path", {
                            className: "citadel_green_svg__st0",
                            d: "M734.02 88.17c-.47-7.48-1.03-15.09-1.02-22.71 0-10.57 0-20.3.01-29.17 0-.36.18-.54.54-.54H757c.17 0 .25.08.25.25v146.5c0 .33-.17.5-.5.5H738c-.35 0-.56-.17-.62-.52l-1.63-10.02a.484.484 0 0 0-.55-.4c-.1.02-.2.07-.27.14-4.75 4.84-10.21 8.49-16.37 10.94-5.61 2.24-11.73 2.95-18.34 2.12-29.68-3.72-38.12-34.68-36.03-59.75 1.68-20.23 12.5-40.13 32.5-45.89 10.28-2.96 19.91-1.89 28.89 3.22 2.79 1.58 5.3 3.65 7.77 5.67.48.39.7.27.67-.34zm-44.46 54.2c2.11 14.26 10.88 25.67 26.74 22.78 6.78-1.24 11.87-5.52 16.48-10.6.14-.15.22-.36.22-.58v-46.92c0-.36-.13-.66-.4-.89-5.48-4.85-11.49-7.49-18.03-7.94-14.96-1.04-23.15 11.56-25.15 24.83-.91 6.05-.87 12.49.14 19.32zM918.25 155.93c0 5.3.93 11.69 8.34 9.52.45-.13.72.03.79.49l2.82 16.88c.08.49-.22.96-.7 1.1-6.37 1.83-12.62 2.16-18.76 1-11.76-2.22-16.24-13.58-16.44-24.18-.05-2.42-.31-4.81-.3-7.22.01-37.05 0-76.12-.01-117.22 0-.37.18-.55.55-.55h23.17c.37 0 .55.18.55.55-.01 39.21-.01 79.08-.01 119.63zM1287.27 156.4c.01 5.29 1.26 11.2 8.32 9.05.45-.14.72.02.79.49l2.81 16.84c.1.58-.13.96-.7 1.13-3.84 1.17-7.98 1.73-12.42 1.67-11.01-.14-18.49-4.76-21.47-15.98-.73-2.75-1.15-5.38-1.24-7.87-.11-2.71-.36-5.55-.36-8.32V36.29c0-.36.18-.54.54-.54h23.42c.19 0 .29.1.29.3-.01 41.64-.01 81.76.02 120.35zM1343.28 156.41c0 5.3 1.25 11.18 8.32 9.04.45-.13.71.03.78.49l2.82 16.88c.07.45-.19.88-.63 1.02-5.87 1.89-13.05 2.26-18.75 1.14-14.78-2.92-16.69-17.87-16.72-30.06-.12-37.23-.15-76.73-.08-118.51 0-.44.22-.66.66-.66h23.28c.19 0 .29.1.29.3-.01 38.84 0 78.96.03 120.36zM370.17 163.98c14.23 1.84 24.59-3.46 33.99-13.24.29-.3.57-.29.84.02l12.21 14.32c.3.35.29.88-.02 1.23-13.02 14.56-29.28 20.88-48.77 18.97-32.84-3.22-51.51-27.74-54.8-59.02-1.37-13.1-.37-25.37 3.01-36.82 7.37-24.93 26.43-42.44 52.81-45 17.19-1.67 32.22 3.81 45.09 16.42.37.37.39.76.06 1.17l-12.24 14.78c-.28.34-.58.35-.89.04-8.78-8.8-19.31-13.08-31.8-10.87-20.83 3.68-30.35 23.81-31.36 43.84-.82 16.35 2.01 35.13 14.92 46.51 4.85 4.27 10.5 6.82 16.95 7.65zM1024.03 157.44c.33 2.22.72 2.23 1.15.02 3.38-17.17 6.77-34.62 10.98-51.95 4.81-19.82 9.54-39.25 14.18-58.29.07-.28.32-.47.6-.47h20.35c.26 0 .49.18.55.44 4.52 18.81 9.11 37.67 13.77 56.56 4.48 18.2 8.04 36.52 11.72 54.83.05.25.2.35.45.3.09-.02.17-.05.25-.1.03-.01.05-.04.06-.08 1.69-11.19 3.27-21.63 4.73-31.31 1.03-6.83 2.09-13.42 3.18-19.77 3.36-19.59 6.83-39.78 10.41-60.55.03-.18.19-.32.38-.32h22.64c.29 0 .41.15.36.44l-25.99 135.33a.59.59 0 0 1-.58.48h-29.43c-.14 0-.25-.1-.28-.23-5.97-25.05-11.53-48.68-16.67-70.87-2.27-9.78-4.2-19.77-5.81-29.97-.42-2.69-.87-2.69-1.35-.02-1.93 10.77-3.92 20.73-5.99 29.88a8227.1 8227.1 0 0 1-16.32 70.96.33.33 0 0 1-.32.25h-29.1c-.14 0-.26-.1-.29-.24L980.74 47.31c-.08-.37.07-.56.45-.56h24.26c.11.01.17.06.19.17 6.84 37.89 12.97 74.73 18.39 110.52zM520.5 80.5h25c.33 0 .5.17.5.5v18.5c0 .33-.17.5-.5.5h-25.22c-.15 0-.27.13-.27.28-.04 17.16-.04 33.92.01 50.27.04 15.33 12.28 18.64 24.62 13.49.21-.09.45.01.54.22.01.02.02.05.02.07l3.9 16.94c.08.35-.05.59-.39.71-13.32 4.64-31.81 6.26-42.88-3.61-7.14-6.36-9.99-17.52-10.03-27-.08-16.94-.09-33.88-.02-50.82 0-.37-.18-.55-.55-.55H481.5c-.33 0-.5-.17-.5-.5V82.19c0-.37.19-.57.56-.6l14.89-.98c.3-.02.55-.25.58-.55l2.72-26.84c.03-.31.21-.47.52-.47h19.48c.14 0 .25.11.25.25v27c0 .33.17.5.5.5zM1507.5 80.5h25.25c.17 0 .25.08.25.25V99.5c0 .33-.17.5-.5.5h-25.22c-.14 0-.26.12-.26.27-.05 17.2-.05 34.07.02 50.61.02 4.86 1.77 10.72 6.48 13.55 5.24 3.14 12.68 1.88 18.12-.39.21-.09.45.01.54.22.01.02.02.04.02.06l3.9 16.95c.08.37-.05.61-.4.73-8.53 2.93-16.97 4.05-25.31 3.37-19.37-1.58-27.52-16.39-27.59-34.14-.07-16.8-.08-33.69-.02-50.68 0-.36-.18-.54-.55-.55l-13.84-.01c-.22 0-.39-.17-.39-.39V82.19c0-.37.19-.57.56-.6l14.89-.98c.3-.02.54-.25.57-.55l2.73-26.84c.03-.31.21-.47.52-.47h19.48c.14 0 .25.11.25.25v27c0 .33.17.5.5.5zM619.77 171.88c-7.62 6.45-16.42 11.83-26.05 13.28-16.19 2.44-31.63-5.24-35.2-21.96-4.4-20.57 7.54-33.03 26.01-39.02 10.25-3.33 21.11-5.48 32.57-6.46.35-.04.62-.34.61-.69-.11-9.48-4.53-17.95-14.66-19.12-11.4-1.31-22.06 3.43-31.86 9.48-.35.21-.81.1-1.02-.25-.01-.01-.01-.02-.02-.03l-8.29-15.04c-.19-.34-.12-.62.21-.83 11.72-7.42 25.22-12.55 38.96-13.14 19.88-.85 34.8 7.45 39.41 28.42 1.03 4.69 1.55 9.29 1.55 13.78.01 21.15.01 41.87.01 62.15 0 .3-.25.55-.55.55H622.7c-.38 0-.6-.19-.66-.56l-1.66-10.34c-.07-.43-.28-.51-.61-.22zm-21.01-5.54c7.13-.93 13.39-5.47 18.63-10.53.24-.23.36-.52.36-.86v-21.66c0-.34-.17-.49-.51-.46-8.69.96-16.38 2.73-23.05 5.3-7.5 2.9-13.93 8.2-13.1 17.11.88 9.49 9.57 12.17 17.67 11.1zM805.26 139.02c.05 2.26.43 4.43 1.12 6.51 4.99 15.05 15.56 22.09 31.71 21.1 6.92-.42 13.71-2.77 20.38-7.06.27-.17.49-.12.64.16l7.81 14.24c.16.29.07.65-.21.83-11 7.2-22.71 10.79-35.12 10.77-20.98-.05-38.57-11.08-46.24-30.87-2.96-7.64-4.26-16.24-3.9-25.81 1.13-29.73 23.79-55.33 55.39-50.21 29.1 4.71 37.08 33.92 33.34 59.04-.06.45-.45.78-.91.78h-63.5c-.35 0-.52.17-.51.52zm44.79-17.61c-.29-12.04-4.75-23.23-18.34-24.39-15.28-1.3-24.66 10.08-26.86 24.31-.07.45.13.67.58.67h44.04c.39 0 .59-.2.58-.59zM1211.77 171.88c-7.8 6.65-16.92 12.11-26.86 13.38-16.7 2.14-31.79-6.3-34.69-23.59-3.32-19.78 8.3-31.62 25.82-37.34 10.47-3.41 21.47-5.61 33-6.6.38-.04.66-.35.66-.72.02-9.21-4.4-17.66-14.26-19.04-11.25-1.57-22.66 3.35-32.23 9.45a.722.722 0 0 1-1.03-.26l-8.32-15.09c-.2-.35-.13-.64.22-.85 7.17-4.49 14.47-7.87 21.9-10.14 10.93-3.35 23.6-4.37 34.19-.99 17.71 5.64 23.81 23 23.82 40.72.02 22.62.02 43.12.01 61.51 0 .38-.3.68-.68.68h-18.62c-.38 0-.6-.19-.66-.56l-1.66-10.34c-.07-.43-.28-.51-.61-.22zm-38.72-17.07c.95 13.31 16.63 13.73 25.48 9.05 3.83-2.03 7.46-4.72 10.87-8.08.23-.23.35-.5.35-.83v-21.68c0-.35-.17-.5-.51-.46-4.67.51-9.76 1.44-15.27 2.8-9.53 2.35-21.77 7.34-20.92 19.2zM1393.26 139c.01 1.89.31 3.83.92 5.81 4.76 15.42 15.35 22.72 31.77 21.89 6.41-.32 13.24-2.7 20.5-7.14.29-.17.51-.11.66.18l7.81 14.22c.16.3.06.67-.22.85-11.06 7.21-22.77 10.8-35.13 10.76-21.05-.07-38.62-11.12-46.28-31.03-2.92-7.59-4.19-16.19-3.8-25.82 1.21-29.93 24.11-55.38 55.82-49.95 18.25 3.12 29.13 16.45 32.43 34.03 1.59 8.48 1.73 16.78.42 24.91-.09.53-.4.79-.93.79h-63.47c-.33 0-.5.17-.5.5zm44.79-17.59c-.36-12.06-4.65-23.08-18.15-24.36-15.43-1.46-24.86 10.04-27.07 24.42-.05.35.1.53.46.53h44.18c.39 0 .59-.2.58-.59zM438.36 80.5h23.52c.2 0 .36.16.36.36v101.78c0 .2-.16.36-.36.36h-23.52c-.2 0-.36-.16-.36-.36V80.86c0-.2.16-.36.36-.36z"
                        })), z || (z = l6.createElement("circle", {
                            className: "citadel_green_svg__st0",
                            cx: 76.77,
                            cy: 107.65,
                            r: 18.23
                        })))
                    }, {
                        height: 55,
                        width: 200
                    }),
                    link: "https://www.citadelwallet.io/",
                    name: "Citadel Wallet"
                }, {
                    iconA: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nC({
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 805.4 172.3",
                            style: {
                                enableBackground: "new 0 0 805.4 172.3"
                            },
                            xmlSpace: "preserve",
                            preserveAspectRatio: "none"
                        }, e), l6.createElement("g", {
                            style: {
                                fill: "#fff"
                            }
                        }, lZ || (lZ = l6.createElement("path", {
                            d: "M201.8.7h21.8v29H235l29.7-29h30l-41.2 38.5 45.2 39.3H267l-32.4-29.9h-11v29.9h-21.8V.7zM346.1.7h29.2l39.2 77.8h-23.9l-7.1-13.9h-46.2l-6.9 13.9h-24.7L346.1.7zM376 48.4l-15.5-31-15.3 31H376zM423.4.7h61.8c12.7 0 18.3 1.2 22.4 4.9 4.2 3.6 6.1 10.3 6.1 20.8 0 14.5-3.2 20.2-12.4 22.4 8.9 1.6 11.6 5.7 11.4 17.5v12.2h-22.1v-9.7c-.1-8.4-2.3-10.2-12-9.9h-33.4v19.6h-21.7L423.4.7zm55.8 39.2c10.5 0 12.6-1.4 12.6-9.1 0-5-.4-7.1-1.8-8.8-1.6-1.9-3.4-2.2-10-2.2h-34.8v20.1h34zM564.6.7h29.2L633 78.5h-23.9L602 64.6h-46.2l-6.9 13.9h-24.7L564.6.7zm29.9 47.7-15.5-31-15.3 31h30.8zM658.7 19.9h-31.9V.7h85.7v19.2h-31.9v58.6h-21.8l-.1-58.6zM804.6.7v17.6h-57.9v13.4h54.6v15.4h-54.6v13.8h58.7v17.6h-80.2V.7h79.4zM292.5 142.2c-.1 11.3-.4 15.2-1.9 18.7-2.8 6.6-8.6 9.8-19.8 10.6-4.4.5-13 .6-27.3.6-20.6 0-27.3-1.1-33.1-5.1-7.1-4.9-9.1-13.1-9.1-36.2 0-20.5 2.1-27.9 9.7-32.6 6.5-4.1 13.3-5.1 33.4-5.1 26.8 0 32.6.6 38.7 3.9 5.8 3.1 8.5 10 8.5 21.5v2.6h-20.9c-.4-8.5-2-9.2-21-9.2-17.8 0-21.1.5-23.8 3-2.6 2.6-3.1 5.7-3.1 18.3 0 18.7 1.6 20.1 22.6 20.1 16.2 0 18.6-.1 21.6-1.5 3.1-1.4 4.3-3.9 4.3-9.4l21.2-.2zM379.3 94c11.1 2.2 16.5 8.4 18 20.9.4 3.1.6 9.4.6 18.9 0 18.8-1.8 26.4-8 31.9-4.3 4-10.3 5.8-20.8 6.3-3.9.2-13.4.4-20.4.4-17.1 0-25.8-.4-30.1-1.3-8-1.5-12.6-4.8-15.3-10.5-2.8-5.7-3.4-11.4-3.4-28.5 0-13.1.2-16.3 1.5-21.6 2-8.3 6.2-12.7 14.3-15.3 6-1.9 12.6-2.3 31.5-2.3 20.7 0 27 .2 32.1 1.1zm-53.5 20.7c-2.9 2.4-3.8 6.3-3.8 17.5 0 11.4.9 15.6 3.5 18.1 2.9 2.6 6.5 3 22.9 3 18.8 0 22.7-.7 25.2-4.4 2-2.8 2.6-6.8 2.6-17.1 0-19.6-.3-19.8-27.2-19.8-16-.1-20.4.5-23.2 2.7zM407 93.7h34.6l26.1 51.7 26-51.7h34.4v77.8h-21.3l1.1-60.1-31.8 60.1h-17.4l-31.3-60.1.7 60.1H407V93.7zM538.8 93.7h64.7c8.3 0 12.8.8 16.5 2.8 5.8 3.3 8.2 8.5 8.2 18.4 0 10.1-3.2 15.4-10 16.8 9.7 2 12.9 6.5 12.9 17.9 0 9.8-2.6 16-8.3 19.2-3.3 1.9-8.1 2.7-16.3 2.7h-67.7V93.7zm58 31c4.2 0 5.7-.2 7.1-.9 1.7-1.1 2.8-3.1 2.8-5.8 0-3.1-1.4-5.5-3.8-6.4-1.4-.5-2.5-.6-6.7-.6h-36.1v13.8h36.7zm2.3 29.5c4.4 0 5.3-.1 6.7-.6 2.2-.8 3.4-3.1 3.4-6.4 0-3.4-1.3-5.7-3.7-6.6-1.3-.5-2.2-.6-7-.6H560v14.2h39.1zM672.2 93.7h29.2l39.2 77.8h-23.9l-7.1-13.9h-46.2l-6.9 13.9h-24.7l40.4-77.8zm29.9 47.7-15.5-31-15.3 31h30.8zM759.4 112.9H725V93.7h80.4v19.2h-24.2v58.6h-21.8v-58.6zM114.5 34.3H34.3v137.4H0V0h114.5v34.3zM171.7 0v171.7H57.1v-34.3h80.3V0h34.3z"
                        }))))
                    }, {
                        height: 45,
                        width: 180
                    }),
                    iconB: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nG({
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 805.4 172.3",
                            style: {
                                enableBackground: "new 0 0 805.4 172.3"
                            },
                            xmlSpace: "preserve",
                            preserveAspectRatio: "none"
                        }, e), l6.createElement("g", {
                            style: {
                                fill: "#69ff52"
                            }
                        }, ly || (ly = l6.createElement("path", {
                            d: "M201.8.7h21.8v29H235l29.7-29h30l-41.2 38.5 45.2 39.3H267l-32.4-29.9h-11v29.9h-21.8V.7zM346.1.7h29.2l39.2 77.8h-23.9l-7.1-13.9h-46.2l-6.9 13.9h-24.7L346.1.7zM376 48.4l-15.5-31-15.3 31H376zM423.4.7h61.8c12.7 0 18.3 1.2 22.4 4.9 4.2 3.6 6.1 10.3 6.1 20.8 0 14.5-3.2 20.2-12.4 22.4 8.9 1.6 11.6 5.7 11.4 17.5v12.2h-22.1v-9.7c-.1-8.4-2.3-10.2-12-9.9h-33.4v19.6h-21.7L423.4.7zm55.8 39.2c10.5 0 12.6-1.4 12.6-9.1 0-5-.4-7.1-1.8-8.8-1.6-1.9-3.4-2.2-10-2.2h-34.8v20.1h34zM564.6.7h29.2L633 78.5h-23.9L602 64.6h-46.2l-6.9 13.9h-24.7L564.6.7zm29.9 47.7-15.5-31-15.3 31h30.8zM658.7 19.9h-31.9V.7h85.7v19.2h-31.9v58.6h-21.8l-.1-58.6zM804.6.7v17.6h-57.9v13.4h54.6v15.4h-54.6v13.8h58.7v17.6h-80.2V.7h79.4zM292.5 142.2c-.1 11.3-.4 15.2-1.9 18.7-2.8 6.6-8.6 9.8-19.8 10.6-4.4.5-13 .6-27.3.6-20.6 0-27.3-1.1-33.1-5.1-7.1-4.9-9.1-13.1-9.1-36.2 0-20.5 2.1-27.9 9.7-32.6 6.5-4.1 13.3-5.1 33.4-5.1 26.8 0 32.6.6 38.7 3.9 5.8 3.1 8.5 10 8.5 21.5v2.6h-20.9c-.4-8.5-2-9.2-21-9.2-17.8 0-21.1.5-23.8 3-2.6 2.6-3.1 5.7-3.1 18.3 0 18.7 1.6 20.1 22.6 20.1 16.2 0 18.6-.1 21.6-1.5 3.1-1.4 4.3-3.9 4.3-9.4l21.2-.2zM379.3 94c11.1 2.2 16.5 8.4 18 20.9.4 3.1.6 9.4.6 18.9 0 18.8-1.8 26.4-8 31.9-4.3 4-10.3 5.8-20.8 6.3-3.9.2-13.4.4-20.4.4-17.1 0-25.8-.4-30.1-1.3-8-1.5-12.6-4.8-15.3-10.5-2.8-5.7-3.4-11.4-3.4-28.5 0-13.1.2-16.3 1.5-21.6 2-8.3 6.2-12.7 14.3-15.3 6-1.9 12.6-2.3 31.5-2.3 20.7 0 27 .2 32.1 1.1zm-53.5 20.7c-2.9 2.4-3.8 6.3-3.8 17.5 0 11.4.9 15.6 3.5 18.1 2.9 2.6 6.5 3 22.9 3 18.8 0 22.7-.7 25.2-4.4 2-2.8 2.6-6.8 2.6-17.1 0-19.6-.3-19.8-27.2-19.8-16-.1-20.4.5-23.2 2.7zM407 93.7h34.6l26.1 51.7 26-51.7h34.4v77.8h-21.3l1.1-60.1-31.8 60.1h-17.4l-31.3-60.1.7 60.1H407V93.7zM538.8 93.7h64.7c8.3 0 12.8.8 16.5 2.8 5.8 3.3 8.2 8.5 8.2 18.4 0 10.1-3.2 15.4-10 16.8 9.7 2 12.9 6.5 12.9 17.9 0 9.8-2.6 16-8.3 19.2-3.3 1.9-8.1 2.7-16.3 2.7h-67.7V93.7zm58 31c4.2 0 5.7-.2 7.1-.9 1.7-1.1 2.8-3.1 2.8-5.8 0-3.1-1.4-5.5-3.8-6.4-1.4-.5-2.5-.6-6.7-.6h-36.1v13.8h36.7zm2.3 29.5c4.4 0 5.3-.1 6.7-.6 2.2-.8 3.4-3.1 3.4-6.4 0-3.4-1.3-5.7-3.7-6.6-1.3-.5-2.2-.6-7-.6H560v14.2h39.1zM672.2 93.7h29.2l39.2 77.8h-23.9l-7.1-13.9h-46.2l-6.9 13.9h-24.7l40.4-77.8zm29.9 47.7-15.5-31-15.3 31h30.8zM759.4 112.9H725V93.7h80.4v19.2h-24.2v58.6h-21.8v-58.6zM114.5 34.3H34.3v137.4H0V0h114.5v34.3zM171.7 0v171.7H57.1v-34.3h80.3V0h34.3z"
                        }))))
                    }, {
                        height: 45,
                        width: 180
                    }),
                    link: "https://www.karate.com/",
                    name: "Karate Combat"
                }, {
                    iconA: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nu({
                            id: "geckoterminal_svg__Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            x: 0,
                            y: 0,
                            viewBox: "0 0 2885 459.8",
                            style: {
                                enableBackground: "new 0 0 2885 459.8"
                            },
                            xmlSpace: "preserve"
                        }, e), k || (k = l6.createElement("style", null, ".geckoterminal_svg__st0{fill:#666}.geckoterminal_svg__st1{fill:#fff}.geckoterminal_svg__st2{fill:#999}.geckoterminal_svg__st4{fill:none}.geckoterminal_svg__st6{fill:#ccc}")), S || (S = l6.createElement("path", {
                            className: "geckoterminal_svg__st0",
                            d: "m437.5 166.8-25.1-25.1c-17.1 13.9-46.6 25.6-65.2 31.7-.8.3-1.6.6-2.5.9-4.9 4.8-9.7 9.9-14.2 15.3l36.6 36.6 68.5 68.5 1.9-1.9c34.9-34.7 34.9-91.2 0-126zM104.6 226.3l71.3-71.3c1.9-5.1 3.9-10.2 6.1-15.3 21.5-48.2 69.7-64.5 115.2-65.3 6-10.6 17.3-17.7 30-17.8l-28.3-28.3c-34.8-34.8-91.3-34.8-126.1 0l-1.9 1.9L36.1 165l68.5 68.5c-2-2-2-5.2 0-7.2z"
                        })), D || (D = l6.createElement("path", {
                            className: "geckoterminal_svg__st1",
                            d: "M351 80.3z"
                        })), I || (I = l6.createElement("path", {
                            className: "geckoterminal_svg__st2",
                            d: "M367.2 226.3c2 2 2 5.2 0 7.2l-63.1 63.1-15.5 15.5-42 42-7.1 7.1c-2 2-5.2 2-7.2 0l-63.8-63.8-42-42-21.9-21.9L36.1 165l-1.9 1.9C-.6 201.7-.6 258.2 34.2 293L50 308.7l119.1 119.1 3.7 3.7c34.8 34.8 91.3 34.8 126.1 0l1.9-1.9 134.9-134.9-68.5-68.4z"
                        })), l6.createElement("path", {
                            d: "M351 80.3c-2.5-5.5-6.9-10.1-12.7-12.7-.2-.1-.3-.2-.5-.3-.8-.3-1.6-.6-2.3-.9.4 2.8.1 5.7-1 8.4-.3.7-.7 1.3-1.1 2-3.9 6.4-12 9.1-19 6.1-3.3-1.4-5.9-3.9-7.5-6.9-1 1.5-2 3.1-2.7 4.8-5.6 13 .5 28.1 13.5 33.7 13 5.6 28.1-.5 33.7-13.5 2.8-6.9 2.5-14.4-.4-20.7z",
                            style: {
                                fill: "#1e1e1e"
                            }
                        }), A || (A = l6.createElement("path", {
                            className: "geckoterminal_svg__st4",
                            d: "M317.6 114.5c13 5.6 28.1-.5 33.7-13.5 2.9-6.9 2.6-14.4-.3-20.7-2.5-5.4-6.9-10-12.7-12.7-.2-.1-.3-.2-.5-.3-.8-.3-1.6-.6-2.3-.9.4 2.8.1 5.7-1 8.4-.3.7-.7 1.3-1.1 2-3.9 6.4-12 9.1-19 6.1-3.3-1.4-5.9-3.9-7.5-6.9-1 1.5-2 3.1-2.7 4.8-5.7 13 .4 28.1 13.4 33.7z"
                        })), P || (P = l6.createElement("path", {
                            className: "geckoterminal_svg__st2",
                            d: "M176.2 154.2c-.1.2-.2.5-.3.7-13.2 69.9-19.8 79.7-49.5 100.4l10.6 10.6c6.9-6.8 16.8-18.6 26.2-36.7 11.5-22.3 13.1-55.9 13-75z"
                        })), O || (O = l6.createElement("path", {
                            className: "geckoterminal_svg__st4",
                            d: "M351 80.3c-2.5-5.5-6.9-10.1-12.7-12.7-.2-.1-.3-.2-.5-.3-.8-.3-1.6-.6-2.3-.9.4 2.8.1 5.7-1 8.4-.3.7-.7 1.3-1.1 2-3.9 6.4-12 9.1-19 6.1-3.3-1.4-5.9-3.9-7.5-6.9-1 1.5-2 3.1-2.7 4.8-5.6 13 .5 28.1 13.5 33.7 13 5.6 28.1-.5 33.7-13.5 2.8-6.9 2.5-14.4-.4-20.7zM326.1 185.3c.2-.1.4-.3.6-.5-.2.1-.4.2-.6.5-6.6 5.3-12.8 12.1-18.3 20.2 5.4-8.1 11.6-14.9 18.3-20.2z"
                        })), C || (C = l6.createElement("path", {
                            className: "geckoterminal_svg__st2",
                            d: "M326.6 184.8c-.2.2-.4.3-.6.5-6.6 5.3-12.8 12.1-18.3 20.2-16.3 24.4-25.7 60.8-19.2 106.6l24.9-24.4c-1.1-3.6-2.1-7.4-3-11.3-8.6-36.3-2.2-60.2 20.1-86.7 2.8-3.3 9.2-9.9 14.9-15.6-.2.1-.4.2-.6.2-6.2 2.4-12.4 5.9-18.2 10.5z"
                        })), G || (G = l6.createElement("path", {
                            className: "geckoterminal_svg__st1",
                            d: "M307.8 205.5c-16.3 24.4-25.7 60.8-19.3 106.6-6.4-45.9 3-82.2 19.3-106.6z"
                        })), l6.createElement("linearGradient", {
                            id: "geckoterminal_svg__SVGID_1_",
                            gradientUnits: "userSpaceOnUse",
                            x1: -562.471,
                            y1: 2945.704,
                            x2: -3.169,
                            y2: 1194.843
                        }, l6.createElement("stop", {
                            offset: 0,
                            style: {
                                stopColor: "#5d47ff"
                            }
                        }), l6.createElement("stop", {
                            offset: .59,
                            style: {
                                stopColor: "#846dff"
                            }
                        }), l6.createElement("stop", {
                            offset: 1,
                            style: {
                                stopColor: "#a36cff"
                            }
                        })), l6.createElement("path", {
                            d: "M307.8 205.5c-16.3 24.4-25.7 60.8-19.3 106.6-6.4-45.9 3-82.2 19.3-106.6z",
                            style: {
                                fill: "url(#geckoterminal_svg__SVGID_1_)"
                            }
                        }), B || (B = l6.createElement("path", {
                            className: "geckoterminal_svg__st2",
                            d: "M429.8 107.2c-14.6-20.6-58.9-30.1-58.9-30.1s-6-16.7-21.6-21.9c-14.1-4.7-35.3 3.7-35.3 3.7l.3.3c4-1.7 8.4-2.6 13-2.7 1.1 0 2.2 0 3.3.1 15.3 1.2 27.4 12.1 31 26.2 74.3 18.4 73.5 40.6 50.9 59-.9.7-1.8 1.4-2.8 2.1l.4.4c0-.1 33.6-17.3 19.7-37.1z"
                        })), L || (L = l6.createElement("path", {
                            className: "geckoterminal_svg__st1",
                            d: "M361.5 82.8c-3.6-14-15.8-24.9-31-26.2-1.1-.1-2.2-.1-3.3-.1-4.6.1-9 1-13 2.7-7.2 3-13.2 8.3-17 15.1-45.4.8-93.7 17.1-115.2 65.3-2.1 4.8-4.1 9.7-5.9 14.6.1 19.1-1.5 52.7-13 75-9.4 18.2-19.3 29.9-26.2 36.7l31.4 31.4 63.8 63.8c2 2 5.2 2 7.2 0l7.1-7.1 42-42c-6.5-45.9 2.9-82.3 19.3-106.6 5.4-8.1 11.7-14.9 18.3-20.3.2-.1.4-.3.5-.4 5.8-4.6 11.9-8.1 18.1-10.5.2-.1.4-.2.6-.2.6-.2 1.2-.5 1.8-.7 17.6-5.8 45.1-16.6 62.4-29.5.9-.7 1.9-1.4 2.8-2.1 22.8-18.3 23.7-40.5-50.7-58.9zM351.3 101c-5.6 13-20.6 19.1-33.7 13.5-13-5.6-19.1-20.6-13.5-33.7.7-1.7 1.6-3.3 2.7-4.8 1.6 3 4.2 5.5 7.5 6.9 7.1 3 15.1.3 19-6.1.1-.2.2-.3.3-.5.3-.5.6-1 .8-1.5 1.2-2.8 1.5-5.7 1-8.4.8.3 1.6.5 2.3.9.2.1.3.2.5.3 5.8 2.7 10.2 7.3 12.7 12.7 1.9 4.1 2.6 8.8 2.1 13.4-.1 2.5-.7 4.9-1.7 7.3z"
                        })), T || (T = l6.createElement("path", {
                            className: "geckoterminal_svg__st0",
                            d: "M792.2 224.4c-.2-2.9-.5-5.5-1-7.9H689.6v37.2h60.6v.3c0 6.4-1.4 12.4-4.3 18s-7 10.4-12.3 14.6c-5.3 4.2-11.4 7.4-18.3 9.8-6.8 2.4-14.2 3.5-22.1 3.5-10.5 0-20.4-2-29.6-5.9-9.3-4-17.5-9.5-24.5-16.5-7.1-7.1-12.6-15.3-16.5-24.7-4-9.4-5.9-19.3-5.9-29.8 0-10.9 1.9-20.9 5.8-30.1 3.8-9.2 9.1-17.2 15.9-24 6.7-6.8 14.6-12.2 23.7-16 9.1-3.8 19-5.8 29.6-5.8 7.3 0 14.3 1.1 21.2 3.2 6.8 2.1 13.4 5.1 19.7 9 6.3 3.8 12.4 8.7 18.4 14.4l26.3-27.6c-5.8-7.3-13-13.8-21.8-19.6-8.8-5.8-18.6-10.3-29.5-13.5-10.9-3.2-22.2-4.8-34-4.8-16.7 0-32.2 2.9-46.6 8.7s-27 13.8-37.7 24.2c-10.7 10.4-19 22.5-24.8 36.5-5.9 14-8.8 29.1-8.8 45.4 0 16.5 2.9 31.7 8.7 45.7 5.8 14 13.9 26.2 24.5 36.7 10.6 10.5 23 18.6 37.3 24.5 14.3 5.9 29.9 8.8 46.8 8.8 14.3 0 27.6-2.4 39.9-7.2 12.3-4.8 23.1-11.6 32.4-20.4 9.3-8.8 16.5-19.2 21.6-31.3 5.1-12.1 7.7-25.5 7.7-40.2 0-1.9-.1-4.2-.2-6.9-.2-2.6-.4-5.4-.6-8.3zM960.8 186.6c-7-7.4-15.4-13.2-25-17.5-9.6-4.3-20-6.4-31.1-6.4-12.6 0-24.2 2.2-34.8 6.6-10.6 4.4-19.7 10.6-27.2 18.6-7.6 8-13.5 17.5-17.8 28.4-4.3 10.9-6.4 23-6.4 36.2 0 16.7 3.8 31.5 11.4 44.4 7.6 12.9 18.2 23.1 31.7 30.6 13.6 7.5 29.2 11.2 47 11.2 7.9 0 15.9-1.1 24-3.2s15.9-5.1 23.2-8.8c7.4-3.7 13.9-8.3 19.7-13.6L956 285.8c-7.7 6.6-14.9 11.2-21.5 13.8-6.6 2.6-13.9 3.8-21.8 3.8-11.3 0-21.2-2.2-29.6-6.6-8.4-4.4-15-10.6-19.6-18.8-3.1-5.5-5.1-11.6-6.1-18.3H982l.3-13.8c.2-12-1.6-23-5.3-33.2-3.7-9.9-9.1-18.7-16.2-26.1zm-82.5 17.2c7.2-4.1 16-6.1 26.4-6.1 6.8 0 13.1 1.4 18.7 4.3 5.7 2.9 10.3 6.8 13.9 11.9 3.6 5 5.8 10.8 6.4 17.5v1.6h-85.6c.9-4.3 2.2-8.2 3.8-11.7 3.8-7.6 9.2-13.5 16.4-17.5zM1068.4 204.9c7.4-4.6 15.8-6.9 25.2-6.9 5.6 0 11.1 1.1 16.7 3.2s10.8 5 15.7 8.7c4.9 3.6 9 7.7 12.2 12.2l21.8-26.3c-6.8-10.3-16.5-18.3-28.8-24-12.4-5.8-26.2-8.7-41.4-8.7-15.8 0-30 3.8-42.6 11.5-12.6 7.7-22.6 18.2-29.8 31.4-7.3 13.3-10.9 28.2-10.9 44.9s3.6 31.6 10.9 44.9c7.3 13.3 17.2 23.7 29.8 31.4 12.6 7.7 26.8 11.5 42.6 11.5 14.1 0 27.5-2.9 40.2-8.8 12.7-5.9 22.7-13.5 30-22.9l-21.8-26.6c-4.1 5.1-8.4 9.4-13.1 12.8-4.7 3.4-9.7 6-14.9 7.9-5.2 1.8-10.6 2.7-16.2 2.7-9.2 0-17.5-2.3-25-7.1-7.5-4.7-13.4-11-17.8-18.9-4.4-7.9-6.6-16.9-6.6-26.9s2.1-19.1 6.4-27.1c4.2-8 10-14.3 17.4-18.9zM1351.9 166.6h-52.6l-69.8 70.2V98.3H1190v237.2h39.5v-54l16.9-15.9 57.7 69.9h48.8l-79.7-95zM1525.2 205.7c-7.6-13.2-18-23.7-31.3-31.3-13.3-7.6-28.2-11.4-44.9-11.4-16.9 0-32 3.8-45.2 11.4-13.3 7.6-23.7 18-31.4 31.3-7.7 13.3-11.5 28.3-11.5 45.2 0 16.9 3.8 32 11.5 45.2 7.7 13.3 18.2 23.7 31.4 31.3 13.3 7.6 28.3 11.4 45.2 11.4 16.7 0 31.6-3.8 44.9-11.4 13.2-7.6 23.7-18 31.3-31.3 7.6-13.2 11.4-28.3 11.4-45.2-.1-16.9-3.8-32-11.4-45.2zm-34.7 72.1c-4.2 7.9-9.8 14.2-17 18.9-7.2 4.7-15.3 7.1-24.5 7.1s-17.5-2.3-24.8-7.1c-7.4-4.7-13.1-11-17.1-18.9-4.1-7.9-6.1-16.9-6.1-26.9s2-19.1 6.1-27.1 9.8-14.3 17.1-18.9c7.4-4.6 15.7-6.9 24.8-6.9 9.2 0 17.4 2.3 24.5 6.9 7.2 4.6 12.8 10.8 17 18.8 4.2 7.9 6.1 17 5.9 27.2.3 10-1.7 19-5.9 26.9z"
                        })), F || (F = l6.createElement("path", {
                            className: "geckoterminal_svg__st6",
                            d: "M1609.1 335.6V150h-64v-38.4h171.5V150h-65.9v185.6h-41.6zM1797.6 338.8c-17.7 0-33.3-3.7-46.9-11.2-13.6-7.5-24.1-17.7-31.7-30.6-7.6-12.9-11.4-27.7-11.4-44.3 0-13.2 2.1-25.3 6.4-36.2 4.3-10.9 10.2-20.3 17.8-28.3 7.6-8 16.6-14.2 27.2-18.6 10.6-4.4 22.1-6.6 34.7-6.6 11.1 0 21.4 2.1 31 6.4 9.6 4.3 17.9 10.1 25 17.4 7 7.4 12.4 16.1 16.2 26.2 3.7 10.1 5.5 21.2 5.3 33.1l-.3 13.8h-136.7l-7.4-26.9H1838l-5.1 5.4v-7c-.6-6.6-2.8-12.4-6.4-17.4-3.6-5-8.3-9-13.9-11.8-5.7-2.9-11.9-4.3-18.7-4.3-10.5 0-19.3 2-26.4 6.1-7.2 4.1-12.5 9.9-16.2 17.4-3.6 7.6-5.4 17-5.4 28.3 0 10.9 2.3 20.4 6.9 28.5 4.6 8.1 11.1 14.4 19.5 18.7 8.4 4.4 18.3 6.6 29.6 6.6 7.9 0 15.1-1.3 21.8-3.8 6.6-2.6 13.8-7.1 21.4-13.8l19.5 27.2c-5.8 5.3-12.3 9.9-19.7 13.6-7.4 3.7-15.1 6.7-23.2 8.8-8.2 2.2-16.2 3.3-24.1 3.3zM1906.1 335.6V167h38.7l.6 53.8-5.4-12.2c2.3-8.5 6.4-16.2 12.2-23 5.8-6.8 12.4-12.2 20-16.2 7.6-3.9 15.5-5.9 23.8-5.9 3.6 0 7.1.3 10.4 1 3.3.6 6 1.4 8.2 2.2l-10.6 43.2c-2.4-1.3-5.2-2.3-8.6-3.2-3.4-.8-6.8-1.3-10.2-1.3-5.3 0-10.4 1-15.2 3-4.8 2-9 4.9-12.6 8.5-3.6 3.6-6.5 7.8-8.5 12.6s-3 10.2-3 16.2v89.9h-39.8zM2040.2 335.6V167h38.7l.6 33.9-6.4 2.6c1.9-5.5 4.8-10.7 8.6-15.5 3.8-4.8 8.4-9 13.8-12.5 5.3-3.5 11-6.3 17-8.3 6-2 12.1-3 18.2-3 9.2 0 17.3 1.4 24.5 4.3 7.1 2.9 13.1 7.4 17.9 13.6 4.8 6.2 8.4 14.1 10.7 23.7l-6.1-1.3 2.6-5.1c2.3-5.1 5.6-9.8 9.9-13.9 4.3-4.2 9.1-7.9 14.4-11.2 5.3-3.3 10.9-5.8 16.8-7.5 5.9-1.7 11.7-2.6 17.4-2.6 12.8 0 23.5 2.6 32 7.7s14.9 12.9 19.2 23.4c4.3 10.5 6.4 23.4 6.4 38.7v101.8h-39.7v-99.2c0-8.5-1.1-15.6-3.4-21.1-2.2-5.5-5.7-9.7-10.2-12.3-4.6-2.7-10.3-4-17.1-4-5.3 0-10.4.9-15.2 2.7-4.8 1.8-8.9 4.4-12.3 7.7-3.4 3.3-6.1 7.1-8 11.4-1.9 4.3-2.9 9-2.9 14.1v100.8h-39.7v-99.5c0-8.1-1.2-14.9-3.5-20.3-2.4-5.4-5.8-9.6-10.2-12.5-4.5-2.9-9.9-4.3-16.3-4.3-5.3 0-10.4.9-15 2.7-4.7 1.8-8.8 4.3-12.2 7.5-3.4 3.2-6.1 6.9-8 11.2-1.9 4.3-2.9 9-2.9 14.1v101.1h-39.6zM2364.1 131.1c-7.9 0-14-2-18.4-5.9-4.4-3.9-6.6-9.5-6.6-16.8 0-6.8 2.2-12.4 6.7-16.6 4.5-4.3 10.6-6.4 18.2-6.4 8.1 0 14.3 2 18.7 5.9 4.4 3.9 6.6 9.7 6.6 17.1 0 6.6-2.2 12.1-6.7 16.3-4.4 4.3-10.6 6.4-18.5 6.4zm-19.2 204.5V167h39.4v168.7h-39.4zM2434.2 335.6V167h38.4l.6 34.6-7.4 3.8c2.1-7.7 6.3-14.7 12.5-21 6.2-6.3 13.6-11.4 22.1-15.2 8.5-3.8 17.3-5.8 26.2-5.8 12.8 0 23.5 2.6 32.2 7.7 8.6 5.1 15.1 12.8 19.5 23s6.6 23 6.6 38.4v103.1h-39.4V235.4c0-8.5-1.2-15.6-3.5-21.3-2.4-5.7-6-9.8-10.9-12.5-4.9-2.7-10.9-3.9-17.9-3.7-5.8 0-11 .9-15.8 2.7-4.8 1.8-9 4.4-12.5 7.7s-6.3 7.1-8.3 11.4c-2 4.3-3 9-3 14.1v101.8h-39.4zM2692.8 338.8c-13.9 0-26.5-3.8-37.8-11.5-11.3-7.7-20.4-18.1-27.2-31.4-6.8-13.2-10.2-28.3-10.2-45.1 0-16.9 3.4-31.9 10.2-45.1 6.8-13.2 16.1-23.6 27.8-31 11.7-7.5 25-11.2 39.7-11.2 8.5 0 16.3 1.2 23.4 3.7 7 2.5 13.2 5.9 18.6 10.4 5.3 4.5 9.8 9.6 13.3 15.4 3.5 5.8 5.9 12 7.2 18.6l-8.6-2.2V167h39.7v168.7h-40v-40.3l9.3-1.6c-1.5 5.8-4.2 11.4-8.2 16.8-4 5.4-8.9 10.2-14.7 14.4-5.9 4.2-12.4 7.5-19.5 10.1-7.3 2.4-14.9 3.7-23 3.7zm10.8-34.9c9.2 0 17.3-2.2 24.3-6.7s12.5-10.7 16.5-18.7c3.9-8 5.9-17.2 5.9-27.7 0-10.2-2-19.3-5.9-27.2-4-7.9-9.4-14.1-16.5-18.6-7-4.5-15.1-6.7-24.3-6.7-9.2 0-17.2 2.2-24.2 6.7-6.9 4.5-12.3 10.7-16.2 18.6-3.8 7.9-5.8 17-5.8 27.2 0 10.5 1.9 19.7 5.8 27.7 3.8 8 9.2 14.2 16.2 18.7s15.1 6.7 24.2 6.7zM2834.8 335.6V98.8h39.7v236.8h-39.7z"
                        })))
                    }, {
                        height: 45,
                        width: 200,
                        fill: "white"
                    }),
                    iconB: (0, l0.jsx)(function (e) {
                        return l6.createElement("svg", nE({
                            id: "geckoterminal_green_svg__Layer_1",
                            xmlns: "http://www.w3.org/2000/svg",
                            x: 0,
                            y: 0,
                            viewBox: "0 0 2885 459.8",
                            style: {
                                enableBackground: "new 0 0 2885 459.8"
                            },
                            xmlSpace: "preserve"
                        }, e), W || (W = l6.createElement("style", null, ".geckoterminal_green_svg__st0{fill:#83b57c}.geckoterminal_green_svg__st1{fill:#fff}.geckoterminal_green_svg__st2{fill:#83b57c}.geckoterminal_green_svg__st4{fill:none}.geckoterminal_green_svg__st6{fill:#69ff52}")), U || (U = l6.createElement("path", {
                            className: "geckoterminal_green_svg__st0",
                            d: "m437.5 166.8-25.1-25.1c-17.1 13.9-46.6 25.6-65.2 31.7-.8.3-1.6.6-2.5.9-4.9 4.8-9.7 9.9-14.2 15.3l36.6 36.6 68.5 68.5 1.9-1.9c34.9-34.7 34.9-91.2 0-126zM104.6 226.3l71.3-71.3c1.9-5.1 3.9-10.2 6.1-15.3 21.5-48.2 69.7-64.5 115.2-65.3 6-10.6 17.3-17.7 30-17.8l-28.3-28.3c-34.8-34.8-91.3-34.8-126.1 0l-1.9 1.9L36.1 165l68.5 68.5c-2-2-2-5.2 0-7.2z"
                        })), Q || (Q = l6.createElement("path", {
                            className: "geckoterminal_green_svg__st1",
                            d: "M351 80.3z"
                        })), q || (q = l6.createElement("path", {
                            className: "geckoterminal_green_svg__st2",
                            d: "M367.2 226.3c2 2 2 5.2 0 7.2l-63.1 63.1-15.5 15.5-42 42-7.1 7.1c-2 2-5.2 2-7.2 0l-63.8-63.8-42-42-21.9-21.9L36.1 165l-1.9 1.9C-.6 201.7-.6 258.2 34.2 293L50 308.7l119.1 119.1 3.7 3.7c34.8 34.8 91.3 34.8 126.1 0l1.9-1.9 134.9-134.9-68.5-68.4z"
                        })), l6.createElement("path", {
                            d: "M351 80.3c-2.5-5.5-6.9-10.1-12.7-12.7-.2-.1-.3-.2-.5-.3-.8-.3-1.6-.6-2.3-.9.4 2.8.1 5.7-1 8.4-.3.7-.7 1.3-1.1 2-3.9 6.4-12 9.1-19 6.1-3.3-1.4-5.9-3.9-7.5-6.9-1 1.5-2 3.1-2.7 4.8-5.6 13 .5 28.1 13.5 33.7 13 5.6 28.1-.5 33.7-13.5 2.8-6.9 2.5-14.4-.4-20.7z",
                            style: {
                                fill: "#688365"
                            }
                        }), R || (R = l6.createElement("path", {
                            className: "geckoterminal_green_svg__st4",
                            d: "M317.6 114.5c13 5.6 28.1-.5 33.7-13.5 2.9-6.9 2.6-14.4-.3-20.7-2.5-5.4-6.9-10-12.7-12.7-.2-.1-.3-.2-.5-.3-.8-.3-1.6-.6-2.3-.9.4 2.8.1 5.7-1 8.4-.3.7-.7 1.3-1.1 2-3.9 6.4-12 9.1-19 6.1-3.3-1.4-5.9-3.9-7.5-6.9-1 1.5-2 3.1-2.7 4.8-5.7 13 .4 28.1 13.4 33.7z"
                        })), Y || (Y = l6.createElement("path", {
                            className: "geckoterminal_green_svg__st2",
                            d: "M176.2 154.2c-.1.2-.2.5-.3.7-13.2 69.9-19.8 79.7-49.5 100.4l10.6 10.6c6.9-6.8 16.8-18.6 26.2-36.7 11.5-22.3 13.1-55.9 13-75z"
                        })), X || (X = l6.createElement("path", {
                            className: "geckoterminal_green_svg__st4",
                            d: "M351 80.3c-2.5-5.5-6.9-10.1-12.7-12.7-.2-.1-.3-.2-.5-.3-.8-.3-1.6-.6-2.3-.9.4 2.8.1 5.7-1 8.4-.3.7-.7 1.3-1.1 2-3.9 6.4-12 9.1-19 6.1-3.3-1.4-5.9-3.9-7.5-6.9-1 1.5-2 3.1-2.7 4.8-5.6 13 .5 28.1 13.5 33.7 13 5.6 28.1-.5 33.7-13.5 2.8-6.9 2.5-14.4-.4-20.7zM326.1 185.3c.2-.1.4-.3.6-.5-.2.1-.4.2-.6.5-6.6 5.3-12.8 12.1-18.3 20.2 5.4-8.1 11.6-14.9 18.3-20.2z"
                        })), K || (K = l6.createElement("path", {
                            className: "geckoterminal_green_svg__st2",
                            d: "M326.6 184.8c-.2.2-.4.3-.6.5-6.6 5.3-12.8 12.1-18.3 20.2-16.3 24.4-25.7 60.8-19.2 106.6l24.9-24.4c-1.1-3.6-2.1-7.4-3-11.3-8.6-36.3-2.2-60.2 20.1-86.7 2.8-3.3 9.2-9.9 14.9-15.6-.2.1-.4.2-.6.2-6.2 2.4-12.4 5.9-18.2 10.5z"
                        })), J || (J = l6.createElement("path", {
                            className: "geckoterminal_green_svg__st1",
                            d: "M307.8 205.5c-16.3 24.4-25.7 60.8-19.3 106.6-6.4-45.9 3-82.2 19.3-106.6z"
                        })), l6.createElement("linearGradient", {
                            id: "geckoterminal_green_svg__SVGID_1_",
                            gradientUnits: "userSpaceOnUse",
                            x1: -562.471,
                            y1: 2945.704,
                            x2: -3.169,
                            y2: 1194.843
                        }, l6.createElement("stop", {
                            offset: 0,
                            style: {
                                stopColor: "#5d47ff"
                            }
                        }), l6.createElement("stop", {
                            offset: .59,
                            style: {
                                stopColor: "#846dff"
                            }
                        }), l6.createElement("stop", {
                            offset: 1,
                            style: {
                                stopColor: "#a36cff"
                            }
                        })), l6.createElement("path", {
                            d: "M307.8 205.5c-16.3 24.4-25.7 60.8-19.3 106.6-6.4-45.9 3-82.2 19.3-106.6z",
                            style: {
                                fill: "url(#geckoterminal_green_svg__SVGID_1_)"
                            }
                        }), $ || ($ = l6.createElement("path", {
                            className: "geckoterminal_green_svg__st2",
                            d: "M429.8 107.2c-14.6-20.6-58.9-30.1-58.9-30.1s-6-16.7-21.6-21.9c-14.1-4.7-35.3 3.7-35.3 3.7l.3.3c4-1.7 8.4-2.6 13-2.7 1.1 0 2.2 0 3.3.1 15.3 1.2 27.4 12.1 31 26.2 74.3 18.4 73.5 40.6 50.9 59-.9.7-1.8 1.4-2.8 2.1l.4.4c0-.1 33.6-17.3 19.7-37.1z"
                        })), ee || (ee = l6.createElement("path", {
                            className: "geckoterminal_green_svg__st1",
                            d: "M361.5 82.8c-3.6-14-15.8-24.9-31-26.2-1.1-.1-2.2-.1-3.3-.1-4.6.1-9 1-13 2.7-7.2 3-13.2 8.3-17 15.1-45.4.8-93.7 17.1-115.2 65.3-2.1 4.8-4.1 9.7-5.9 14.6.1 19.1-1.5 52.7-13 75-9.4 18.2-19.3 29.9-26.2 36.7l31.4 31.4 63.8 63.8c2 2 5.2 2 7.2 0l7.1-7.1 42-42c-6.5-45.9 2.9-82.3 19.3-106.6 5.4-8.1 11.7-14.9 18.3-20.3.2-.1.4-.3.5-.4 5.8-4.6 11.9-8.1 18.1-10.5.2-.1.4-.2.6-.2.6-.2 1.2-.5 1.8-.7 17.6-5.8 45.1-16.6 62.4-29.5.9-.7 1.9-1.4 2.8-2.1 22.8-18.3 23.7-40.5-50.7-58.9zM351.3 101c-5.6 13-20.6 19.1-33.7 13.5-13-5.6-19.1-20.6-13.5-33.7.7-1.7 1.6-3.3 2.7-4.8 1.6 3 4.2 5.5 7.5 6.9 7.1 3 15.1.3 19-6.1.1-.2.2-.3.3-.5.3-.5.6-1 .8-1.5 1.2-2.8 1.5-5.7 1-8.4.8.3 1.6.5 2.3.9.2.1.3.2.5.3 5.8 2.7 10.2 7.3 12.7 12.7 1.9 4.1 2.6 8.8 2.1 13.4-.1 2.5-.7 4.9-1.7 7.3z"
                        })), et || (et = l6.createElement("path", {
                            className: "geckoterminal_green_svg__st0",
                            d: "M792.2 224.4c-.2-2.9-.5-5.5-1-7.9H689.6v37.2h60.6v.3c0 6.4-1.4 12.4-4.3 18s-7 10.4-12.3 14.6c-5.3 4.2-11.4 7.4-18.3 9.8-6.8 2.4-14.2 3.5-22.1 3.5-10.5 0-20.4-2-29.6-5.9-9.3-4-17.5-9.5-24.5-16.5-7.1-7.1-12.6-15.3-16.5-24.7-4-9.4-5.9-19.3-5.9-29.8 0-10.9 1.9-20.9 5.8-30.1 3.8-9.2 9.1-17.2 15.9-24 6.7-6.8 14.6-12.2 23.7-16 9.1-3.8 19-5.8 29.6-5.8 7.3 0 14.3 1.1 21.2 3.2 6.8 2.1 13.4 5.1 19.7 9 6.3 3.8 12.4 8.7 18.4 14.4l26.3-27.6c-5.8-7.3-13-13.8-21.8-19.6-8.8-5.8-18.6-10.3-29.5-13.5-10.9-3.2-22.2-4.8-34-4.8-16.7 0-32.2 2.9-46.6 8.7s-27 13.8-37.7 24.2c-10.7 10.4-19 22.5-24.8 36.5-5.9 14-8.8 29.1-8.8 45.4 0 16.5 2.9 31.7 8.7 45.7 5.8 14 13.9 26.2 24.5 36.7 10.6 10.5 23 18.6 37.3 24.5 14.3 5.9 29.9 8.8 46.8 8.8 14.3 0 27.6-2.4 39.9-7.2 12.3-4.8 23.1-11.6 32.4-20.4 9.3-8.8 16.5-19.2 21.6-31.3 5.1-12.1 7.7-25.5 7.7-40.2 0-1.9-.1-4.2-.2-6.9-.2-2.6-.4-5.4-.6-8.3zM960.8 186.6c-7-7.4-15.4-13.2-25-17.5-9.6-4.3-20-6.4-31.1-6.4-12.6 0-24.2 2.2-34.8 6.6-10.6 4.4-19.7 10.6-27.2 18.6-7.6 8-13.5 17.5-17.8 28.4-4.3 10.9-6.4 23-6.4 36.2 0 16.7 3.8 31.5 11.4 44.4 7.6 12.9 18.2 23.1 31.7 30.6 13.6 7.5 29.2 11.2 47 11.2 7.9 0 15.9-1.1 24-3.2s15.9-5.1 23.2-8.8c7.4-3.7 13.9-8.3 19.7-13.6L956 285.8c-7.7 6.6-14.9 11.2-21.5 13.8-6.6 2.6-13.9 3.8-21.8 3.8-11.3 0-21.2-2.2-29.6-6.6-8.4-4.4-15-10.6-19.6-18.8-3.1-5.5-5.1-11.6-6.1-18.3H982l.3-13.8c.2-12-1.6-23-5.3-33.2-3.7-9.9-9.1-18.7-16.2-26.1zm-82.5 17.2c7.2-4.1 16-6.1 26.4-6.1 6.8 0 13.1 1.4 18.7 4.3 5.7 2.9 10.3 6.8 13.9 11.9 3.6 5 5.8 10.8 6.4 17.5v1.6h-85.6c.9-4.3 2.2-8.2 3.8-11.7 3.8-7.6 9.2-13.5 16.4-17.5zM1068.4 204.9c7.4-4.6 15.8-6.9 25.2-6.9 5.6 0 11.1 1.1 16.7 3.2s10.8 5 15.7 8.7c4.9 3.6 9 7.7 12.2 12.2l21.8-26.3c-6.8-10.3-16.5-18.3-28.8-24-12.4-5.8-26.2-8.7-41.4-8.7-15.8 0-30 3.8-42.6 11.5-12.6 7.7-22.6 18.2-29.8 31.4-7.3 13.3-10.9 28.2-10.9 44.9s3.6 31.6 10.9 44.9c7.3 13.3 17.2 23.7 29.8 31.4 12.6 7.7 26.8 11.5 42.6 11.5 14.1 0 27.5-2.9 40.2-8.8 12.7-5.9 22.7-13.5 30-22.9l-21.8-26.6c-4.1 5.1-8.4 9.4-13.1 12.8-4.7 3.4-9.7 6-14.9 7.9-5.2 1.8-10.6 2.7-16.2 2.7-9.2 0-17.5-2.3-25-7.1-7.5-4.7-13.4-11-17.8-18.9-4.4-7.9-6.6-16.9-6.6-26.9s2.1-19.1 6.4-27.1c4.2-8 10-14.3 17.4-18.9zM1351.9 166.6h-52.6l-69.8 70.2V98.3H1190v237.2h39.5v-54l16.9-15.9 57.7 69.9h48.8l-79.7-95zM1525.2 205.7c-7.6-13.2-18-23.7-31.3-31.3-13.3-7.6-28.2-11.4-44.9-11.4-16.9 0-32 3.8-45.2 11.4-13.3 7.6-23.7 18-31.4 31.3-7.7 13.3-11.5 28.3-11.5 45.2 0 16.9 3.8 32 11.5 45.2 7.7 13.3 18.2 23.7 31.4 31.3 13.3 7.6 28.3 11.4 45.2 11.4 16.7 0 31.6-3.8 44.9-11.4 13.2-7.6 23.7-18 31.3-31.3 7.6-13.2 11.4-28.3 11.4-45.2-.1-16.9-3.8-32-11.4-45.2zm-34.7 72.1c-4.2 7.9-9.8 14.2-17 18.9-7.2 4.7-15.3 7.1-24.5 7.1s-17.5-2.3-24.8-7.1c-7.4-4.7-13.1-11-17.1-18.9-4.1-7.9-6.1-16.9-6.1-26.9s2-19.1 6.1-27.1 9.8-14.3 17.1-18.9c7.4-4.6 15.7-6.9 24.8-6.9 9.2 0 17.4 2.3 24.5 6.9 7.2 4.6 12.8 10.8 17 18.8 4.2 7.9 6.1 17 5.9 27.2.3 10-1.7 19-5.9 26.9z"
                        })), ea || (ea = l6.createElement("path", {
                            className: "geckoterminal_green_svg__st6",
                            d: "M1609.1 335.6V150h-64v-38.4h171.5V150h-65.9v185.6h-41.6zM1797.6 338.8c-17.7 0-33.3-3.7-46.9-11.2-13.6-7.5-24.1-17.7-31.7-30.6-7.6-12.9-11.4-27.7-11.4-44.3 0-13.2 2.1-25.3 6.4-36.2 4.3-10.9 10.2-20.3 17.8-28.3 7.6-8 16.6-14.2 27.2-18.6 10.6-4.4 22.1-6.6 34.7-6.6 11.1 0 21.4 2.1 31 6.4 9.6 4.3 17.9 10.1 25 17.4 7 7.4 12.4 16.1 16.2 26.2 3.7 10.1 5.5 21.2 5.3 33.1l-.3 13.8h-136.7l-7.4-26.9H1838l-5.1 5.4v-7c-.6-6.6-2.8-12.4-6.4-17.4-3.6-5-8.3-9-13.9-11.8-5.7-2.9-11.9-4.3-18.7-4.3-10.5 0-19.3 2-26.4 6.1-7.2 4.1-12.5 9.9-16.2 17.4-3.6 7.6-5.4 17-5.4 28.3 0 10.9 2.3 20.4 6.9 28.5 4.6 8.1 11.1 14.4 19.5 18.7 8.4 4.4 18.3 6.6 29.6 6.6 7.9 0 15.1-1.3 21.8-3.8 6.6-2.6 13.8-7.1 21.4-13.8l19.5 27.2c-5.8 5.3-12.3 9.9-19.7 13.6-7.4 3.7-15.1 6.7-23.2 8.8-8.2 2.2-16.2 3.3-24.1 3.3zM1906.1 335.6V167h38.7l.6 53.8-5.4-12.2c2.3-8.5 6.4-16.2 12.2-23 5.8-6.8 12.4-12.2 20-16.2 7.6-3.9 15.5-5.9 23.8-5.9 3.6 0 7.1.3 10.4 1 3.3.6 6 1.4 8.2 2.2l-10.6 43.2c-2.4-1.3-5.2-2.3-8.6-3.2-3.4-.8-6.8-1.3-10.2-1.3-5.3 0-10.4 1-15.2 3-4.8 2-9 4.9-12.6 8.5-3.6 3.6-6.5 7.8-8.5 12.6s-3 10.2-3 16.2v89.9h-39.8zM2040.2 335.6V167h38.7l.6 33.9-6.4 2.6c1.9-5.5 4.8-10.7 8.6-15.5 3.8-4.8 8.4-9 13.8-12.5 5.3-3.5 11-6.3 17-8.3 6-2 12.1-3 18.2-3 9.2 0 17.3 1.4 24.5 4.3 7.1 2.9 13.1 7.4 17.9 13.6 4.8 6.2 8.4 14.1 10.7 23.7l-6.1-1.3 2.6-5.1c2.3-5.1 5.6-9.8 9.9-13.9 4.3-4.2 9.1-7.9 14.4-11.2 5.3-3.3 10.9-5.8 16.8-7.5 5.9-1.7 11.7-2.6 17.4-2.6 12.8 0 23.5 2.6 32 7.7s14.9 12.9 19.2 23.4c4.3 10.5 6.4 23.4 6.4 38.7v101.8h-39.7v-99.2c0-8.5-1.1-15.6-3.4-21.1-2.2-5.5-5.7-9.7-10.2-12.3-4.6-2.7-10.3-4-17.1-4-5.3 0-10.4.9-15.2 2.7-4.8 1.8-8.9 4.4-12.3 7.7-3.4 3.3-6.1 7.1-8 11.4-1.9 4.3-2.9 9-2.9 14.1v100.8h-39.7v-99.5c0-8.1-1.2-14.9-3.5-20.3-2.4-5.4-5.8-9.6-10.2-12.5-4.5-2.9-9.9-4.3-16.3-4.3-5.3 0-10.4.9-15 2.7-4.7 1.8-8.8 4.3-12.2 7.5-3.4 3.2-6.1 6.9-8 11.2-1.9 4.3-2.9 9-2.9 14.1v101.1h-39.6zM2364.1 131.1c-7.9 0-14-2-18.4-5.9-4.4-3.9-6.6-9.5-6.6-16.8 0-6.8 2.2-12.4 6.7-16.6 4.5-4.3 10.6-6.4 18.2-6.4 8.1 0 14.3 2 18.7 5.9 4.4 3.9 6.6 9.7 6.6 17.1 0 6.6-2.2 12.1-6.7 16.3-4.4 4.3-10.6 6.4-18.5 6.4zm-19.2 204.5V167h39.4v168.7h-39.4zM2434.2 335.6V167h38.4l.6 34.6-7.4 3.8c2.1-7.7 6.3-14.7 12.5-21 6.2-6.3 13.6-11.4 22.1-15.2 8.5-3.8 17.3-5.8 26.2-5.8 12.8 0 23.5 2.6 32.2 7.7 8.6 5.1 15.1 12.8 19.5 23s6.6 23 6.6 38.4v103.1h-39.4V235.4c0-8.5-1.2-15.6-3.5-21.3-2.4-5.7-6-9.8-10.9-12.5-4.9-2.7-10.9-3.9-17.9-3.7-5.8 0-11 .9-15.8 2.7-4.8 1.8-9 4.4-12.5 7.7s-6.3 7.1-8.3 11.4c-2 4.3-3 9-3 14.1v101.8h-39.4zM2692.8 338.8c-13.9 0-26.5-3.8-37.8-11.5-11.3-7.7-20.4-18.1-27.2-31.4-6.8-13.2-10.2-28.3-10.2-45.1 0-16.9 3.4-31.9 10.2-45.1 6.8-13.2 16.1-23.6 27.8-31 11.7-7.5 25-11.2 39.7-11.2 8.5 0 16.3 1.2 23.4 3.7 7 2.5 13.2 5.9 18.6 10.4 5.3 4.5 9.8 9.6 13.3 15.4 3.5 5.8 5.9 12 7.2 18.6l-8.6-2.2V167h39.7v168.7h-40v-40.3l9.3-1.6c-1.5 5.8-4.2 11.4-8.2 16.8-4 5.4-8.9 10.2-14.7 14.4-5.9 4.2-12.4 7.5-19.5 10.1-7.3 2.4-14.9 3.7-23 3.7zm10.8-34.9c9.2 0 17.3-2.2 24.3-6.7s12.5-10.7 16.5-18.7c3.9-8 5.9-17.2 5.9-27.7 0-10.2-2-19.3-5.9-27.2-4-7.9-9.4-14.1-16.5-18.6-7-4.5-15.1-6.7-24.3-6.7-9.2 0-17.2 2.2-24.2 6.7-6.9 4.5-12.3 10.7-16.2 18.6-3.8 7.9-5.8 17-5.8 27.2 0 10.5 1.9 19.7 5.8 27.7 3.8 8 9.2 14.2 16.2 18.7s15.1 6.7 24.2 6.7zM2834.8 335.6V98.8h39.7v236.8h-39.7z"
                        })))
                    }, {
                        height: 45,
                        width: 200
                    }),
                    link: "https://www.geckoterminal.com/hedera-hashgraph/pools",
                    name: "GeckoTerminal"
                }, {
                    iconA: (0, l0.jsx)(nm, {
                        height: 45,
                        width: 200,
                        fill: "white"
                    }),
                    iconB: (0, l0.jsx)(nm, {
                        height: 45,
                        width: 200,
                        fill: "#69ff52"
                    }),
                    link: "https://dexscreener.com/hedera/saucerswap",
                    name: "DexScreener"
                }, {
                    iconA: (0, l0.jsx)(ng, {
                        height: 45,
                        width: 200,
                        fill: "white"
                    }),
                    iconB: (0, l0.jsx)(ng, {
                        height: 45,
                        width: 200,
                        fill: "#69ff52"
                    }),
                    link: "https://www.diamondstandard.co/",
                    name: "Diamond Standard"
                }],
                n0 = e => {
                    let {
                        title: t,
                        partner: a,
                        description: s
                    } = e;
                    return (0, l0.jsxs)(l9.Z, {
                        gap: "12px",
                        children: [(0, l0.jsx)(cd.Z, {
                            fontSize: "32px",
                            fontWeight: 800,
                            children: t
                        }), (0, l0.jsx)(cd.Z, {
                            color: "custom.green",
                            fontSize: "32px",
                            fontWeight: 800,
                            children: a
                        }), (0, l0.jsx)(cd.Z, {
                            children: s
                        })]
                    })
                },
                n6 = e => {
                    let {
                        href: t,
                        iconA: a,
                        iconB: s
                    } = e;
                    return (0, l0.jsx)(cZ.C, {
                        m: "auto",
                        href: t,
                        children: (0, l0.jsxs)(l8.Z, {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            sx: {
                                position: "relative",
                                svg: {
                                    transition: "opacity 300ms ease-out",
                                    "&:first-of-type": {
                                        position: "absolute",
                                        opacity: 1
                                    },
                                    "&:last-of-type": {
                                        position: "absolute",
                                        opacity: 0
                                    },
                                    "&:hover": {
                                        "&:last-of-type": {
                                            opacity: 1
                                        },
                                        "&:first-of-type": {
                                            opacity: 0
                                        }
                                    }
                                }
                            },
                            children: [a, s]
                        })
                    })
                },
                n7 = () => (0, l0.jsx)(cU.Z, {
                    sx: {
                        borderColor: "custom.grey",
                        borderWidth: "0.5px",
                        borderStyle: "solid",
                        width: "100%"
                    }
                }),
                n8 = 11.45,
                n9 = "20px";
            var he = () => {
                let e = (0, l7.Z)(),
                    {
                        isSmall: t
                    } = (0, cz.l)();
                return (0, l0.jsxs)(cB.Z, {
                    fullWidth: !0,
                    background: "url(".concat(e.images.backgroundFooterPrimary, ") center bottom / 100% auto no-repeat"),
                    backgroundComponent: (0, l0.jsx)(cT.q, {}),
                    children: [(0, l0.jsx)(nJ, {}), (0, l0.jsx)(n$, {}), (0, l0.jsxs)(cL.Z, {
                        sx: t ? {
                            px: 5
                        } : void 0,
                        children: [(0, l0.jsxs)(l8.Z, {
                            px: {
                                sm: 2
                            },
                            children: [(0, l0.jsx)(cP, {}), (0, l0.jsx)(n1, {}), (0, l0.jsx)(n2, {}), (0, l0.jsx)(n3, {})]
                        }), (0, l0.jsx)(n5, {})]
                    })]
                })
            }
        }
    },
    function (e) {
        e.O(0, [382, 452, 774, 888, 179], function () {
            return e(e.s = 48312)
        }), _N_E = e.O()
    }
]);