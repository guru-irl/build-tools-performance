import React from 'react';
const LABEL_24958 = 'component_24958';
export function Component24958({ value = 24958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24958, 'data-value': derived.doubled }, children);
}
export default Component24958;
