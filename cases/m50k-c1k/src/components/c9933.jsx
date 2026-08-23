import React from 'react';
const LABEL_9933 = 'component_9933';
export function Component9933({ value = 9933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9933, 'data-value': derived.doubled }, children);
}
export default Component9933;
