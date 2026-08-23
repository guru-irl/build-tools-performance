import React from 'react';
const LABEL_16510 = 'component_16510';
export function Component16510({ value = 16510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16510, 'data-value': derived.doubled }, children);
}
export default Component16510;
