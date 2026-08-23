import React from 'react';
const LABEL_18248 = 'component_18248';
export function Component18248({ value = 18248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18248, 'data-value': derived.doubled }, children);
}
export default Component18248;
