import React from 'react';
const LABEL_14248 = 'component_14248';
export function Component14248({ value = 14248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14248, 'data-value': derived.doubled }, children);
}
export default Component14248;
