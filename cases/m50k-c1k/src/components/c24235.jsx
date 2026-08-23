import React from 'react';
const LABEL_24235 = 'component_24235';
export function Component24235({ value = 24235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24235, 'data-value': derived.doubled }, children);
}
export default Component24235;
