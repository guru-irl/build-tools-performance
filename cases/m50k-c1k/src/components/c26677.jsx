import React from 'react';
const LABEL_26677 = 'component_26677';
export function Component26677({ value = 26677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26677, 'data-value': derived.doubled }, children);
}
export default Component26677;
