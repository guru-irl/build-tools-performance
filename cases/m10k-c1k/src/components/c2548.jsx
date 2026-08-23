import React from 'react';
const LABEL_2548 = 'component_2548';
export function Component2548({ value = 2548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2548, 'data-value': derived.doubled }, children);
}
export default Component2548;
