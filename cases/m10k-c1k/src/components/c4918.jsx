import React from 'react';
const LABEL_4918 = 'component_4918';
export function Component4918({ value = 4918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4918, 'data-value': derived.doubled }, children);
}
export default Component4918;
