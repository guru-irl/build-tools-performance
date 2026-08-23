import React from 'react';
const LABEL_38825 = 'component_38825';
export function Component38825({ value = 38825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38825, 'data-value': derived.doubled }, children);
}
export default Component38825;
