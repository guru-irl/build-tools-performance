import React from 'react';
const LABEL_28016 = 'component_28016';
export function Component28016({ value = 28016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28016, 'data-value': derived.doubled }, children);
}
export default Component28016;
