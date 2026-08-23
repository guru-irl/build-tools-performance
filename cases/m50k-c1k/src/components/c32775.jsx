import React from 'react';
const LABEL_32775 = 'component_32775';
export function Component32775({ value = 32775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32775, 'data-value': derived.doubled }, children);
}
export default Component32775;
