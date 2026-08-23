import React from 'react';
const LABEL_35002 = 'component_35002';
export function Component35002({ value = 35002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35002, 'data-value': derived.doubled }, children);
}
export default Component35002;
