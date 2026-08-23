import React from 'react';
const LABEL_38774 = 'component_38774';
export function Component38774({ value = 38774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38774, 'data-value': derived.doubled }, children);
}
export default Component38774;
