import React from 'react';
const LABEL_22122 = 'component_22122';
export function Component22122({ value = 22122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22122, 'data-value': derived.doubled }, children);
}
export default Component22122;
