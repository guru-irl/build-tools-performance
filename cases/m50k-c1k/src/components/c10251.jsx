import React from 'react';
const LABEL_10251 = 'component_10251';
export function Component10251({ value = 10251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10251, 'data-value': derived.doubled }, children);
}
export default Component10251;
