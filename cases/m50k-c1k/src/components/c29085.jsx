import React from 'react';
const LABEL_29085 = 'component_29085';
export function Component29085({ value = 29085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29085, 'data-value': derived.doubled }, children);
}
export default Component29085;
