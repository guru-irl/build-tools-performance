import React from 'react';
const LABEL_37831 = 'component_37831';
export function Component37831({ value = 37831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37831, 'data-value': derived.doubled }, children);
}
export default Component37831;
