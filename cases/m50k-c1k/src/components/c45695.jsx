import React from 'react';
const LABEL_45695 = 'component_45695';
export function Component45695({ value = 45695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45695, 'data-value': derived.doubled }, children);
}
export default Component45695;
