import React from 'react';
const LABEL_10856 = 'component_10856';
export function Component10856({ value = 10856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10856, 'data-value': derived.doubled }, children);
}
export default Component10856;
