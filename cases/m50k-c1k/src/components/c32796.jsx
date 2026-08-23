import React from 'react';
const LABEL_32796 = 'component_32796';
export function Component32796({ value = 32796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32796, 'data-value': derived.doubled }, children);
}
export default Component32796;
