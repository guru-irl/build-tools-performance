import React from 'react';
const LABEL_17643 = 'component_17643';
export function Component17643({ value = 17643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17643, 'data-value': derived.doubled }, children);
}
export default Component17643;
