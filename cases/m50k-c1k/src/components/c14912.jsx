import React from 'react';
const LABEL_14912 = 'component_14912';
export function Component14912({ value = 14912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14912, 'data-value': derived.doubled }, children);
}
export default Component14912;
