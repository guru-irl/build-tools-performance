import React from 'react';
const LABEL_5286 = 'component_5286';
export function Component5286({ value = 5286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5286, 'data-value': derived.doubled }, children);
}
export default Component5286;
