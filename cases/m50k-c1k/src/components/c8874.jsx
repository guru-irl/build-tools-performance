import React from 'react';
const LABEL_8874 = 'component_8874';
export function Component8874({ value = 8874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8874, 'data-value': derived.doubled }, children);
}
export default Component8874;
