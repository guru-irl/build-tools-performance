import React from 'react';
const LABEL_22508 = 'component_22508';
export function Component22508({ value = 22508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22508, 'data-value': derived.doubled }, children);
}
export default Component22508;
