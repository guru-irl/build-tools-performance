import React from 'react';
const LABEL_15995 = 'component_15995';
export function Component15995({ value = 15995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15995, 'data-value': derived.doubled }, children);
}
export default Component15995;
