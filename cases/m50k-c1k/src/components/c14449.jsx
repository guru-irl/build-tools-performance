import React from 'react';
const LABEL_14449 = 'component_14449';
export function Component14449({ value = 14449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14449, 'data-value': derived.doubled }, children);
}
export default Component14449;
