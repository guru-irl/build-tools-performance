import React from 'react';
const LABEL_13677 = 'component_13677';
export function Component13677({ value = 13677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13677, 'data-value': derived.doubled }, children);
}
export default Component13677;
