import React from 'react';
const LABEL_15430 = 'component_15430';
export function Component15430({ value = 15430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15430, 'data-value': derived.doubled }, children);
}
export default Component15430;
