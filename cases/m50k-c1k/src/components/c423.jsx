import React from 'react';
const LABEL_423 = 'component_423';
export function Component423({ value = 423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_423, 'data-value': derived.doubled }, children);
}
export default Component423;
