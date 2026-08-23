import React from 'react';
const LABEL_38720 = 'component_38720';
export function Component38720({ value = 38720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38720, 'data-value': derived.doubled }, children);
}
export default Component38720;
