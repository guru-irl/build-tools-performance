import React from 'react';
const LABEL_36518 = 'component_36518';
export function Component36518({ value = 36518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36518, 'data-value': derived.doubled }, children);
}
export default Component36518;
