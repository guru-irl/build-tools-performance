import React from 'react';
const LABEL_10299 = 'component_10299';
export function Component10299({ value = 10299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10299, 'data-value': derived.doubled }, children);
}
export default Component10299;
