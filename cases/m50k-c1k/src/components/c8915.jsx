import React from 'react';
const LABEL_8915 = 'component_8915';
export function Component8915({ value = 8915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8915, 'data-value': derived.doubled }, children);
}
export default Component8915;
