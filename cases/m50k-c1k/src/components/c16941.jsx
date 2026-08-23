import React from 'react';
const LABEL_16941 = 'component_16941';
export function Component16941({ value = 16941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16941, 'data-value': derived.doubled }, children);
}
export default Component16941;
