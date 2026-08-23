import React from 'react';
const LABEL_856 = 'component_856';
export function Component856({ value = 856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_856, 'data-value': derived.doubled }, children);
}
export default Component856;
