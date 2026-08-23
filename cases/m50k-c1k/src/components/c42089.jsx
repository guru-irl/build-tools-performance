import React from 'react';
const LABEL_42089 = 'component_42089';
export function Component42089({ value = 42089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42089, 'data-value': derived.doubled }, children);
}
export default Component42089;
