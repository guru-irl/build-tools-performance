import React from 'react';
const LABEL_11874 = 'component_11874';
export function Component11874({ value = 11874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11874, 'data-value': derived.doubled }, children);
}
export default Component11874;
