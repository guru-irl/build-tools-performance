import React from 'react';
const LABEL_35874 = 'component_35874';
export function Component35874({ value = 35874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35874, 'data-value': derived.doubled }, children);
}
export default Component35874;
