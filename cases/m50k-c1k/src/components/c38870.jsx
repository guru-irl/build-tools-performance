import React from 'react';
const LABEL_38870 = 'component_38870';
export function Component38870({ value = 38870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38870, 'data-value': derived.doubled }, children);
}
export default Component38870;
