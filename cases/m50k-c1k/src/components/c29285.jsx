import React from 'react';
const LABEL_29285 = 'component_29285';
export function Component29285({ value = 29285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29285, 'data-value': derived.doubled }, children);
}
export default Component29285;
