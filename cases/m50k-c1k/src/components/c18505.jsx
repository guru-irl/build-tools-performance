import React from 'react';
const LABEL_18505 = 'component_18505';
export function Component18505({ value = 18505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18505, 'data-value': derived.doubled }, children);
}
export default Component18505;
