import React from 'react';
const LABEL_29089 = 'component_29089';
export function Component29089({ value = 29089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29089, 'data-value': derived.doubled }, children);
}
export default Component29089;
