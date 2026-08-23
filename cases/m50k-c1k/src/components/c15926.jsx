import React from 'react';
const LABEL_15926 = 'component_15926';
export function Component15926({ value = 15926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15926, 'data-value': derived.doubled }, children);
}
export default Component15926;
