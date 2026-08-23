import React from 'react';
const LABEL_14899 = 'component_14899';
export function Component14899({ value = 14899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14899, 'data-value': derived.doubled }, children);
}
export default Component14899;
