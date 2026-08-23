import React from 'react';
const LABEL_39524 = 'component_39524';
export function Component39524({ value = 39524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39524, 'data-value': derived.doubled }, children);
}
export default Component39524;
