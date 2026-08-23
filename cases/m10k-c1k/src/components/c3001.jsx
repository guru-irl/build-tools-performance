import React from 'react';
const LABEL_3001 = 'component_3001';
export function Component3001({ value = 3001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3001, 'data-value': derived.doubled }, children);
}
export default Component3001;
