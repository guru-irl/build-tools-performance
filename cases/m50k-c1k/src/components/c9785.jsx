import React from 'react';
const LABEL_9785 = 'component_9785';
export function Component9785({ value = 9785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9785, 'data-value': derived.doubled }, children);
}
export default Component9785;
