import React from 'react';
const LABEL_14870 = 'component_14870';
export function Component14870({ value = 14870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14870, 'data-value': derived.doubled }, children);
}
export default Component14870;
