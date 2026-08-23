import React from 'react';
const LABEL_43165 = 'component_43165';
export function Component43165({ value = 43165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43165, 'data-value': derived.doubled }, children);
}
export default Component43165;
