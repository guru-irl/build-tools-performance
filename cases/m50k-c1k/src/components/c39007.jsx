import React from 'react';
const LABEL_39007 = 'component_39007';
export function Component39007({ value = 39007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39007, 'data-value': derived.doubled }, children);
}
export default Component39007;
