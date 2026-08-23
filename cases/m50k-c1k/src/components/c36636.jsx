import React from 'react';
const LABEL_36636 = 'component_36636';
export function Component36636({ value = 36636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36636, 'data-value': derived.doubled }, children);
}
export default Component36636;
