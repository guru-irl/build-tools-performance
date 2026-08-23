import React from 'react';
const LABEL_6983 = 'component_6983';
export function Component6983({ value = 6983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6983, 'data-value': derived.doubled }, children);
}
export default Component6983;
