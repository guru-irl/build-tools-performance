import React from 'react';
const LABEL_21612 = 'component_21612';
export function Component21612({ value = 21612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21612, 'data-value': derived.doubled }, children);
}
export default Component21612;
