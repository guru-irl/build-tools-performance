import React from 'react';
const LABEL_42927 = 'component_42927';
export function Component42927({ value = 42927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42927, 'data-value': derived.doubled }, children);
}
export default Component42927;
