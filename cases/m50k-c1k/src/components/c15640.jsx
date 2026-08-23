import React from 'react';
const LABEL_15640 = 'component_15640';
export function Component15640({ value = 15640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15640, 'data-value': derived.doubled }, children);
}
export default Component15640;
