import React from 'react';
const LABEL_45382 = 'component_45382';
export function Component45382({ value = 45382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45382, 'data-value': derived.doubled }, children);
}
export default Component45382;
