import React from 'react';
const LABEL_32643 = 'component_32643';
export function Component32643({ value = 32643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32643, 'data-value': derived.doubled }, children);
}
export default Component32643;
