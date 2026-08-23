import React from 'react';
const LABEL_15983 = 'component_15983';
export function Component15983({ value = 15983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15983, 'data-value': derived.doubled }, children);
}
export default Component15983;
