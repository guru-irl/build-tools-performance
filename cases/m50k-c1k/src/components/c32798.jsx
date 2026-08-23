import React from 'react';
const LABEL_32798 = 'component_32798';
export function Component32798({ value = 32798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32798, 'data-value': derived.doubled }, children);
}
export default Component32798;
