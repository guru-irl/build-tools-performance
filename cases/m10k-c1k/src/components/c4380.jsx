import React from 'react';
const LABEL_4380 = 'component_4380';
export function Component4380({ value = 4380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4380, 'data-value': derived.doubled }, children);
}
export default Component4380;
