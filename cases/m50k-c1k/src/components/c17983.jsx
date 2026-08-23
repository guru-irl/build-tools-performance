import React from 'react';
const LABEL_17983 = 'component_17983';
export function Component17983({ value = 17983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17983, 'data-value': derived.doubled }, children);
}
export default Component17983;
