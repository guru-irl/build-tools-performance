import React from 'react';
const LABEL_38291 = 'component_38291';
export function Component38291({ value = 38291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38291, 'data-value': derived.doubled }, children);
}
export default Component38291;
