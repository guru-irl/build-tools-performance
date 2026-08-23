import React from 'react';
const LABEL_46319 = 'component_46319';
export function Component46319({ value = 46319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46319, 'data-value': derived.doubled }, children);
}
export default Component46319;
