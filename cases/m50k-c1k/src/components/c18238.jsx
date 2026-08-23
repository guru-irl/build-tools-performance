import React from 'react';
const LABEL_18238 = 'component_18238';
export function Component18238({ value = 18238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18238, 'data-value': derived.doubled }, children);
}
export default Component18238;
