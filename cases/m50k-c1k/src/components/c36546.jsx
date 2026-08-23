import React from 'react';
const LABEL_36546 = 'component_36546';
export function Component36546({ value = 36546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36546, 'data-value': derived.doubled }, children);
}
export default Component36546;
