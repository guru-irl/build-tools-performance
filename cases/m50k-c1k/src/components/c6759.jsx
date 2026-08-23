import React from 'react';
const LABEL_6759 = 'component_6759';
export function Component6759({ value = 6759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6759, 'data-value': derived.doubled }, children);
}
export default Component6759;
