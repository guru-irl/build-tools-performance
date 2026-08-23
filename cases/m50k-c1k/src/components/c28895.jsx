import React from 'react';
const LABEL_28895 = 'component_28895';
export function Component28895({ value = 28895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28895, 'data-value': derived.doubled }, children);
}
export default Component28895;
