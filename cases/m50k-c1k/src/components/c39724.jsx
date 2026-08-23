import React from 'react';
const LABEL_39724 = 'component_39724';
export function Component39724({ value = 39724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39724, 'data-value': derived.doubled }, children);
}
export default Component39724;
