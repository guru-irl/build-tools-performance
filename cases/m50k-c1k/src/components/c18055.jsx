import React from 'react';
const LABEL_18055 = 'component_18055';
export function Component18055({ value = 18055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18055, 'data-value': derived.doubled }, children);
}
export default Component18055;
