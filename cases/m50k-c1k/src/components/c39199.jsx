import React from 'react';
const LABEL_39199 = 'component_39199';
export function Component39199({ value = 39199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39199, 'data-value': derived.doubled }, children);
}
export default Component39199;
