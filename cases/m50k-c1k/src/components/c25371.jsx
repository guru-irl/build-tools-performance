import React from 'react';
const LABEL_25371 = 'component_25371';
export function Component25371({ value = 25371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25371, 'data-value': derived.doubled }, children);
}
export default Component25371;
