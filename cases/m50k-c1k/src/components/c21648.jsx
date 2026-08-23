import React from 'react';
const LABEL_21648 = 'component_21648';
export function Component21648({ value = 21648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21648, 'data-value': derived.doubled }, children);
}
export default Component21648;
