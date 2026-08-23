import React from 'react';
const LABEL_6569 = 'component_6569';
export function Component6569({ value = 6569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6569, 'data-value': derived.doubled }, children);
}
export default Component6569;
