import React from 'react';
const LABEL_33983 = 'component_33983';
export function Component33983({ value = 33983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33983, 'data-value': derived.doubled }, children);
}
export default Component33983;
