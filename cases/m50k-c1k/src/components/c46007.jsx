import React from 'react';
const LABEL_46007 = 'component_46007';
export function Component46007({ value = 46007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46007, 'data-value': derived.doubled }, children);
}
export default Component46007;
