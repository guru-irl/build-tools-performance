import React from 'react';
const LABEL_15677 = 'component_15677';
export function Component15677({ value = 15677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15677, 'data-value': derived.doubled }, children);
}
export default Component15677;
