import React from 'react';
const LABEL_27834 = 'component_27834';
export function Component27834({ value = 27834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27834, 'data-value': derived.doubled }, children);
}
export default Component27834;
