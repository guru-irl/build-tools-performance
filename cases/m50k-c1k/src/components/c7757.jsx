import React from 'react';
const LABEL_7757 = 'component_7757';
export function Component7757({ value = 7757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7757, 'data-value': derived.doubled }, children);
}
export default Component7757;
