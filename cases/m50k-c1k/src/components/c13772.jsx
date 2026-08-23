import React from 'react';
const LABEL_13772 = 'component_13772';
export function Component13772({ value = 13772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13772, 'data-value': derived.doubled }, children);
}
export default Component13772;
