import React from 'react';
const LABEL_46870 = 'component_46870';
export function Component46870({ value = 46870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46870, 'data-value': derived.doubled }, children);
}
export default Component46870;
