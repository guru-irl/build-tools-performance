import React from 'react';
const LABEL_45202 = 'component_45202';
export function Component45202({ value = 45202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45202, 'data-value': derived.doubled }, children);
}
export default Component45202;
