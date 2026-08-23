import React from 'react';
const LABEL_45646 = 'component_45646';
export function Component45646({ value = 45646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45646, 'data-value': derived.doubled }, children);
}
export default Component45646;
