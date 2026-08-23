import React from 'react';
const LABEL_13615 = 'component_13615';
export function Component13615({ value = 13615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13615, 'data-value': derived.doubled }, children);
}
export default Component13615;
