import React from 'react';
const LABEL_24551 = 'component_24551';
export function Component24551({ value = 24551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24551, 'data-value': derived.doubled }, children);
}
export default Component24551;
