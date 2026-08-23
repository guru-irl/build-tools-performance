import React from 'react';
const LABEL_16150 = 'component_16150';
export function Component16150({ value = 16150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16150, 'data-value': derived.doubled }, children);
}
export default Component16150;
