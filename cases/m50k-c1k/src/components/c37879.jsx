import React from 'react';
const LABEL_37879 = 'component_37879';
export function Component37879({ value = 37879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37879, 'data-value': derived.doubled }, children);
}
export default Component37879;
