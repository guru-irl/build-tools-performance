import React from 'react';
const LABEL_983 = 'component_983';
export function Component983({ value = 983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_983, 'data-value': derived.doubled }, children);
}
export default Component983;
