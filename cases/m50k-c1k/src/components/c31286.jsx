import React from 'react';
const LABEL_31286 = 'component_31286';
export function Component31286({ value = 31286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31286, 'data-value': derived.doubled }, children);
}
export default Component31286;
