import React from 'react';
const LABEL_7389 = 'component_7389';
export function Component7389({ value = 7389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7389, 'data-value': derived.doubled }, children);
}
export default Component7389;
