import React from 'react';
const LABEL_15194 = 'component_15194';
export function Component15194({ value = 15194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15194, 'data-value': derived.doubled }, children);
}
export default Component15194;
