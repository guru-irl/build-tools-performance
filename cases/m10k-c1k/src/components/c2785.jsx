import React from 'react';
const LABEL_2785 = 'component_2785';
export function Component2785({ value = 2785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2785, 'data-value': derived.doubled }, children);
}
export default Component2785;
