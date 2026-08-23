import React from 'react';
const LABEL_36824 = 'component_36824';
export function Component36824({ value = 36824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36824, 'data-value': derived.doubled }, children);
}
export default Component36824;
