import React from 'react';
const LABEL_2483 = 'component_2483';
export function Component2483({ value = 2483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2483, 'data-value': derived.doubled }, children);
}
export default Component2483;
