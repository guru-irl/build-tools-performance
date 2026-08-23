import React from 'react';
const LABEL_8785 = 'component_8785';
export function Component8785({ value = 8785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8785, 'data-value': derived.doubled }, children);
}
export default Component8785;
