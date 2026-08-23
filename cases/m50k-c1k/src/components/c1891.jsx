import React from 'react';
const LABEL_1891 = 'component_1891';
export function Component1891({ value = 1891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1891, 'data-value': derived.doubled }, children);
}
export default Component1891;
