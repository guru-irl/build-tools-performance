import React from 'react';
const LABEL_241 = 'component_241';
export function Component241({ value = 241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_241, 'data-value': derived.doubled }, children);
}
export default Component241;
