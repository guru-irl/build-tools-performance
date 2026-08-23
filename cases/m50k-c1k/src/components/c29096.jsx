import React from 'react';
const LABEL_29096 = 'component_29096';
export function Component29096({ value = 29096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29096, 'data-value': derived.doubled }, children);
}
export default Component29096;
