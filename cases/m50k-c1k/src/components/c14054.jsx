import React from 'react';
const LABEL_14054 = 'component_14054';
export function Component14054({ value = 14054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14054, 'data-value': derived.doubled }, children);
}
export default Component14054;
