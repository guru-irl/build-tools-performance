import React from 'react';
const LABEL_31856 = 'component_31856';
export function Component31856({ value = 31856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31856, 'data-value': derived.doubled }, children);
}
export default Component31856;
