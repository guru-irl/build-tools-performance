import React from 'react';
const LABEL_36516 = 'component_36516';
export function Component36516({ value = 36516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36516, 'data-value': derived.doubled }, children);
}
export default Component36516;
