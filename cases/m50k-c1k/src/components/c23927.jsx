import React from 'react';
const LABEL_23927 = 'component_23927';
export function Component23927({ value = 23927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23927, 'data-value': derived.doubled }, children);
}
export default Component23927;
