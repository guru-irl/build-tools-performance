import React from 'react';
const LABEL_26895 = 'component_26895';
export function Component26895({ value = 26895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26895, 'data-value': derived.doubled }, children);
}
export default Component26895;
