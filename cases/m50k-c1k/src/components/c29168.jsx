import React from 'react';
const LABEL_29168 = 'component_29168';
export function Component29168({ value = 29168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29168, 'data-value': derived.doubled }, children);
}
export default Component29168;
