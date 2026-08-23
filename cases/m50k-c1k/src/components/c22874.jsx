import React from 'react';
const LABEL_22874 = 'component_22874';
export function Component22874({ value = 22874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22874, 'data-value': derived.doubled }, children);
}
export default Component22874;
