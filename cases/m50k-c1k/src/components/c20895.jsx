import React from 'react';
const LABEL_20895 = 'component_20895';
export function Component20895({ value = 20895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20895, 'data-value': derived.doubled }, children);
}
export default Component20895;
