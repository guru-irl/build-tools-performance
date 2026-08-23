import React from 'react';
const LABEL_5995 = 'component_5995';
export function Component5995({ value = 5995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5995, 'data-value': derived.doubled }, children);
}
export default Component5995;
