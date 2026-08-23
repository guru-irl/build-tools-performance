import React from 'react';
const LABEL_45121 = 'component_45121';
export function Component45121({ value = 45121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45121, 'data-value': derived.doubled }, children);
}
export default Component45121;
