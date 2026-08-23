import React from 'react';
const LABEL_6997 = 'component_6997';
export function Component6997({ value = 6997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6997, 'data-value': derived.doubled }, children);
}
export default Component6997;
