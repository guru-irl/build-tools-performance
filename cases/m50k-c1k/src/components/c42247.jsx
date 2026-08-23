import React from 'react';
const LABEL_42247 = 'component_42247';
export function Component42247({ value = 42247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42247, 'data-value': derived.doubled }, children);
}
export default Component42247;
