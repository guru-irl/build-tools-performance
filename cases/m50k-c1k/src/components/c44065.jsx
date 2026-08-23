import React from 'react';
const LABEL_44065 = 'component_44065';
export function Component44065({ value = 44065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44065, 'data-value': derived.doubled }, children);
}
export default Component44065;
