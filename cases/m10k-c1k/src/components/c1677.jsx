import React from 'react';
const LABEL_1677 = 'component_1677';
export function Component1677({ value = 1677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1677, 'data-value': derived.doubled }, children);
}
export default Component1677;
