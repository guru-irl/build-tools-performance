import React from 'react';
const LABEL_32355 = 'component_32355';
export function Component32355({ value = 32355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32355, 'data-value': derived.doubled }, children);
}
export default Component32355;
