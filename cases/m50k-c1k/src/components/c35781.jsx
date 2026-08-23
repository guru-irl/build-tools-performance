import React from 'react';
const LABEL_35781 = 'component_35781';
export function Component35781({ value = 35781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35781, 'data-value': derived.doubled }, children);
}
export default Component35781;
