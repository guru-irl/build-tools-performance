import React from 'react';
const LABEL_34138 = 'component_34138';
export function Component34138({ value = 34138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34138, 'data-value': derived.doubled }, children);
}
export default Component34138;
