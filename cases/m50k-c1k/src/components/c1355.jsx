import React from 'react';
const LABEL_1355 = 'component_1355';
export function Component1355({ value = 1355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1355, 'data-value': derived.doubled }, children);
}
export default Component1355;
