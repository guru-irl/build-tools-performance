import React from 'react';
const LABEL_14383 = 'component_14383';
export function Component14383({ value = 14383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14383, 'data-value': derived.doubled }, children);
}
export default Component14383;
