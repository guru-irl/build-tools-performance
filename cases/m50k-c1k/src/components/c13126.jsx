import React from 'react';
const LABEL_13126 = 'component_13126';
export function Component13126({ value = 13126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13126, 'data-value': derived.doubled }, children);
}
export default Component13126;
