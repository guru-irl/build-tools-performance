import React from 'react';
const LABEL_16997 = 'component_16997';
export function Component16997({ value = 16997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16997, 'data-value': derived.doubled }, children);
}
export default Component16997;
