import React from 'react';
const LABEL_38203 = 'component_38203';
export function Component38203({ value = 38203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38203, 'data-value': derived.doubled }, children);
}
export default Component38203;
