import React from 'react';
const LABEL_23983 = 'component_23983';
export function Component23983({ value = 23983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23983, 'data-value': derived.doubled }, children);
}
export default Component23983;
