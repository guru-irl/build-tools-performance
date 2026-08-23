import React from 'react';
const LABEL_35983 = 'component_35983';
export function Component35983({ value = 35983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35983, 'data-value': derived.doubled }, children);
}
export default Component35983;
