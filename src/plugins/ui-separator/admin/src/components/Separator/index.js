import React, { forwardRef } from "react";
import { lightTheme } from "@strapi/design-system";

const SeparatorField = forwardRef(({ name, attribute }) => (
  <div
    style={{
      width: "100%",
      marginTop: "80px",
      marginBottom: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        height: "1px",
        flex: 1,
        display: "block",
        borderRadius: "2px",
        backgroundColor: lightTheme.colors.primary500,
      }}
    />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingInline: "15px",
        flexShrink: 0,
        color: lightTheme.colors.primary500,
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      {(attribute?.options?.value || name || null)?.toUpperCase() ||
        "NEXT BLOCK"}
    </div>

    <div
      style={{
        height: "1px",
        display: "block",
        borderRadius: "2px",
        flex: 1,
        backgroundColor: lightTheme.colors.primary500,
      }}
    />
  </div>
));

export default SeparatorField;
