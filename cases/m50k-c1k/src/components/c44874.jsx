import React from 'react';
const LABEL_44874 = 'component_44874';
export function Component44874({ value = 44874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44874, 'data-value': derived.doubled }, children);
}
export default Component44874;
