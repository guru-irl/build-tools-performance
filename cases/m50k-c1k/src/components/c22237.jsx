import React from 'react';
const LABEL_22237 = 'component_22237';
export function Component22237({ value = 22237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22237, 'data-value': derived.doubled }, children);
}
export default Component22237;
