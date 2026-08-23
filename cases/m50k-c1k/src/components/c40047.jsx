import React from 'react';
const LABEL_40047 = 'component_40047';
export function Component40047({ value = 40047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40047, 'data-value': derived.doubled }, children);
}
export default Component40047;
