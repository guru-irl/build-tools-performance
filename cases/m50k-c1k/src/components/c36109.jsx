import React from 'react';
const LABEL_36109 = 'component_36109';
export function Component36109({ value = 36109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36109, 'data-value': derived.doubled }, children);
}
export default Component36109;
