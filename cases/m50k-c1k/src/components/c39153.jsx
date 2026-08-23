import React from 'react';
const LABEL_39153 = 'component_39153';
export function Component39153({ value = 39153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39153, 'data-value': derived.doubled }, children);
}
export default Component39153;
