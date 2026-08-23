import React from 'react';
const LABEL_45874 = 'component_45874';
export function Component45874({ value = 45874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45874, 'data-value': derived.doubled }, children);
}
export default Component45874;
