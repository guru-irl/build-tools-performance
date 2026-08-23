import React from 'react';
const LABEL_1909 = 'component_1909';
export function Component1909({ value = 1909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1909, 'data-value': derived.doubled }, children);
}
export default Component1909;
