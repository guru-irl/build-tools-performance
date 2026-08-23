import React from 'react';
const LABEL_37181 = 'component_37181';
export function Component37181({ value = 37181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37181, 'data-value': derived.doubled }, children);
}
export default Component37181;
