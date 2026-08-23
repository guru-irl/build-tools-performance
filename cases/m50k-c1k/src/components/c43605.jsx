import React from 'react';
const LABEL_43605 = 'component_43605';
export function Component43605({ value = 43605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43605, 'data-value': derived.doubled }, children);
}
export default Component43605;
