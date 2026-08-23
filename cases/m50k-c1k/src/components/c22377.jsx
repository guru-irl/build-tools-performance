import React from 'react';
const LABEL_22377 = 'component_22377';
export function Component22377({ value = 22377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22377, 'data-value': derived.doubled }, children);
}
export default Component22377;
