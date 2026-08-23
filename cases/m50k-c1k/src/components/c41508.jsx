import React from 'react';
const LABEL_41508 = 'component_41508';
export function Component41508({ value = 41508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41508, 'data-value': derived.doubled }, children);
}
export default Component41508;
