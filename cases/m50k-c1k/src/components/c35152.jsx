import React from 'react';
const LABEL_35152 = 'component_35152';
export function Component35152({ value = 35152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35152, 'data-value': derived.doubled }, children);
}
export default Component35152;
