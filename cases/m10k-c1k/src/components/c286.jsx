import React from 'react';
const LABEL_286 = 'component_286';
export function Component286({ value = 286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_286, 'data-value': derived.doubled }, children);
}
export default Component286;
