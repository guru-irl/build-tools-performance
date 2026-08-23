import React from 'react';
const LABEL_39441 = 'component_39441';
export function Component39441({ value = 39441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39441, 'data-value': derived.doubled }, children);
}
export default Component39441;
