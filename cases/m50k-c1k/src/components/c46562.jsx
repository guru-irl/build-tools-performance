import React from 'react';
const LABEL_46562 = 'component_46562';
export function Component46562({ value = 46562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46562, 'data-value': derived.doubled }, children);
}
export default Component46562;
