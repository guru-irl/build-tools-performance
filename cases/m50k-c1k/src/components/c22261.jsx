import React from 'react';
const LABEL_22261 = 'component_22261';
export function Component22261({ value = 22261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22261, 'data-value': derived.doubled }, children);
}
export default Component22261;
