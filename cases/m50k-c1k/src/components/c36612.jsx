import React from 'react';
const LABEL_36612 = 'component_36612';
export function Component36612({ value = 36612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36612, 'data-value': derived.doubled }, children);
}
export default Component36612;
