import React from 'react';
const LABEL_20983 = 'component_20983';
export function Component20983({ value = 20983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20983, 'data-value': derived.doubled }, children);
}
export default Component20983;
