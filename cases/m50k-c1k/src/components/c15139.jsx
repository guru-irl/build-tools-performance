import React from 'react';
const LABEL_15139 = 'component_15139';
export function Component15139({ value = 15139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15139, 'data-value': derived.doubled }, children);
}
export default Component15139;
