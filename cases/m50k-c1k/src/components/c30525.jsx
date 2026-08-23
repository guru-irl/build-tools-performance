import React from 'react';
const LABEL_30525 = 'component_30525';
export function Component30525({ value = 30525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30525, 'data-value': derived.doubled }, children);
}
export default Component30525;
