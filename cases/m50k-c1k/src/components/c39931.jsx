import React from 'react';
const LABEL_39931 = 'component_39931';
export function Component39931({ value = 39931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39931, 'data-value': derived.doubled }, children);
}
export default Component39931;
