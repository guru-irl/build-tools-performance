import React from 'react';
const LABEL_8517 = 'component_8517';
export function Component8517({ value = 8517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8517, 'data-value': derived.doubled }, children);
}
export default Component8517;
