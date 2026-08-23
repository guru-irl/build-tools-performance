import React from 'react';
const LABEL_22138 = 'component_22138';
export function Component22138({ value = 22138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22138, 'data-value': derived.doubled }, children);
}
export default Component22138;
