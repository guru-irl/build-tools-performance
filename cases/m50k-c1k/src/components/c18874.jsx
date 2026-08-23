import React from 'react';
const LABEL_18874 = 'component_18874';
export function Component18874({ value = 18874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18874, 'data-value': derived.doubled }, children);
}
export default Component18874;
