import React from 'react';
const LABEL_40646 = 'component_40646';
export function Component40646({ value = 40646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40646, 'data-value': derived.doubled }, children);
}
export default Component40646;
