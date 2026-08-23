import React from 'react';
const LABEL_30009 = 'component_30009';
export function Component30009({ value = 30009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30009, 'data-value': derived.doubled }, children);
}
export default Component30009;
