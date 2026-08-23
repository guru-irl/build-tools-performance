import React from 'react';
const LABEL_27785 = 'component_27785';
export function Component27785({ value = 27785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27785, 'data-value': derived.doubled }, children);
}
export default Component27785;
