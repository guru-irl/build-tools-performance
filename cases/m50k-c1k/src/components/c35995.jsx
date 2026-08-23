import React from 'react';
const LABEL_35995 = 'component_35995';
export function Component35995({ value = 35995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35995, 'data-value': derived.doubled }, children);
}
export default Component35995;
