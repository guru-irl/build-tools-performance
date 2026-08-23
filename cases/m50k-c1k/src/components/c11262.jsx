import React from 'react';
const LABEL_11262 = 'component_11262';
export function Component11262({ value = 11262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11262, 'data-value': derived.doubled }, children);
}
export default Component11262;
