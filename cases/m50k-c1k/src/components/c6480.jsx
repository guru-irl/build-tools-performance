import React from 'react';
const LABEL_6480 = 'component_6480';
export function Component6480({ value = 6480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6480, 'data-value': derived.doubled }, children);
}
export default Component6480;
