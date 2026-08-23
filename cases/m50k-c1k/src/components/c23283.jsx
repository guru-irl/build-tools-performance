import React from 'react';
const LABEL_23283 = 'component_23283';
export function Component23283({ value = 23283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23283, 'data-value': derived.doubled }, children);
}
export default Component23283;
