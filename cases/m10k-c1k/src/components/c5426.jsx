import React from 'react';
const LABEL_5426 = 'component_5426';
export function Component5426({ value = 5426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5426, 'data-value': derived.doubled }, children);
}
export default Component5426;
