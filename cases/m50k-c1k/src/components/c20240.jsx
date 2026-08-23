import React from 'react';
const LABEL_20240 = 'component_20240';
export function Component20240({ value = 20240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20240, 'data-value': derived.doubled }, children);
}
export default Component20240;
