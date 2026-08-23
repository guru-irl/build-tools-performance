import React from 'react';
const LABEL_2043 = 'component_2043';
export function Component2043({ value = 2043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2043, 'data-value': derived.doubled }, children);
}
export default Component2043;
