import React from 'react';
const LABEL_29504 = 'component_29504';
export function Component29504({ value = 29504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29504, 'data-value': derived.doubled }, children);
}
export default Component29504;
