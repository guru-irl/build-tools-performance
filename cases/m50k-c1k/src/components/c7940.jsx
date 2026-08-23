import React from 'react';
const LABEL_7940 = 'component_7940';
export function Component7940({ value = 7940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7940, 'data-value': derived.doubled }, children);
}
export default Component7940;
