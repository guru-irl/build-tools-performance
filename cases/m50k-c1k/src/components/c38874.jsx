import React from 'react';
const LABEL_38874 = 'component_38874';
export function Component38874({ value = 38874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38874, 'data-value': derived.doubled }, children);
}
export default Component38874;
