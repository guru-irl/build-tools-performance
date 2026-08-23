import React from 'react';
const LABEL_43893 = 'component_43893';
export function Component43893({ value = 43893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43893, 'data-value': derived.doubled }, children);
}
export default Component43893;
