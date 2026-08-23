import React from 'react';
const LABEL_14831 = 'component_14831';
export function Component14831({ value = 14831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14831, 'data-value': derived.doubled }, children);
}
export default Component14831;
