import React from 'react';
const LABEL_2189 = 'component_2189';
export function Component2189({ value = 2189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2189, 'data-value': derived.doubled }, children);
}
export default Component2189;
