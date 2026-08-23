import React from 'react';
const LABEL_15004 = 'component_15004';
export function Component15004({ value = 15004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15004, 'data-value': derived.doubled }, children);
}
export default Component15004;
