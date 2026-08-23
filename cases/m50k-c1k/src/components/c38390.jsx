import React from 'react';
const LABEL_38390 = 'component_38390';
export function Component38390({ value = 38390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38390, 'data-value': derived.doubled }, children);
}
export default Component38390;
