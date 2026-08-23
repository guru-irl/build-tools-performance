import React from 'react';
const LABEL_30044 = 'component_30044';
export function Component30044({ value = 30044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30044, 'data-value': derived.doubled }, children);
}
export default Component30044;
