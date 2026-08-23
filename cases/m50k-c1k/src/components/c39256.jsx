import React from 'react';
const LABEL_39256 = 'component_39256';
export function Component39256({ value = 39256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39256, 'data-value': derived.doubled }, children);
}
export default Component39256;
