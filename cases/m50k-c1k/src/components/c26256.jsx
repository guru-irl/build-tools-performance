import React from 'react';
const LABEL_26256 = 'component_26256';
export function Component26256({ value = 26256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26256, 'data-value': derived.doubled }, children);
}
export default Component26256;
