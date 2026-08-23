import React from 'react';
const LABEL_784 = 'component_784';
export function Component784({ value = 784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_784, 'data-value': derived.doubled }, children);
}
export default Component784;
