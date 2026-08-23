import React from 'react';
const LABEL_33888 = 'component_33888';
export function Component33888({ value = 33888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33888, 'data-value': derived.doubled }, children);
}
export default Component33888;
