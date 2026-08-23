import React from 'react';
const LABEL_36262 = 'component_36262';
export function Component36262({ value = 36262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36262, 'data-value': derived.doubled }, children);
}
export default Component36262;
