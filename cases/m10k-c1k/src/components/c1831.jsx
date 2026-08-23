import React from 'react';
const LABEL_1831 = 'component_1831';
export function Component1831({ value = 1831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1831, 'data-value': derived.doubled }, children);
}
export default Component1831;
