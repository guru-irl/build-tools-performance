import React from 'react';
const LABEL_11858 = 'component_11858';
export function Component11858({ value = 11858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11858, 'data-value': derived.doubled }, children);
}
export default Component11858;
