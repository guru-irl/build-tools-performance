import React from 'react';
const LABEL_29533 = 'component_29533';
export function Component29533({ value = 29533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29533, 'data-value': derived.doubled }, children);
}
export default Component29533;
