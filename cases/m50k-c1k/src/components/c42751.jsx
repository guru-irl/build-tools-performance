import React from 'react';
const LABEL_42751 = 'component_42751';
export function Component42751({ value = 42751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42751, 'data-value': derived.doubled }, children);
}
export default Component42751;
