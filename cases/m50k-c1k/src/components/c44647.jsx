import React from 'react';
const LABEL_44647 = 'component_44647';
export function Component44647({ value = 44647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44647, 'data-value': derived.doubled }, children);
}
export default Component44647;
