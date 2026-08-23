import React from 'react';
const LABEL_13510 = 'component_13510';
export function Component13510({ value = 13510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13510, 'data-value': derived.doubled }, children);
}
export default Component13510;
