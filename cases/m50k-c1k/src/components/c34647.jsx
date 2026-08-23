import React from 'react';
const LABEL_34647 = 'component_34647';
export function Component34647({ value = 34647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34647, 'data-value': derived.doubled }, children);
}
export default Component34647;
