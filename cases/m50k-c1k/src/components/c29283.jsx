import React from 'react';
const LABEL_29283 = 'component_29283';
export function Component29283({ value = 29283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29283, 'data-value': derived.doubled }, children);
}
export default Component29283;
