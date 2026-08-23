import React from 'react';
const LABEL_11542 = 'component_11542';
export function Component11542({ value = 11542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11542, 'data-value': derived.doubled }, children);
}
export default Component11542;
