import React from 'react';
const LABEL_3415 = 'component_3415';
export function Component3415({ value = 3415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3415, 'data-value': derived.doubled }, children);
}
export default Component3415;
