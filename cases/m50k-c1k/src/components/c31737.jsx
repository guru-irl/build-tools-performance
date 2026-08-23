import React from 'react';
const LABEL_31737 = 'component_31737';
export function Component31737({ value = 31737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31737, 'data-value': derived.doubled }, children);
}
export default Component31737;
