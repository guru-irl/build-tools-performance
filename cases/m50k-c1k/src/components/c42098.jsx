import React from 'react';
const LABEL_42098 = 'component_42098';
export function Component42098({ value = 42098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42098, 'data-value': derived.doubled }, children);
}
export default Component42098;
