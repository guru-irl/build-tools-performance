import React from 'react';
const LABEL_33997 = 'component_33997';
export function Component33997({ value = 33997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33997, 'data-value': derived.doubled }, children);
}
export default Component33997;
