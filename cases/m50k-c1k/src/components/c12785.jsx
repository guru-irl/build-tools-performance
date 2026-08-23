import React from 'react';
const LABEL_12785 = 'component_12785';
export function Component12785({ value = 12785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12785, 'data-value': derived.doubled }, children);
}
export default Component12785;
