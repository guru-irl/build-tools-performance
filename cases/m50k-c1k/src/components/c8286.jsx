import React from 'react';
const LABEL_8286 = 'component_8286';
export function Component8286({ value = 8286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8286, 'data-value': derived.doubled }, children);
}
export default Component8286;
