import React from 'react';
const LABEL_39438 = 'component_39438';
export function Component39438({ value = 39438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39438, 'data-value': derived.doubled }, children);
}
export default Component39438;
