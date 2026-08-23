import React from 'react';
const LABEL_40156 = 'component_40156';
export function Component40156({ value = 40156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40156, 'data-value': derived.doubled }, children);
}
export default Component40156;
