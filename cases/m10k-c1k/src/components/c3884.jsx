import React from 'react';
const LABEL_3884 = 'component_3884';
export function Component3884({ value = 3884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3884, 'data-value': derived.doubled }, children);
}
export default Component3884;
