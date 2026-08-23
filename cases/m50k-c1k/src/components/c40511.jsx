import React from 'react';
const LABEL_40511 = 'component_40511';
export function Component40511({ value = 40511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40511, 'data-value': derived.doubled }, children);
}
export default Component40511;
