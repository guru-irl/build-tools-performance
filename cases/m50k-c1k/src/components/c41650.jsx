import React from 'react';
const LABEL_41650 = 'component_41650';
export function Component41650({ value = 41650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41650, 'data-value': derived.doubled }, children);
}
export default Component41650;
