import React from 'react';
const LABEL_18806 = 'component_18806';
export function Component18806({ value = 18806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18806, 'data-value': derived.doubled }, children);
}
export default Component18806;
