import React from 'react';
const LABEL_26812 = 'component_26812';
export function Component26812({ value = 26812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26812, 'data-value': derived.doubled }, children);
}
export default Component26812;
