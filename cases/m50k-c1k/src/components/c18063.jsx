import React from 'react';
const LABEL_18063 = 'component_18063';
export function Component18063({ value = 18063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18063, 'data-value': derived.doubled }, children);
}
export default Component18063;
