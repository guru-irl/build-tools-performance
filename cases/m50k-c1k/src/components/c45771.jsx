import React from 'react';
const LABEL_45771 = 'component_45771';
export function Component45771({ value = 45771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45771, 'data-value': derived.doubled }, children);
}
export default Component45771;
