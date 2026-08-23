import React from 'react';
const LABEL_35393 = 'component_35393';
export function Component35393({ value = 35393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35393, 'data-value': derived.doubled }, children);
}
export default Component35393;
