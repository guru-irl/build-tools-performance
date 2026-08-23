import React from 'react';
const LABEL_2984 = 'component_2984';
export function Component2984({ value = 2984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2984, 'data-value': derived.doubled }, children);
}
export default Component2984;
