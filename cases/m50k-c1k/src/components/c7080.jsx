import React from 'react';
const LABEL_7080 = 'component_7080';
export function Component7080({ value = 7080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7080, 'data-value': derived.doubled }, children);
}
export default Component7080;
