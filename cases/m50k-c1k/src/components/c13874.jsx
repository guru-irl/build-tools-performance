import React from 'react';
const LABEL_13874 = 'component_13874';
export function Component13874({ value = 13874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13874, 'data-value': derived.doubled }, children);
}
export default Component13874;
