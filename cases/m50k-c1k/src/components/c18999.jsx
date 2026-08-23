import React from 'react';
const LABEL_18999 = 'component_18999';
export function Component18999({ value = 18999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18999, 'data-value': derived.doubled }, children);
}
export default Component18999;
