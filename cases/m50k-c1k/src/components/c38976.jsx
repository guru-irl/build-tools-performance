import React from 'react';
const LABEL_38976 = 'component_38976';
export function Component38976({ value = 38976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38976, 'data-value': derived.doubled }, children);
}
export default Component38976;
