import React from 'react';
const LABEL_24550 = 'component_24550';
export function Component24550({ value = 24550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24550, 'data-value': derived.doubled }, children);
}
export default Component24550;
