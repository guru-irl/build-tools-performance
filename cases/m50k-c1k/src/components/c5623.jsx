import React from 'react';
const LABEL_5623 = 'component_5623';
export function Component5623({ value = 5623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5623, 'data-value': derived.doubled }, children);
}
export default Component5623;
