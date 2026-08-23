import React from 'react';
const LABEL_5647 = 'component_5647';
export function Component5647({ value = 5647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5647, 'data-value': derived.doubled }, children);
}
export default Component5647;
