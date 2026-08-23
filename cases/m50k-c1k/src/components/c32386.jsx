import React from 'react';
const LABEL_32386 = 'component_32386';
export function Component32386({ value = 32386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32386, 'data-value': derived.doubled }, children);
}
export default Component32386;
