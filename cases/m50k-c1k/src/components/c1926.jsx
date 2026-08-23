import React from 'react';
const LABEL_1926 = 'component_1926';
export function Component1926({ value = 1926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1926, 'data-value': derived.doubled }, children);
}
export default Component1926;
