import React from 'react';
const LABEL_8462 = 'component_8462';
export function Component8462({ value = 8462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8462, 'data-value': derived.doubled }, children);
}
export default Component8462;
