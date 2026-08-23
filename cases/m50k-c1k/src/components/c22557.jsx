import React from 'react';
const LABEL_22557 = 'component_22557';
export function Component22557({ value = 22557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22557, 'data-value': derived.doubled }, children);
}
export default Component22557;
