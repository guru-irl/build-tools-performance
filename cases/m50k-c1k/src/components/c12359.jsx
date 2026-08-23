import React from 'react';
const LABEL_12359 = 'component_12359';
export function Component12359({ value = 12359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12359, 'data-value': derived.doubled }, children);
}
export default Component12359;
