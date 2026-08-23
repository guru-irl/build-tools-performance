import React from 'react';
const LABEL_38098 = 'component_38098';
export function Component38098({ value = 38098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38098, 'data-value': derived.doubled }, children);
}
export default Component38098;
