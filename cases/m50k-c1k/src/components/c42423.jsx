import React from 'react';
const LABEL_42423 = 'component_42423';
export function Component42423({ value = 42423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42423, 'data-value': derived.doubled }, children);
}
export default Component42423;
