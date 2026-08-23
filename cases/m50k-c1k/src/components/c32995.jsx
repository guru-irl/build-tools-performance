import React from 'react';
const LABEL_32995 = 'component_32995';
export function Component32995({ value = 32995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32995, 'data-value': derived.doubled }, children);
}
export default Component32995;
