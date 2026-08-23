import React from 'react';
const LABEL_42497 = 'component_42497';
export function Component42497({ value = 42497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42497, 'data-value': derived.doubled }, children);
}
export default Component42497;
