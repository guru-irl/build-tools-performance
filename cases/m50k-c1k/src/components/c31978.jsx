import React from 'react';
const LABEL_31978 = 'component_31978';
export function Component31978({ value = 31978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31978, 'data-value': derived.doubled }, children);
}
export default Component31978;
