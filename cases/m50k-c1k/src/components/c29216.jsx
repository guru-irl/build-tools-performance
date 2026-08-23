import React from 'react';
const LABEL_29216 = 'component_29216';
export function Component29216({ value = 29216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29216, 'data-value': derived.doubled }, children);
}
export default Component29216;
