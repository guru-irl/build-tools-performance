import React from 'react';
const LABEL_18426 = 'component_18426';
export function Component18426({ value = 18426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18426, 'data-value': derived.doubled }, children);
}
export default Component18426;
