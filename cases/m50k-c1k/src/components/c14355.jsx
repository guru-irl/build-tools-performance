import React from 'react';
const LABEL_14355 = 'component_14355';
export function Component14355({ value = 14355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14355, 'data-value': derived.doubled }, children);
}
export default Component14355;
