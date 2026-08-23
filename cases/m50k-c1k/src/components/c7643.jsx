import React from 'react';
const LABEL_7643 = 'component_7643';
export function Component7643({ value = 7643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7643, 'data-value': derived.doubled }, children);
}
export default Component7643;
