import React from 'react';
const LABEL_18148 = 'component_18148';
export function Component18148({ value = 18148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18148, 'data-value': derived.doubled }, children);
}
export default Component18148;
