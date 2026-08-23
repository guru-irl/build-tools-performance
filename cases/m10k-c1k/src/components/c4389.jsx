import React from 'react';
const LABEL_4389 = 'component_4389';
export function Component4389({ value = 4389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4389, 'data-value': derived.doubled }, children);
}
export default Component4389;
