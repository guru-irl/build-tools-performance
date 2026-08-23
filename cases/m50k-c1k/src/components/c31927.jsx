import React from 'react';
const LABEL_31927 = 'component_31927';
export function Component31927({ value = 31927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31927, 'data-value': derived.doubled }, children);
}
export default Component31927;
