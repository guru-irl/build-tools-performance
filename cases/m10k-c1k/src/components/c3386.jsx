import React from 'react';
const LABEL_3386 = 'component_3386';
export function Component3386({ value = 3386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3386, 'data-value': derived.doubled }, children);
}
export default Component3386;
