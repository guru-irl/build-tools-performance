import React from 'react';
const LABEL_29503 = 'component_29503';
export function Component29503({ value = 29503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29503, 'data-value': derived.doubled }, children);
}
export default Component29503;
