import React from 'react';
const LABEL_5430 = 'component_5430';
export function Component5430({ value = 5430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5430, 'data-value': derived.doubled }, children);
}
export default Component5430;
