import React from 'react';
const LABEL_12831 = 'component_12831';
export function Component12831({ value = 12831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12831, 'data-value': derived.doubled }, children);
}
export default Component12831;
