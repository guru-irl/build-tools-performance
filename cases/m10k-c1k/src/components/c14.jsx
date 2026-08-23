import React from 'react';
const LABEL_14 = 'component_14';
export function Component14({ value = 14, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14, 'data-value': derived.doubled }, children);
}
export default Component14;
