import React from 'react';
const LABEL_35151 = 'component_35151';
export function Component35151({ value = 35151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35151, 'data-value': derived.doubled }, children);
}
export default Component35151;
