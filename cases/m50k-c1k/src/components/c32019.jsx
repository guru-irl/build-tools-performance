import React from 'react';
const LABEL_32019 = 'component_32019';
export function Component32019({ value = 32019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32019, 'data-value': derived.doubled }, children);
}
export default Component32019;
