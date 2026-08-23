import React from 'react';
const LABEL_14170 = 'component_14170';
export function Component14170({ value = 14170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14170, 'data-value': derived.doubled }, children);
}
export default Component14170;
