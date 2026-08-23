import React from 'react';
const LABEL_35895 = 'component_35895';
export function Component35895({ value = 35895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35895, 'data-value': derived.doubled }, children);
}
export default Component35895;
