import React from 'react';
const LABEL_22143 = 'component_22143';
export function Component22143({ value = 22143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22143, 'data-value': derived.doubled }, children);
}
export default Component22143;
