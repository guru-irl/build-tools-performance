import React from 'react';
const LABEL_26676 = 'component_26676';
export function Component26676({ value = 26676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26676, 'data-value': derived.doubled }, children);
}
export default Component26676;
