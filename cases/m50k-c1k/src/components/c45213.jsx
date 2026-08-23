import React from 'react';
const LABEL_45213 = 'component_45213';
export function Component45213({ value = 45213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45213, 'data-value': derived.doubled }, children);
}
export default Component45213;
