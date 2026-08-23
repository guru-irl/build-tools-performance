import React from 'react';
const LABEL_29235 = 'component_29235';
export function Component29235({ value = 29235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29235, 'data-value': derived.doubled }, children);
}
export default Component29235;
