import React from 'react';
const LABEL_33410 = 'component_33410';
export function Component33410({ value = 33410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33410, 'data-value': derived.doubled }, children);
}
export default Component33410;
