import React from 'react';
const LABEL_12927 = 'component_12927';
export function Component12927({ value = 12927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12927, 'data-value': derived.doubled }, children);
}
export default Component12927;
