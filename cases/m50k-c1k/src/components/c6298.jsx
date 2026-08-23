import React from 'react';
const LABEL_6298 = 'component_6298';
export function Component6298({ value = 6298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6298, 'data-value': derived.doubled }, children);
}
export default Component6298;
