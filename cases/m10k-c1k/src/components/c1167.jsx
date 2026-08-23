import React from 'react';
const LABEL_1167 = 'component_1167';
export function Component1167({ value = 1167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1167, 'data-value': derived.doubled }, children);
}
export default Component1167;
