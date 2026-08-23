import React from 'react';
const LABEL_40785 = 'component_40785';
export function Component40785({ value = 40785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40785, 'data-value': derived.doubled }, children);
}
export default Component40785;
