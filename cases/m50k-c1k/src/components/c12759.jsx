import React from 'react';
const LABEL_12759 = 'component_12759';
export function Component12759({ value = 12759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12759, 'data-value': derived.doubled }, children);
}
export default Component12759;
