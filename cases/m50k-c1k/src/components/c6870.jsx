import React from 'react';
const LABEL_6870 = 'component_6870';
export function Component6870({ value = 6870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6870, 'data-value': derived.doubled }, children);
}
export default Component6870;
