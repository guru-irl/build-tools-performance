import React from 'react';
const LABEL_35978 = 'component_35978';
export function Component35978({ value = 35978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35978, 'data-value': derived.doubled }, children);
}
export default Component35978;
