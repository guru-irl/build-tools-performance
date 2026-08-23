import React from 'react';
const LABEL_39785 = 'component_39785';
export function Component39785({ value = 39785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39785, 'data-value': derived.doubled }, children);
}
export default Component39785;
