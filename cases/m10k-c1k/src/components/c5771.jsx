import React from 'react';
const LABEL_5771 = 'component_5771';
export function Component5771({ value = 5771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5771, 'data-value': derived.doubled }, children);
}
export default Component5771;
