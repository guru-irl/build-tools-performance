import React from 'react';
const LABEL_20524 = 'component_20524';
export function Component20524({ value = 20524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20524, 'data-value': derived.doubled }, children);
}
export default Component20524;
