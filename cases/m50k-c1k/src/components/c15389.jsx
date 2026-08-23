import React from 'react';
const LABEL_15389 = 'component_15389';
export function Component15389({ value = 15389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15389, 'data-value': derived.doubled }, children);
}
export default Component15389;
