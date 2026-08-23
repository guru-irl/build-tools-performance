import React from 'react';
const LABEL_2648 = 'component_2648';
export function Component2648({ value = 2648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2648, 'data-value': derived.doubled }, children);
}
export default Component2648;
