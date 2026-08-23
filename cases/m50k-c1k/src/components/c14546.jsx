import React from 'react';
const LABEL_14546 = 'component_14546';
export function Component14546({ value = 14546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14546, 'data-value': derived.doubled }, children);
}
export default Component14546;
