import React from 'react';
const LABEL_17982 = 'component_17982';
export function Component17982({ value = 17982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17982, 'data-value': derived.doubled }, children);
}
export default Component17982;
