import React from 'react';
const LABEL_25647 = 'component_25647';
export function Component25647({ value = 25647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25647, 'data-value': derived.doubled }, children);
}
export default Component25647;
