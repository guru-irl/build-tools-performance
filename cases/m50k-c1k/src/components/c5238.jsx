import React from 'react';
const LABEL_5238 = 'component_5238';
export function Component5238({ value = 5238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5238, 'data-value': derived.doubled }, children);
}
export default Component5238;
