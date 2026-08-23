import React from 'react';
const LABEL_31562 = 'component_31562';
export function Component31562({ value = 31562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31562, 'data-value': derived.doubled }, children);
}
export default Component31562;
