import React from 'react';
const LABEL_32938 = 'component_32938';
export function Component32938({ value = 32938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32938, 'data-value': derived.doubled }, children);
}
export default Component32938;
