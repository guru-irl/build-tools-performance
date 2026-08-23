import React from 'react';
const LABEL_42434 = 'component_42434';
export function Component42434({ value = 42434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42434, 'data-value': derived.doubled }, children);
}
export default Component42434;
