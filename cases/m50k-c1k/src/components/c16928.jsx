import React from 'react';
const LABEL_16928 = 'component_16928';
export function Component16928({ value = 16928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16928, 'data-value': derived.doubled }, children);
}
export default Component16928;
