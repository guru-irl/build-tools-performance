import React from 'react';
const LABEL_14643 = 'component_14643';
export function Component14643({ value = 14643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14643, 'data-value': derived.doubled }, children);
}
export default Component14643;
