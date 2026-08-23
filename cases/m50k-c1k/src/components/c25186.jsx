import React from 'react';
const LABEL_25186 = 'component_25186';
export function Component25186({ value = 25186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25186, 'data-value': derived.doubled }, children);
}
export default Component25186;
