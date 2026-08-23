import React from 'react';
const LABEL_39286 = 'component_39286';
export function Component39286({ value = 39286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39286, 'data-value': derived.doubled }, children);
}
export default Component39286;
