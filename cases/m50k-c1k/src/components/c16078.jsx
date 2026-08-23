import React from 'react';
const LABEL_16078 = 'component_16078';
export function Component16078({ value = 16078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16078, 'data-value': derived.doubled }, children);
}
export default Component16078;
