import React from 'react';
const LABEL_36979 = 'component_36979';
export function Component36979({ value = 36979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36979, 'data-value': derived.doubled }, children);
}
export default Component36979;
