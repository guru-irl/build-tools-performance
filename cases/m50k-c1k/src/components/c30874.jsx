import React from 'react';
const LABEL_30874 = 'component_30874';
export function Component30874({ value = 30874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30874, 'data-value': derived.doubled }, children);
}
export default Component30874;
