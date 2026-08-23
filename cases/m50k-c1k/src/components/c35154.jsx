import React from 'react';
const LABEL_35154 = 'component_35154';
export function Component35154({ value = 35154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35154, 'data-value': derived.doubled }, children);
}
export default Component35154;
