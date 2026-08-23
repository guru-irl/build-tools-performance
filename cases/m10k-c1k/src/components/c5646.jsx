import React from 'react';
const LABEL_5646 = 'component_5646';
export function Component5646({ value = 5646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5646, 'data-value': derived.doubled }, children);
}
export default Component5646;
