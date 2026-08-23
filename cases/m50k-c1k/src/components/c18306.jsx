import React from 'react';
const LABEL_18306 = 'component_18306';
export function Component18306({ value = 18306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18306, 'data-value': derived.doubled }, children);
}
export default Component18306;
