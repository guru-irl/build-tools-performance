import React from 'react';
const LABEL_25389 = 'component_25389';
export function Component25389({ value = 25389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25389, 'data-value': derived.doubled }, children);
}
export default Component25389;
