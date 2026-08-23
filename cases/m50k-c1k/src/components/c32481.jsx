import React from 'react';
const LABEL_32481 = 'component_32481';
export function Component32481({ value = 32481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32481, 'data-value': derived.doubled }, children);
}
export default Component32481;
