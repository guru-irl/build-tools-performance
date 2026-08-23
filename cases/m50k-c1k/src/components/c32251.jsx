import React from 'react';
const LABEL_32251 = 'component_32251';
export function Component32251({ value = 32251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32251, 'data-value': derived.doubled }, children);
}
export default Component32251;
