import React from 'react';
const LABEL_13286 = 'component_13286';
export function Component13286({ value = 13286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13286, 'data-value': derived.doubled }, children);
}
export default Component13286;
