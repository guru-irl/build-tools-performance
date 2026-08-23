import React from 'react';
const LABEL_11251 = 'component_11251';
export function Component11251({ value = 11251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11251, 'data-value': derived.doubled }, children);
}
export default Component11251;
