import React from 'react';
const LABEL_29856 = 'component_29856';
export function Component29856({ value = 29856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29856, 'data-value': derived.doubled }, children);
}
export default Component29856;
