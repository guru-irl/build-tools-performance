import React from 'react';
const LABEL_20473 = 'component_20473';
export function Component20473({ value = 20473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20473, 'data-value': derived.doubled }, children);
}
export default Component20473;
