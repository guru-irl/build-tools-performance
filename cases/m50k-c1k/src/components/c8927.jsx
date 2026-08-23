import React from 'react';
const LABEL_8927 = 'component_8927';
export function Component8927({ value = 8927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8927, 'data-value': derived.doubled }, children);
}
export default Component8927;
