import React from 'react';
const LABEL_3923 = 'component_3923';
export function Component3923({ value = 3923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3923, 'data-value': derived.doubled }, children);
}
export default Component3923;
