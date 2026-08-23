import React from 'react';
const LABEL_21785 = 'component_21785';
export function Component21785({ value = 21785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21785, 'data-value': derived.doubled }, children);
}
export default Component21785;
