import React from 'react';
const LABEL_20194 = 'component_20194';
export function Component20194({ value = 20194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20194, 'data-value': derived.doubled }, children);
}
export default Component20194;
