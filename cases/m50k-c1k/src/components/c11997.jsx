import React from 'react';
const LABEL_11997 = 'component_11997';
export function Component11997({ value = 11997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11997, 'data-value': derived.doubled }, children);
}
export default Component11997;
