import React from 'react';
const LABEL_14596 = 'component_14596';
export function Component14596({ value = 14596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14596, 'data-value': derived.doubled }, children);
}
export default Component14596;
