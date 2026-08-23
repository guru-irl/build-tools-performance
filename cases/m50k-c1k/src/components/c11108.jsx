import React from 'react';
const LABEL_11108 = 'component_11108';
export function Component11108({ value = 11108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11108, 'data-value': derived.doubled }, children);
}
export default Component11108;
