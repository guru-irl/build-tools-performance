import React from 'react';
const LABEL_29551 = 'component_29551';
export function Component29551({ value = 29551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29551, 'data-value': derived.doubled }, children);
}
export default Component29551;
