import React from 'react';
const LABEL_16557 = 'component_16557';
export function Component16557({ value = 16557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16557, 'data-value': derived.doubled }, children);
}
export default Component16557;
