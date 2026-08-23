import React from 'react';
const LABEL_8377 = 'component_8377';
export function Component8377({ value = 8377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8377, 'data-value': derived.doubled }, children);
}
export default Component8377;
