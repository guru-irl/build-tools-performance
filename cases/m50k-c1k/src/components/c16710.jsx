import React from 'react';
const LABEL_16710 = 'component_16710';
export function Component16710({ value = 16710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16710, 'data-value': derived.doubled }, children);
}
export default Component16710;
