import React from 'react';
const LABEL_16831 = 'component_16831';
export function Component16831({ value = 16831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16831, 'data-value': derived.doubled }, children);
}
export default Component16831;
