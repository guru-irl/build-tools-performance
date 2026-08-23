import React from 'react';
const LABEL_16193 = 'component_16193';
export function Component16193({ value = 16193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16193, 'data-value': derived.doubled }, children);
}
export default Component16193;
