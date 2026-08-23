import React from 'react';
const LABEL_5542 = 'component_5542';
export function Component5542({ value = 5542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5542, 'data-value': derived.doubled }, children);
}
export default Component5542;
