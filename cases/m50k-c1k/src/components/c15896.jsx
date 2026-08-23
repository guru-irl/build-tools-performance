import React from 'react';
const LABEL_15896 = 'component_15896';
export function Component15896({ value = 15896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15896, 'data-value': derived.doubled }, children);
}
export default Component15896;
