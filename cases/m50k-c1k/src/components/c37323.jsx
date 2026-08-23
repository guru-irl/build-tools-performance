import React from 'react';
const LABEL_37323 = 'component_37323';
export function Component37323({ value = 37323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37323, 'data-value': derived.doubled }, children);
}
export default Component37323;
