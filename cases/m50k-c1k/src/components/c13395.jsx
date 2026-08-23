import React from 'react';
const LABEL_13395 = 'component_13395';
export function Component13395({ value = 13395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13395, 'data-value': derived.doubled }, children);
}
export default Component13395;
