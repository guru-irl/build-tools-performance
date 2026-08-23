import React from 'react';
const LABEL_10214 = 'component_10214';
export function Component10214({ value = 10214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10214, 'data-value': derived.doubled }, children);
}
export default Component10214;
