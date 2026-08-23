import React from 'react';
const LABEL_39887 = 'component_39887';
export function Component39887({ value = 39887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39887, 'data-value': derived.doubled }, children);
}
export default Component39887;
