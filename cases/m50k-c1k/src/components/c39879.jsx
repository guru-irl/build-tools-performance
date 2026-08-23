import React from 'react';
const LABEL_39879 = 'component_39879';
export function Component39879({ value = 39879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39879, 'data-value': derived.doubled }, children);
}
export default Component39879;
