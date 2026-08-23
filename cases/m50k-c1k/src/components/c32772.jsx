import React from 'react';
const LABEL_32772 = 'component_32772';
export function Component32772({ value = 32772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32772, 'data-value': derived.doubled }, children);
}
export default Component32772;
