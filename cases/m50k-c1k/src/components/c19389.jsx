import React from 'react';
const LABEL_19389 = 'component_19389';
export function Component19389({ value = 19389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19389, 'data-value': derived.doubled }, children);
}
export default Component19389;
