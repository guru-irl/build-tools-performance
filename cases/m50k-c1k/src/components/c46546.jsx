import React from 'react';
const LABEL_46546 = 'component_46546';
export function Component46546({ value = 46546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46546, 'data-value': derived.doubled }, children);
}
export default Component46546;
