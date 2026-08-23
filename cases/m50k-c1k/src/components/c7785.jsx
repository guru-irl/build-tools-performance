import React from 'react';
const LABEL_7785 = 'component_7785';
export function Component7785({ value = 7785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7785, 'data-value': derived.doubled }, children);
}
export default Component7785;
