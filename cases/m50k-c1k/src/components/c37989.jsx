import React from 'react';
const LABEL_37989 = 'component_37989';
export function Component37989({ value = 37989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37989, 'data-value': derived.doubled }, children);
}
export default Component37989;
