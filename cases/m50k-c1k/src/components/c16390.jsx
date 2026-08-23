import React from 'react';
const LABEL_16390 = 'component_16390';
export function Component16390({ value = 16390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16390, 'data-value': derived.doubled }, children);
}
export default Component16390;
