import React from 'react';
const LABEL_22996 = 'component_22996';
export function Component22996({ value = 22996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22996, 'data-value': derived.doubled }, children);
}
export default Component22996;
