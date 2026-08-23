import React from 'react';
const LABEL_23129 = 'component_23129';
export function Component23129({ value = 23129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23129, 'data-value': derived.doubled }, children);
}
export default Component23129;
