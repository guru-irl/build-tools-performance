import React from 'react';
const LABEL_31250 = 'component_31250';
export function Component31250({ value = 31250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31250, 'data-value': derived.doubled }, children);
}
export default Component31250;
