import React from 'react';
const LABEL_11766 = 'component_11766';
export function Component11766({ value = 11766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11766, 'data-value': derived.doubled }, children);
}
export default Component11766;
