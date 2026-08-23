import React from 'react';
const LABEL_42874 = 'component_42874';
export function Component42874({ value = 42874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42874, 'data-value': derived.doubled }, children);
}
export default Component42874;
