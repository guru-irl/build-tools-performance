import React from 'react';
const LABEL_24403 = 'component_24403';
export function Component24403({ value = 24403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24403, 'data-value': derived.doubled }, children);
}
export default Component24403;
