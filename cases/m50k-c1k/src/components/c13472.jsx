import React from 'react';
const LABEL_13472 = 'component_13472';
export function Component13472({ value = 13472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13472, 'data-value': derived.doubled }, children);
}
export default Component13472;
