import React from 'react';
const LABEL_32544 = 'component_32544';
export function Component32544({ value = 32544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32544, 'data-value': derived.doubled }, children);
}
export default Component32544;
