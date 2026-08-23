import React from 'react';
const LABEL_21430 = 'component_21430';
export function Component21430({ value = 21430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21430, 'data-value': derived.doubled }, children);
}
export default Component21430;
