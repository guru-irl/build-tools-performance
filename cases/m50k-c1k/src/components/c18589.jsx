import React from 'react';
const LABEL_18589 = 'component_18589';
export function Component18589({ value = 18589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18589, 'data-value': derived.doubled }, children);
}
export default Component18589;
