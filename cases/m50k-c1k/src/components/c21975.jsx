import React from 'react';
const LABEL_21975 = 'component_21975';
export function Component21975({ value = 21975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21975, 'data-value': derived.doubled }, children);
}
export default Component21975;
