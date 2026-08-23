import React from 'react';
const LABEL_2503 = 'component_2503';
export function Component2503({ value = 2503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2503, 'data-value': derived.doubled }, children);
}
export default Component2503;
