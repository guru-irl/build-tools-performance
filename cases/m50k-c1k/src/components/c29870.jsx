import React from 'react';
const LABEL_29870 = 'component_29870';
export function Component29870({ value = 29870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29870, 'data-value': derived.doubled }, children);
}
export default Component29870;
