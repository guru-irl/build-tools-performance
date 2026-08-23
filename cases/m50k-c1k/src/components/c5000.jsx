import React from 'react';
const LABEL_5000 = 'component_5000';
export function Component5000({ value = 5000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5000, 'data-value': derived.doubled }, children);
}
export default Component5000;
