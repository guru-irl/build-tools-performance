import React from 'react';
const LABEL_42250 = 'component_42250';
export function Component42250({ value = 42250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42250, 'data-value': derived.doubled }, children);
}
export default Component42250;
