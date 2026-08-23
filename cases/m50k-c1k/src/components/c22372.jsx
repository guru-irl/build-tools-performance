import React from 'react';
const LABEL_22372 = 'component_22372';
export function Component22372({ value = 22372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22372, 'data-value': derived.doubled }, children);
}
export default Component22372;
