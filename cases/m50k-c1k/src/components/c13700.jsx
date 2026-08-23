import React from 'react';
const LABEL_13700 = 'component_13700';
export function Component13700({ value = 13700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13700, 'data-value': derived.doubled }, children);
}
export default Component13700;
