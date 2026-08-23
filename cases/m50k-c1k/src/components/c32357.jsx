import React from 'react';
const LABEL_32357 = 'component_32357';
export function Component32357({ value = 32357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32357, 'data-value': derived.doubled }, children);
}
export default Component32357;
