import React from 'react';
const LABEL_31646 = 'component_31646';
export function Component31646({ value = 31646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31646, 'data-value': derived.doubled }, children);
}
export default Component31646;
