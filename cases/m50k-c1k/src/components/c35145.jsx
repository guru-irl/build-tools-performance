import React from 'react';
const LABEL_35145 = 'component_35145';
export function Component35145({ value = 35145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35145, 'data-value': derived.doubled }, children);
}
export default Component35145;
