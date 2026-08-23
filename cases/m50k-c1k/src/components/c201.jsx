import React from 'react';
const LABEL_201 = 'component_201';
export function Component201({ value = 201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_201, 'data-value': derived.doubled }, children);
}
export default Component201;
