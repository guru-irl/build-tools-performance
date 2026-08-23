import React from 'react';
const LABEL_7874 = 'component_7874';
export function Component7874({ value = 7874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7874, 'data-value': derived.doubled }, children);
}
export default Component7874;
