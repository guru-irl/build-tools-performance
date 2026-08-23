import React from 'react';
const LABEL_24893 = 'component_24893';
export function Component24893({ value = 24893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24893, 'data-value': derived.doubled }, children);
}
export default Component24893;
