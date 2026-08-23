import React from 'react';
const LABEL_14286 = 'component_14286';
export function Component14286({ value = 14286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14286, 'data-value': derived.doubled }, children);
}
export default Component14286;
