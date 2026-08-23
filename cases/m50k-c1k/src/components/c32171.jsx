import React from 'react';
const LABEL_32171 = 'component_32171';
export function Component32171({ value = 32171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32171, 'data-value': derived.doubled }, children);
}
export default Component32171;
