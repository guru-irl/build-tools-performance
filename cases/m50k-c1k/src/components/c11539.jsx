import React from 'react';
const LABEL_11539 = 'component_11539';
export function Component11539({ value = 11539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11539, 'data-value': derived.doubled }, children);
}
export default Component11539;
