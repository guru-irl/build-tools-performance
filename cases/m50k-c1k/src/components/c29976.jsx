import React from 'react';
const LABEL_29976 = 'component_29976';
export function Component29976({ value = 29976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29976, 'data-value': derived.doubled }, children);
}
export default Component29976;
