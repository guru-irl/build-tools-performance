import React from 'react';
const LABEL_11889 = 'component_11889';
export function Component11889({ value = 11889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11889, 'data-value': derived.doubled }, children);
}
export default Component11889;
