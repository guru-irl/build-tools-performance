import React from 'react';
const LABEL_35508 = 'component_35508';
export function Component35508({ value = 35508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35508, 'data-value': derived.doubled }, children);
}
export default Component35508;
