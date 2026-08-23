import React from 'react';
const LABEL_39803 = 'component_39803';
export function Component39803({ value = 39803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39803, 'data-value': derived.doubled }, children);
}
export default Component39803;
