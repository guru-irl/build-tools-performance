import React from 'react';
const LABEL_3138 = 'component_3138';
export function Component3138({ value = 3138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3138, 'data-value': derived.doubled }, children);
}
export default Component3138;
