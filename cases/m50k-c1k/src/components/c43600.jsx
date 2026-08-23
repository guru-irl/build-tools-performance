import React from 'react';
const LABEL_43600 = 'component_43600';
export function Component43600({ value = 43600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43600, 'data-value': derived.doubled }, children);
}
export default Component43600;
