import React from 'react';
const LABEL_3078 = 'component_3078';
export function Component3078({ value = 3078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3078, 'data-value': derived.doubled }, children);
}
export default Component3078;
