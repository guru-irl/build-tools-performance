import React from 'react';
const LABEL_22958 = 'component_22958';
export function Component22958({ value = 22958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22958, 'data-value': derived.doubled }, children);
}
export default Component22958;
