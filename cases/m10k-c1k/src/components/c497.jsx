import React from 'react';
const LABEL_497 = 'component_497';
export function Component497({ value = 497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_497, 'data-value': derived.doubled }, children);
}
export default Component497;
