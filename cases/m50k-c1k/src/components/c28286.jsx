import React from 'react';
const LABEL_28286 = 'component_28286';
export function Component28286({ value = 28286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28286, 'data-value': derived.doubled }, children);
}
export default Component28286;
