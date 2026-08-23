import React from 'react';
const LABEL_12983 = 'component_12983';
export function Component12983({ value = 12983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12983, 'data-value': derived.doubled }, children);
}
export default Component12983;
