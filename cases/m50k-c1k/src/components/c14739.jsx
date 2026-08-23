import React from 'react';
const LABEL_14739 = 'component_14739';
export function Component14739({ value = 14739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14739, 'data-value': derived.doubled }, children);
}
export default Component14739;
