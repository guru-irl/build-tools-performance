import React from 'react';
const LABEL_13927 = 'component_13927';
export function Component13927({ value = 13927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13927, 'data-value': derived.doubled }, children);
}
export default Component13927;
