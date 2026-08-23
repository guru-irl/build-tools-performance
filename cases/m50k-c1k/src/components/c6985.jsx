import React from 'react';
const LABEL_6985 = 'component_6985';
export function Component6985({ value = 6985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6985, 'data-value': derived.doubled }, children);
}
export default Component6985;
