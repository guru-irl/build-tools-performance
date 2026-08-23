import React from 'react';
const LABEL_45610 = 'component_45610';
export function Component45610({ value = 45610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45610, 'data-value': derived.doubled }, children);
}
export default Component45610;
