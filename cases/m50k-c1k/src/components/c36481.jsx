import React from 'react';
const LABEL_36481 = 'component_36481';
export function Component36481({ value = 36481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36481, 'data-value': derived.doubled }, children);
}
export default Component36481;
