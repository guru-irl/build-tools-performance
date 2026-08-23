import React from 'react';
const LABEL_1961 = 'component_1961';
export function Component1961({ value = 1961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1961, 'data-value': derived.doubled }, children);
}
export default Component1961;
