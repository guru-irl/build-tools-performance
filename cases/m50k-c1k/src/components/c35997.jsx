import React from 'react';
const LABEL_35997 = 'component_35997';
export function Component35997({ value = 35997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35997, 'data-value': derived.doubled }, children);
}
export default Component35997;
