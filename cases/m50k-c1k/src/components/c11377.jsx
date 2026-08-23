import React from 'react';
const LABEL_11377 = 'component_11377';
export function Component11377({ value = 11377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11377, 'data-value': derived.doubled }, children);
}
export default Component11377;
