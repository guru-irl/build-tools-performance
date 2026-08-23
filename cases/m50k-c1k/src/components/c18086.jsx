import React from 'react';
const LABEL_18086 = 'component_18086';
export function Component18086({ value = 18086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18086, 'data-value': derived.doubled }, children);
}
export default Component18086;
