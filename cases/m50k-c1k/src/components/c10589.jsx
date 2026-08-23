import React from 'react';
const LABEL_10589 = 'component_10589';
export function Component10589({ value = 10589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10589, 'data-value': derived.doubled }, children);
}
export default Component10589;
