import React from 'react';
const LABEL_13546 = 'component_13546';
export function Component13546({ value = 13546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13546, 'data-value': derived.doubled }, children);
}
export default Component13546;
