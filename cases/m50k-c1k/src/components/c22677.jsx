import React from 'react';
const LABEL_22677 = 'component_22677';
export function Component22677({ value = 22677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22677, 'data-value': derived.doubled }, children);
}
export default Component22677;
