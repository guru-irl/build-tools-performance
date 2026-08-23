import React from 'react';
const LABEL_14785 = 'component_14785';
export function Component14785({ value = 14785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14785, 'data-value': derived.doubled }, children);
}
export default Component14785;
