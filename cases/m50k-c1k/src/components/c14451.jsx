import React from 'react';
const LABEL_14451 = 'component_14451';
export function Component14451({ value = 14451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14451, 'data-value': derived.doubled }, children);
}
export default Component14451;
