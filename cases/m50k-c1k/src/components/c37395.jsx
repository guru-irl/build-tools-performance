import React from 'react';
const LABEL_37395 = 'component_37395';
export function Component37395({ value = 37395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37395, 'data-value': derived.doubled }, children);
}
export default Component37395;
