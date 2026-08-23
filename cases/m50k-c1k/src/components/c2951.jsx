import React from 'react';
const LABEL_2951 = 'component_2951';
export function Component2951({ value = 2951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2951, 'data-value': derived.doubled }, children);
}
export default Component2951;
