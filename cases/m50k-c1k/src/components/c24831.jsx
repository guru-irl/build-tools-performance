import React from 'react';
const LABEL_24831 = 'component_24831';
export function Component24831({ value = 24831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24831, 'data-value': derived.doubled }, children);
}
export default Component24831;
