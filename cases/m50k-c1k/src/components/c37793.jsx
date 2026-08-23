import React from 'react';
const LABEL_37793 = 'component_37793';
export function Component37793({ value = 37793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37793, 'data-value': derived.doubled }, children);
}
export default Component37793;
