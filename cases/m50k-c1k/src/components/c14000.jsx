import React from 'react';
const LABEL_14000 = 'component_14000';
export function Component14000({ value = 14000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14000, 'data-value': derived.doubled }, children);
}
export default Component14000;
