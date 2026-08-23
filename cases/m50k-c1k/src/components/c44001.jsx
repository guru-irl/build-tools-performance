import React from 'react';
const LABEL_44001 = 'component_44001';
export function Component44001({ value = 44001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44001, 'data-value': derived.doubled }, children);
}
export default Component44001;
