import React from 'react';
const LABEL_13377 = 'component_13377';
export function Component13377({ value = 13377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13377, 'data-value': derived.doubled }, children);
}
export default Component13377;
