import { Row, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
<Row
  className={styles.mobile}
  maxWidth="m"
  paddingY="8"
  paddingX="16"
  gap="16"
  horizontal="between"
  vertical="center"
  s={{ direction: "column", align: "center" }}
>
  {/* Copyright */}
  <Text variant="body-default-s" onBackground="neutral-weak">
    © {currentYear} · {person.name} · VAT IT02130360437
  </Text>

    {/* Credits */}
  <Text variant="body-default-s" onBackground="neutral-weak">
    Build your portfolio with{" "}
    <SmartLink href="https://once-ui.com/products/magic-portfolio">
      Once UI
    </SmartLink>
  </Text>

  {/* Legal */}
  <Row gap="16">
    <Text variant="body-default-s" onBackground="neutral-weak">
    <SmartLink href="https://www.iubenda.com/privacy-policy/63034659">Privacy Policy</SmartLink>
     · 
    <SmartLink href="https://www.iubenda.com/privacy-policy/63034659/cookie-policy">Cookie Policy</SmartLink>
    </Text>
  </Row>

  {/* Social */}
  <Row gap="16">
    {social.map(
      (item) =>
        item.link && (
          <IconButton
            key={item.name}
            href={item.link}
            icon={item.icon}
            tooltip={item.name}
            size="s"
            variant="ghost"
          />
        ),
    )}
  </Row>
</Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
