import React from 'react';
const LABEL_46 = 'component_46';
export function Component46({ value = 46, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46, 'data-value': derived.doubled }, children);
}
export default Component46;
