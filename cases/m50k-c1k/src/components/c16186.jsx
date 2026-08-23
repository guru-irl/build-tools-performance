import React from 'react';
const LABEL_16186 = 'component_16186';
export function Component16186({ value = 16186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16186, 'data-value': derived.doubled }, children);
}
export default Component16186;
