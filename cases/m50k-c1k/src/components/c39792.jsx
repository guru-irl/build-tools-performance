import React from 'react';
const LABEL_39792 = 'component_39792';
export function Component39792({ value = 39792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39792, 'data-value': derived.doubled }, children);
}
export default Component39792;
