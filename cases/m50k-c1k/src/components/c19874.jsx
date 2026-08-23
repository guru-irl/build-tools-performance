import React from 'react';
const LABEL_19874 = 'component_19874';
export function Component19874({ value = 19874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19874, 'data-value': derived.doubled }, children);
}
export default Component19874;
