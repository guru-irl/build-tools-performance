import React from 'react';
const LABEL_13115 = 'component_13115';
export function Component13115({ value = 13115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13115, 'data-value': derived.doubled }, children);
}
export default Component13115;
