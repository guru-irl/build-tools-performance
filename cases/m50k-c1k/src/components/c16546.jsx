import React from 'react';
const LABEL_16546 = 'component_16546';
export function Component16546({ value = 16546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16546, 'data-value': derived.doubled }, children);
}
export default Component16546;
