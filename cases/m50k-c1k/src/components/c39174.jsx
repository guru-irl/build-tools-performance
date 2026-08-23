import React from 'react';
const LABEL_39174 = 'component_39174';
export function Component39174({ value = 39174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39174, 'data-value': derived.doubled }, children);
}
export default Component39174;
