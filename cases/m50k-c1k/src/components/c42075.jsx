import React from 'react';
const LABEL_42075 = 'component_42075';
export function Component42075({ value = 42075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42075, 'data-value': derived.doubled }, children);
}
export default Component42075;
