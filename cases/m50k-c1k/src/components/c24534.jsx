import React from 'react';
const LABEL_24534 = 'component_24534';
export function Component24534({ value = 24534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24534, 'data-value': derived.doubled }, children);
}
export default Component24534;
