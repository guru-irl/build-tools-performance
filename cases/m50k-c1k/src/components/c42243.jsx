import React from 'react';
const LABEL_42243 = 'component_42243';
export function Component42243({ value = 42243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42243, 'data-value': derived.doubled }, children);
}
export default Component42243;
