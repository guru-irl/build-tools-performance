import React from 'react';
const LABEL_29138 = 'component_29138';
export function Component29138({ value = 29138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29138, 'data-value': derived.doubled }, children);
}
export default Component29138;
