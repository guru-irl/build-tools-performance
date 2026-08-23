import React from 'react';
const LABEL_13000 = 'component_13000';
export function Component13000({ value = 13000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13000, 'data-value': derived.doubled }, children);
}
export default Component13000;
