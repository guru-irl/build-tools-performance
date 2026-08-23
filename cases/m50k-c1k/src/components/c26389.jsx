import React from 'react';
const LABEL_26389 = 'component_26389';
export function Component26389({ value = 26389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26389, 'data-value': derived.doubled }, children);
}
export default Component26389;
