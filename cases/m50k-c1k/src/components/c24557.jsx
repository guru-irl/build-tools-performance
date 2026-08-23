import React from 'react';
const LABEL_24557 = 'component_24557';
export function Component24557({ value = 24557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24557, 'data-value': derived.doubled }, children);
}
export default Component24557;
