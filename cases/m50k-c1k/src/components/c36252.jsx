import React from 'react';
const LABEL_36252 = 'component_36252';
export function Component36252({ value = 36252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36252, 'data-value': derived.doubled }, children);
}
export default Component36252;
