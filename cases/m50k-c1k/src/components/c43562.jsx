import React from 'react';
const LABEL_43562 = 'component_43562';
export function Component43562({ value = 43562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43562, 'data-value': derived.doubled }, children);
}
export default Component43562;
