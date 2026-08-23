import React from 'react';
const LABEL_29369 = 'component_29369';
export function Component29369({ value = 29369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29369, 'data-value': derived.doubled }, children);
}
export default Component29369;
