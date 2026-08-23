import React from 'react';
const LABEL_13870 = 'component_13870';
export function Component13870({ value = 13870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13870, 'data-value': derived.doubled }, children);
}
export default Component13870;
