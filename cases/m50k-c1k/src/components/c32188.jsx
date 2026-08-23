import React from 'react';
const LABEL_32188 = 'component_32188';
export function Component32188({ value = 32188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32188, 'data-value': derived.doubled }, children);
}
export default Component32188;
