import React from 'react';
const LABEL_31874 = 'component_31874';
export function Component31874({ value = 31874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31874, 'data-value': derived.doubled }, children);
}
export default Component31874;
