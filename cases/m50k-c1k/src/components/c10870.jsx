import React from 'react';
const LABEL_10870 = 'component_10870';
export function Component10870({ value = 10870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10870, 'data-value': derived.doubled }, children);
}
export default Component10870;
