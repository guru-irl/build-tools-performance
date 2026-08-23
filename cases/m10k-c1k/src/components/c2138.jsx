import React from 'react';
const LABEL_2138 = 'component_2138';
export function Component2138({ value = 2138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2138, 'data-value': derived.doubled }, children);
}
export default Component2138;
