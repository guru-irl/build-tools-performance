import React from 'react';
const LABEL_5983 = 'component_5983';
export function Component5983({ value = 5983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5983, 'data-value': derived.doubled }, children);
}
export default Component5983;
