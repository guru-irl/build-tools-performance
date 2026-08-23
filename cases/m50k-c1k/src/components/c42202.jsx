import React from 'react';
const LABEL_42202 = 'component_42202';
export function Component42202({ value = 42202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42202, 'data-value': derived.doubled }, children);
}
export default Component42202;
