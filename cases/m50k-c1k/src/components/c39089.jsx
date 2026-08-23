import React from 'react';
const LABEL_39089 = 'component_39089';
export function Component39089({ value = 39089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39089, 'data-value': derived.doubled }, children);
}
export default Component39089;
