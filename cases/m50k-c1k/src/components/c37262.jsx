import React from 'react';
const LABEL_37262 = 'component_37262';
export function Component37262({ value = 37262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37262, 'data-value': derived.doubled }, children);
}
export default Component37262;
