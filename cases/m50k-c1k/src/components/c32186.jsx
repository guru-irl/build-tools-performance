import React from 'react';
const LABEL_32186 = 'component_32186';
export function Component32186({ value = 32186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32186, 'data-value': derived.doubled }, children);
}
export default Component32186;
