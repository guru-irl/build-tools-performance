import React from 'react';
const LABEL_46824 = 'component_46824';
export function Component46824({ value = 46824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46824, 'data-value': derived.doubled }, children);
}
export default Component46824;
