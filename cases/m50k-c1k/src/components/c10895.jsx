import React from 'react';
const LABEL_10895 = 'component_10895';
export function Component10895({ value = 10895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10895, 'data-value': derived.doubled }, children);
}
export default Component10895;
