import React from 'react';
const LABEL_36870 = 'component_36870';
export function Component36870({ value = 36870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36870, 'data-value': derived.doubled }, children);
}
export default Component36870;
