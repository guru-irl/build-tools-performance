import React from 'react';
const LABEL_1750 = 'component_1750';
export function Component1750({ value = 1750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1750, 'data-value': derived.doubled }, children);
}
export default Component1750;
