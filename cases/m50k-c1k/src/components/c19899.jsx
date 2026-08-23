import React from 'react';
const LABEL_19899 = 'component_19899';
export function Component19899({ value = 19899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19899, 'data-value': derived.doubled }, children);
}
export default Component19899;
