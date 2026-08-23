import React from 'react';
const LABEL_18298 = 'component_18298';
export function Component18298({ value = 18298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18298, 'data-value': derived.doubled }, children);
}
export default Component18298;
