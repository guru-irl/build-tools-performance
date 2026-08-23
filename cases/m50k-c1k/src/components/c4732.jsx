import React from 'react';
const LABEL_4732 = 'component_4732';
export function Component4732({ value = 4732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4732, 'data-value': derived.doubled }, children);
}
export default Component4732;
