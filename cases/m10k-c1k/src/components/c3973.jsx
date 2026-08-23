import React from 'react';
const LABEL_3973 = 'component_3973';
export function Component3973({ value = 3973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3973, 'data-value': derived.doubled }, children);
}
export default Component3973;
