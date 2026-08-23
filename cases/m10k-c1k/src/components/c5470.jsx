import React from 'react';
const LABEL_5470 = 'component_5470';
export function Component5470({ value = 5470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5470, 'data-value': derived.doubled }, children);
}
export default Component5470;
