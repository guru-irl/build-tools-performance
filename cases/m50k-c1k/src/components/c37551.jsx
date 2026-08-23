import React from 'react';
const LABEL_37551 = 'component_37551';
export function Component37551({ value = 37551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37551, 'data-value': derived.doubled }, children);
}
export default Component37551;
