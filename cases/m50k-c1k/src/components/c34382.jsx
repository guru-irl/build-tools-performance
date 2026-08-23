import React from 'react';
const LABEL_34382 = 'component_34382';
export function Component34382({ value = 34382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34382, 'data-value': derived.doubled }, children);
}
export default Component34382;
