import React from 'react';
const LABEL_36359 = 'component_36359';
export function Component36359({ value = 36359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36359, 'data-value': derived.doubled }, children);
}
export default Component36359;
