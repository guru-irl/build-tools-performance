import React from 'react';
const LABEL_46879 = 'component_46879';
export function Component46879({ value = 46879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46879, 'data-value': derived.doubled }, children);
}
export default Component46879;
