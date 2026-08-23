import React from 'react';
const LABEL_5557 = 'component_5557';
export function Component5557({ value = 5557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5557, 'data-value': derived.doubled }, children);
}
export default Component5557;
