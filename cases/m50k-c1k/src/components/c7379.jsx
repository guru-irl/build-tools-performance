import React from 'react';
const LABEL_7379 = 'component_7379';
export function Component7379({ value = 7379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7379, 'data-value': derived.doubled }, children);
}
export default Component7379;
