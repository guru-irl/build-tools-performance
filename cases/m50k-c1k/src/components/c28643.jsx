import React from 'react';
const LABEL_28643 = 'component_28643';
export function Component28643({ value = 28643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28643, 'data-value': derived.doubled }, children);
}
export default Component28643;
