import React from 'react';
const LABEL_5281 = 'component_5281';
export function Component5281({ value = 5281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5281, 'data-value': derived.doubled }, children);
}
export default Component5281;
