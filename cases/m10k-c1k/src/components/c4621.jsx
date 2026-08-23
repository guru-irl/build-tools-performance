import React from 'react';
const LABEL_4621 = 'component_4621';
export function Component4621({ value = 4621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4621, 'data-value': derived.doubled }, children);
}
export default Component4621;
