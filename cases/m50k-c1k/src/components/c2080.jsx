import React from 'react';
const LABEL_2080 = 'component_2080';
export function Component2080({ value = 2080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2080, 'data-value': derived.doubled }, children);
}
export default Component2080;
