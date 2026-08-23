import React from 'react';
const LABEL_38526 = 'component_38526';
export function Component38526({ value = 38526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38526, 'data-value': derived.doubled }, children);
}
export default Component38526;
