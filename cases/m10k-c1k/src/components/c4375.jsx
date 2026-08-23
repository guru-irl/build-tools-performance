import React from 'react';
const LABEL_4375 = 'component_4375';
export function Component4375({ value = 4375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4375, 'data-value': derived.doubled }, children);
}
export default Component4375;
