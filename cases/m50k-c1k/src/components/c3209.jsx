import React from 'react';
const LABEL_3209 = 'component_3209';
export function Component3209({ value = 3209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3209, 'data-value': derived.doubled }, children);
}
export default Component3209;
