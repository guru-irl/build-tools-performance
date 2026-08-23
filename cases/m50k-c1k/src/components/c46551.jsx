import React from 'react';
const LABEL_46551 = 'component_46551';
export function Component46551({ value = 46551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46551, 'data-value': derived.doubled }, children);
}
export default Component46551;
