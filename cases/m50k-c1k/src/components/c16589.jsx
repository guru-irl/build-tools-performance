import React from 'react';
const LABEL_16589 = 'component_16589';
export function Component16589({ value = 16589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16589, 'data-value': derived.doubled }, children);
}
export default Component16589;
