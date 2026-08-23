import React from 'react';
const LABEL_25089 = 'component_25089';
export function Component25089({ value = 25089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25089, 'data-value': derived.doubled }, children);
}
export default Component25089;
