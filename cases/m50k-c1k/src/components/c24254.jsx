import React from 'react';
const LABEL_24254 = 'component_24254';
export function Component24254({ value = 24254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24254, 'data-value': derived.doubled }, children);
}
export default Component24254;
