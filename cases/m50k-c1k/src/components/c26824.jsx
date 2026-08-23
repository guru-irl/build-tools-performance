import React from 'react';
const LABEL_26824 = 'component_26824';
export function Component26824({ value = 26824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26824, 'data-value': derived.doubled }, children);
}
export default Component26824;
