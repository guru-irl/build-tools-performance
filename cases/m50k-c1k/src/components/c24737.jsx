import React from 'react';
const LABEL_24737 = 'component_24737';
export function Component24737({ value = 24737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24737, 'data-value': derived.doubled }, children);
}
export default Component24737;
