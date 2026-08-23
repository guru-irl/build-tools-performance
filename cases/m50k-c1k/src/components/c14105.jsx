import React from 'react';
const LABEL_14105 = 'component_14105';
export function Component14105({ value = 14105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14105, 'data-value': derived.doubled }, children);
}
export default Component14105;
