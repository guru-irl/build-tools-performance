import React from 'react';
const LABEL_4874 = 'component_4874';
export function Component4874({ value = 4874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4874, 'data-value': derived.doubled }, children);
}
export default Component4874;
