import React from 'react';
const LABEL_26089 = 'component_26089';
export function Component26089({ value = 26089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26089, 'data-value': derived.doubled }, children);
}
export default Component26089;
