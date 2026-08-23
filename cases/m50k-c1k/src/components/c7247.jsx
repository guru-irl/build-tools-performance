import React from 'react';
const LABEL_7247 = 'component_7247';
export function Component7247({ value = 7247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7247, 'data-value': derived.doubled }, children);
}
export default Component7247;
