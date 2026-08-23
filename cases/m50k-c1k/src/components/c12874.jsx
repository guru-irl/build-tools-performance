import React from 'react';
const LABEL_12874 = 'component_12874';
export function Component12874({ value = 12874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12874, 'data-value': derived.doubled }, children);
}
export default Component12874;
