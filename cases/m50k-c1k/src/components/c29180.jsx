import React from 'react';
const LABEL_29180 = 'component_29180';
export function Component29180({ value = 29180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29180, 'data-value': derived.doubled }, children);
}
export default Component29180;
