import React from 'react';
const LABEL_29402 = 'component_29402';
export function Component29402({ value = 29402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29402, 'data-value': derived.doubled }, children);
}
export default Component29402;
