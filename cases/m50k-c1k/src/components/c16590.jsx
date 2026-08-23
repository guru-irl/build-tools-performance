import React from 'react';
const LABEL_16590 = 'component_16590';
export function Component16590({ value = 16590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16590, 'data-value': derived.doubled }, children);
}
export default Component16590;
