import React from 'react';
const LABEL_43911 = 'component_43911';
export function Component43911({ value = 43911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43911, 'data-value': derived.doubled }, children);
}
export default Component43911;
