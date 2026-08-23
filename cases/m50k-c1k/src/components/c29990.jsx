import React from 'react';
const LABEL_29990 = 'component_29990';
export function Component29990({ value = 29990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29990, 'data-value': derived.doubled }, children);
}
export default Component29990;
