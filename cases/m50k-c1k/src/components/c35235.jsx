import React from 'react';
const LABEL_35235 = 'component_35235';
export function Component35235({ value = 35235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35235, 'data-value': derived.doubled }, children);
}
export default Component35235;
