import React from 'react';
const LABEL_7951 = 'component_7951';
export function Component7951({ value = 7951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7951, 'data-value': derived.doubled }, children);
}
export default Component7951;
