import React from 'react';
const LABEL_22562 = 'component_22562';
export function Component22562({ value = 22562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22562, 'data-value': derived.doubled }, children);
}
export default Component22562;
