import React from 'react';
const LABEL_18286 = 'component_18286';
export function Component18286({ value = 18286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18286, 'data-value': derived.doubled }, children);
}
export default Component18286;
