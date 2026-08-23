import React from 'react';
const LABEL_24562 = 'component_24562';
export function Component24562({ value = 24562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24562, 'data-value': derived.doubled }, children);
}
export default Component24562;
