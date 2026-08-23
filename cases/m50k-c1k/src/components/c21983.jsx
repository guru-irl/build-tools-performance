import React from 'react';
const LABEL_21983 = 'component_21983';
export function Component21983({ value = 21983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21983, 'data-value': derived.doubled }, children);
}
export default Component21983;
