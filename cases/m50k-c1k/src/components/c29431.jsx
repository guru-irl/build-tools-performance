import React from 'react';
const LABEL_29431 = 'component_29431';
export function Component29431({ value = 29431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29431, 'data-value': derived.doubled }, children);
}
export default Component29431;
