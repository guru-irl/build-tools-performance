import React from 'react';
const LABEL_13212 = 'component_13212';
export function Component13212({ value = 13212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13212, 'data-value': derived.doubled }, children);
}
export default Component13212;
