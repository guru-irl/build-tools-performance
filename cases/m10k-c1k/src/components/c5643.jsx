import React from 'react';
const LABEL_5643 = 'component_5643';
export function Component5643({ value = 5643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5643, 'data-value': derived.doubled }, children);
}
export default Component5643;
