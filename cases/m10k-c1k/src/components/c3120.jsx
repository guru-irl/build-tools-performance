import React from 'react';
const LABEL_3120 = 'component_3120';
export function Component3120({ value = 3120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3120, 'data-value': derived.doubled }, children);
}
export default Component3120;
