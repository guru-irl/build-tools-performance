import React from 'react';
const LABEL_19109 = 'component_19109';
export function Component19109({ value = 19109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19109, 'data-value': derived.doubled }, children);
}
export default Component19109;
