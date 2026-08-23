import React from 'react';
const LABEL_24941 = 'component_24941';
export function Component24941({ value = 24941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24941, 'data-value': derived.doubled }, children);
}
export default Component24941;
