import React from 'react';
const LABEL_8870 = 'component_8870';
export function Component8870({ value = 8870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8870, 'data-value': derived.doubled }, children);
}
export default Component8870;
