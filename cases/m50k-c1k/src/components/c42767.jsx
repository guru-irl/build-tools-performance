import React from 'react';
const LABEL_42767 = 'component_42767';
export function Component42767({ value = 42767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42767, 'data-value': derived.doubled }, children);
}
export default Component42767;
