import React from 'react';
const LABEL_46057 = 'component_46057';
export function Component46057({ value = 46057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46057, 'data-value': derived.doubled }, children);
}
export default Component46057;
