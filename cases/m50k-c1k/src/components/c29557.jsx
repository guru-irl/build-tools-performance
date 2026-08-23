import React from 'react';
const LABEL_29557 = 'component_29557';
export function Component29557({ value = 29557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29557, 'data-value': derived.doubled }, children);
}
export default Component29557;
