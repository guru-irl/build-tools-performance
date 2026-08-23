import React from 'react';
const LABEL_6089 = 'component_6089';
export function Component6089({ value = 6089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6089, 'data-value': derived.doubled }, children);
}
export default Component6089;
