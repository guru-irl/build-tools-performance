import React from 'react';
const LABEL_2479 = 'component_2479';
export function Component2479({ value = 2479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2479, 'data-value': derived.doubled }, children);
}
export default Component2479;
