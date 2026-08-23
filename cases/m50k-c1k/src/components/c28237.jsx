import React from 'react';
const LABEL_28237 = 'component_28237';
export function Component28237({ value = 28237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28237, 'data-value': derived.doubled }, children);
}
export default Component28237;
