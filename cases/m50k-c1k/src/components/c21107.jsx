import React from 'react';
const LABEL_21107 = 'component_21107';
export function Component21107({ value = 21107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21107, 'data-value': derived.doubled }, children);
}
export default Component21107;
