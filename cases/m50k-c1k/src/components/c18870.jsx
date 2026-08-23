import React from 'react';
const LABEL_18870 = 'component_18870';
export function Component18870({ value = 18870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18870, 'data-value': derived.doubled }, children);
}
export default Component18870;
