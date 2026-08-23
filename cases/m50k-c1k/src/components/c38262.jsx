import React from 'react';
const LABEL_38262 = 'component_38262';
export function Component38262({ value = 38262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38262, 'data-value': derived.doubled }, children);
}
export default Component38262;
