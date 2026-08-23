import React from 'react';
const LABEL_26997 = 'component_26997';
export function Component26997({ value = 26997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26997, 'data-value': derived.doubled }, children);
}
export default Component26997;
