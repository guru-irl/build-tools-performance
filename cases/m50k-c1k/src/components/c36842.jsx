import React from 'react';
const LABEL_36842 = 'component_36842';
export function Component36842({ value = 36842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36842, 'data-value': derived.doubled }, children);
}
export default Component36842;
