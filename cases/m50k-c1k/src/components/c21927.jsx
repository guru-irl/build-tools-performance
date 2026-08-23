import React from 'react';
const LABEL_21927 = 'component_21927';
export function Component21927({ value = 21927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21927, 'data-value': derived.doubled }, children);
}
export default Component21927;
