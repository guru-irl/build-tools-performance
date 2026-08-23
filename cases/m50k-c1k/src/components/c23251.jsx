import React from 'react';
const LABEL_23251 = 'component_23251';
export function Component23251({ value = 23251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23251, 'data-value': derived.doubled }, children);
}
export default Component23251;
