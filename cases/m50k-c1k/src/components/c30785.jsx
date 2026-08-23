import React from 'react';
const LABEL_30785 = 'component_30785';
export function Component30785({ value = 30785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30785, 'data-value': derived.doubled }, children);
}
export default Component30785;
