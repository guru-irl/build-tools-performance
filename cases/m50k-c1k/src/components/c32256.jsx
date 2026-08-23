import React from 'react';
const LABEL_32256 = 'component_32256';
export function Component32256({ value = 32256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32256, 'data-value': derived.doubled }, children);
}
export default Component32256;
