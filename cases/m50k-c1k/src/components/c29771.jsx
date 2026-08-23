import React from 'react';
const LABEL_29771 = 'component_29771';
export function Component29771({ value = 29771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29771, 'data-value': derived.doubled }, children);
}
export default Component29771;
