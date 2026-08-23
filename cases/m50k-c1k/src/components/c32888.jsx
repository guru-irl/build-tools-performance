import React from 'react';
const LABEL_32888 = 'component_32888';
export function Component32888({ value = 32888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32888, 'data-value': derived.doubled }, children);
}
export default Component32888;
