import React from 'react';
const LABEL_13330 = 'component_13330';
export function Component13330({ value = 13330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13330, 'data-value': derived.doubled }, children);
}
export default Component13330;
