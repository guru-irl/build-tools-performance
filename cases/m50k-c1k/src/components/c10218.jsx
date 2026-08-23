import React from 'react';
const LABEL_10218 = 'component_10218';
export function Component10218({ value = 10218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10218, 'data-value': derived.doubled }, children);
}
export default Component10218;
