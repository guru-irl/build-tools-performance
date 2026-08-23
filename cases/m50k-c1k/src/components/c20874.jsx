import React from 'react';
const LABEL_20874 = 'component_20874';
export function Component20874({ value = 20874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20874, 'data-value': derived.doubled }, children);
}
export default Component20874;
