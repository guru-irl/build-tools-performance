import React from 'react';
const LABEL_31207 = 'component_31207';
export function Component31207({ value = 31207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31207, 'data-value': derived.doubled }, children);
}
export default Component31207;
