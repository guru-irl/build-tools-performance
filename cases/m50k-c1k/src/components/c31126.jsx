import React from 'react';
const LABEL_31126 = 'component_31126';
export function Component31126({ value = 31126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31126, 'data-value': derived.doubled }, children);
}
export default Component31126;
