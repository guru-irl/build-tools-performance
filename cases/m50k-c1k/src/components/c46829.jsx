import React from 'react';
const LABEL_46829 = 'component_46829';
export function Component46829({ value = 46829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46829, 'data-value': derived.doubled }, children);
}
export default Component46829;
