import React from 'react';
const LABEL_8924 = 'component_8924';
export function Component8924({ value = 8924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8924, 'data-value': derived.doubled }, children);
}
export default Component8924;
