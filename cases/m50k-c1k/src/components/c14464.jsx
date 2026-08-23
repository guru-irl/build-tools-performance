import React from 'react';
const LABEL_14464 = 'component_14464';
export function Component14464({ value = 14464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14464, 'data-value': derived.doubled }, children);
}
export default Component14464;
