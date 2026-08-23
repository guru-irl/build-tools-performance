import React from 'react';
const LABEL_3086 = 'component_3086';
export function Component3086({ value = 3086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3086, 'data-value': derived.doubled }, children);
}
export default Component3086;
