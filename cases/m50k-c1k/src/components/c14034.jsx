import React from 'react';
const LABEL_14034 = 'component_14034';
export function Component14034({ value = 14034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14034, 'data-value': derived.doubled }, children);
}
export default Component14034;
