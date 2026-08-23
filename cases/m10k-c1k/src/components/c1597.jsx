import React from 'react';
const LABEL_1597 = 'component_1597';
export function Component1597({ value = 1597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1597, 'data-value': derived.doubled }, children);
}
export default Component1597;
