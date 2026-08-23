import React from 'react';
const LABEL_41910 = 'component_41910';
export function Component41910({ value = 41910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41910, 'data-value': derived.doubled }, children);
}
export default Component41910;
