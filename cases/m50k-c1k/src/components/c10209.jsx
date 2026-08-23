import React from 'react';
const LABEL_10209 = 'component_10209';
export function Component10209({ value = 10209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10209, 'data-value': derived.doubled }, children);
}
export default Component10209;
