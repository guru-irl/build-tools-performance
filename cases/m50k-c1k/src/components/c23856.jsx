import React from 'react';
const LABEL_23856 = 'component_23856';
export function Component23856({ value = 23856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23856, 'data-value': derived.doubled }, children);
}
export default Component23856;
