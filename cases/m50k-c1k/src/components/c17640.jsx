import React from 'react';
const LABEL_17640 = 'component_17640';
export function Component17640({ value = 17640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17640, 'data-value': derived.doubled }, children);
}
export default Component17640;
