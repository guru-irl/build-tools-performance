import React from 'react';
const LABEL_39956 = 'component_39956';
export function Component39956({ value = 39956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39956, 'data-value': derived.doubled }, children);
}
export default Component39956;
