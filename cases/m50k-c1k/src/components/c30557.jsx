import React from 'react';
const LABEL_30557 = 'component_30557';
export function Component30557({ value = 30557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30557, 'data-value': derived.doubled }, children);
}
export default Component30557;
