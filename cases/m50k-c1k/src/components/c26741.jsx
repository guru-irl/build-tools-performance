import React from 'react';
const LABEL_26741 = 'component_26741';
export function Component26741({ value = 26741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26741, 'data-value': derived.doubled }, children);
}
export default Component26741;
