import React from 'react';
const LABEL_26951 = 'component_26951';
export function Component26951({ value = 26951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26951, 'data-value': derived.doubled }, children);
}
export default Component26951;
