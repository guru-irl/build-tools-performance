import React from 'react';
const LABEL_34899 = 'component_34899';
export function Component34899({ value = 34899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34899, 'data-value': derived.doubled }, children);
}
export default Component34899;
