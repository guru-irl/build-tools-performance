import React from 'react';
const LABEL_19497 = 'component_19497';
export function Component19497({ value = 19497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19497, 'data-value': derived.doubled }, children);
}
export default Component19497;
