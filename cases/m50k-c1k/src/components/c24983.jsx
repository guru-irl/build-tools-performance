import React from 'react';
const LABEL_24983 = 'component_24983';
export function Component24983({ value = 24983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24983, 'data-value': derived.doubled }, children);
}
export default Component24983;
