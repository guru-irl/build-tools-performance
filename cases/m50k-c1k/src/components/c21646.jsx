import React from 'react';
const LABEL_21646 = 'component_21646';
export function Component21646({ value = 21646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21646, 'data-value': derived.doubled }, children);
}
export default Component21646;
