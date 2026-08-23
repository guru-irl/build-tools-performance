import React from 'react';
const LABEL_14983 = 'component_14983';
export function Component14983({ value = 14983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14983, 'data-value': derived.doubled }, children);
}
export default Component14983;
