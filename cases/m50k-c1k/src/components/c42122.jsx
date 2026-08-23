import React from 'react';
const LABEL_42122 = 'component_42122';
export function Component42122({ value = 42122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42122, 'data-value': derived.doubled }, children);
}
export default Component42122;
