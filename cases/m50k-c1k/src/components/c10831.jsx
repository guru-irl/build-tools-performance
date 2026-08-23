import React from 'react';
const LABEL_10831 = 'component_10831';
export function Component10831({ value = 10831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10831, 'data-value': derived.doubled }, children);
}
export default Component10831;
