import React from 'react';
const LABEL_14134 = 'component_14134';
export function Component14134({ value = 14134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14134, 'data-value': derived.doubled }, children);
}
export default Component14134;
