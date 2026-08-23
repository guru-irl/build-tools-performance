import React from 'react';
const LABEL_46590 = 'component_46590';
export function Component46590({ value = 46590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46590, 'data-value': derived.doubled }, children);
}
export default Component46590;
