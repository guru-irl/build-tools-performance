import React from 'react';
const LABEL_1853 = 'component_1853';
export function Component1853({ value = 1853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1853, 'data-value': derived.doubled }, children);
}
export default Component1853;
