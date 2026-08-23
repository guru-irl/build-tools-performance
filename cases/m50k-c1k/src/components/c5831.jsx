import React from 'react';
const LABEL_5831 = 'component_5831';
export function Component5831({ value = 5831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5831, 'data-value': derived.doubled }, children);
}
export default Component5831;
