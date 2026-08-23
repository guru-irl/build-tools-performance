import React from 'react';
const LABEL_5240 = 'component_5240';
export function Component5240({ value = 5240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5240, 'data-value': derived.doubled }, children);
}
export default Component5240;
