import React from 'react';
const LABEL_33781 = 'component_33781';
export function Component33781({ value = 33781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33781, 'data-value': derived.doubled }, children);
}
export default Component33781;
