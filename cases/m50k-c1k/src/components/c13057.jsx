import React from 'react';
const LABEL_13057 = 'component_13057';
export function Component13057({ value = 13057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13057, 'data-value': derived.doubled }, children);
}
export default Component13057;
