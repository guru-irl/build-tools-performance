import React from 'react';
const LABEL_20800 = 'component_20800';
export function Component20800({ value = 20800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20800, 'data-value': derived.doubled }, children);
}
export default Component20800;
