import React from 'react';
const LABEL_9660 = 'component_9660';
export function Component9660({ value = 9660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9660, 'data-value': derived.doubled }, children);
}
export default Component9660;
