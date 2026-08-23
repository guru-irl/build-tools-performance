import React from 'react';
const LABEL_36574 = 'component_36574';
export function Component36574({ value = 36574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36574, 'data-value': derived.doubled }, children);
}
export default Component36574;
