import React from 'react';
const LABEL_35328 = 'component_35328';
export function Component35328({ value = 35328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35328, 'data-value': derived.doubled }, children);
}
export default Component35328;
