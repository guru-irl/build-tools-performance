import React from 'react';
const LABEL_32856 = 'component_32856';
export function Component32856({ value = 32856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32856, 'data-value': derived.doubled }, children);
}
export default Component32856;
