import React from 'react';
const LABEL_12138 = 'component_12138';
export function Component12138({ value = 12138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12138, 'data-value': derived.doubled }, children);
}
export default Component12138;
