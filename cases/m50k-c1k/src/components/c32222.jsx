import React from 'react';
const LABEL_32222 = 'component_32222';
export function Component32222({ value = 32222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32222, 'data-value': derived.doubled }, children);
}
export default Component32222;
