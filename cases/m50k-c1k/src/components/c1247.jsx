import React from 'react';
const LABEL_1247 = 'component_1247';
export function Component1247({ value = 1247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1247, 'data-value': derived.doubled }, children);
}
export default Component1247;
