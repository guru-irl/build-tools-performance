import React from 'react';
const LABEL_36525 = 'component_36525';
export function Component36525({ value = 36525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36525, 'data-value': derived.doubled }, children);
}
export default Component36525;
