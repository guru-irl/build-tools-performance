import React from 'react';
const LABEL_20044 = 'component_20044';
export function Component20044({ value = 20044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20044, 'data-value': derived.doubled }, children);
}
export default Component20044;
