import React from 'react';
const LABEL_37028 = 'component_37028';
export function Component37028({ value = 37028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37028, 'data-value': derived.doubled }, children);
}
export default Component37028;
