import React from 'react';
const LABEL_34262 = 'component_34262';
export function Component34262({ value = 34262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34262, 'data-value': derived.doubled }, children);
}
export default Component34262;
