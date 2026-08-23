import React from 'react';
const LABEL_39748 = 'component_39748';
export function Component39748({ value = 39748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39748, 'data-value': derived.doubled }, children);
}
export default Component39748;
