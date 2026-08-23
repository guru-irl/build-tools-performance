import React from 'react';
const LABEL_29604 = 'component_29604';
export function Component29604({ value = 29604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29604, 'data-value': derived.doubled }, children);
}
export default Component29604;
